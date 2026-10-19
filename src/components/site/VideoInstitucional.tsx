import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import capa from "@/assets/video-capa.webp";

/** Song played over the cover (public/audio/). Swap for a video later if one arrives. */
const AUDIO_SRC = "/audio/no-quintal-da-nona.mp3";

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/** 16:9 "video" block: cover image + play. The audio only downloads after play is pressed. */
export function VideoInstitucional() {
  const audio = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) void a.play();
    else a.pause();
  };

  return (
    <div className="sticker relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-3xl bg-card">
      <img
        src={capa}
        alt="Escola Quintal da Nona: Educação Infantil e Ensino Fundamental"
        loading="lazy"
        width={1280}
        height={720}
        className="h-full w-full object-cover"
      />
      {started && (
        <audio
          ref={audio}
          src={AUDIO_SRC}
          autoPlay
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        />
      )}
      {started ? (
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-full border-2 border-forest bg-card/45 px-2 py-1.5 backdrop-blur-sm">
          <button
            type="button"
            onClick={toggle}
            aria-label={paused ? "Tocar" : "Pausar"}
            className="sticker-sm grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-forest"
          >
            {paused ? (
              <Play className="ml-0.5 h-5 w-5 fill-forest" />
            ) : (
              <Pause className="h-5 w-5 fill-forest" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={time}
            onChange={(e) => {
              if (audio.current) audio.current.currentTime = Number(e.target.value);
            }}
            aria-label="Posição da música"
            className="h-2 min-w-0 flex-1 cursor-pointer accent-primary"
          />
          <span className="shrink-0 font-display text-sm font-semibold tabular-nums text-forest">
            {mmss(time)} / {mmss(duration)}
          </span>
          <div className="relative shrink-0">
            {showVolume && (
              <div className="absolute bottom-full right-0 mb-3 flex items-center rounded-full border-2 border-forest bg-card px-3 py-2">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setVolume(v);
                    const a = audio.current;
                    if (!a) return;
                    a.volume = v;
                    // iOS ignores .volume (hardware buttons only), but muted works there
                    a.muted = v === 0;
                  }}
                  aria-label="Volume"
                  className="h-2 w-28 cursor-pointer accent-primary"
                />
              </div>
            )}
            <button
              type="button"
              onClick={() => setShowVolume((v) => !v)}
              aria-label="Volume"
              aria-expanded={showVolume}
              className="grid h-10 w-10 place-items-center rounded-full text-forest"
            >
              {volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setStarted(true)}
            aria-label="Ouvir a música No Quintal da Nona"
            className="group absolute inset-0 grid place-items-center"
          >
            <span className="sticker grid h-20 w-20 place-items-center rounded-full bg-secondary text-forest transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
              <Play className="ml-1 h-9 w-9 fill-forest sm:h-11 sm:w-11" />
            </span>
          </button>
          <span className="sticker-sm pointer-events-none absolute bottom-4 left-4 -rotate-2 rounded-full bg-card px-3 py-1 font-display text-sm font-semibold">
            Ouça: No Quintal da Nona
          </span>
        </>
      )}
    </div>
  );
}
