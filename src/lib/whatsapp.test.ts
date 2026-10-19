import { describe, expect, it } from "vitest";
import { buildQualifiedMessage, waLink } from "./whatsapp";

describe("whatsapp", () => {
  it("links to the school number", () => {
    expect(waLink("oi")).toBe("https://wa.me/5541991517835?text=oi");
  });
  it("includes qualification answers", () => {
    const m = buildQualifiedMessage({
      nome: "Ana",
      idade: "3 anos",
      turno: "Integral",
      objetivo: "Agendar uma visita",
    });
    expect(m).toContain("Meu filho(a) tem 3 anos.");
    expect(m).toContain("Turno de interesse: Integral.");
  });
});
