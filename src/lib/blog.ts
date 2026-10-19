import type { ComponentType } from "react";
import { ClipboardCheck, Heart, HeartHandshake, Palette, Sprout } from "lucide-react";
import { HorseIcon } from "@/components/site/HorseIcon";
import hero from "@/assets/hero-quintal.webp";
import arte from "@/assets/arte.webp";
import bercario from "@/assets/bercario.webp";
import horta from "@/assets/horta.webp";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "tip"; title: string; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  /** Optional photo; without it the cover is the icon over `color`. */
  cover?: string;
  icon: ComponentType<{ className?: string }>;
  /** bg-* token for the cover and badges. */
  color: string;
  /** WhatsApp message for the CTA at the end of the post. */
  cta: string;
  body: Block[];
};

// Newest first.
export const POSTS: Post[] = [
  {
    slug: "por-que-fazemos-o-que-fazemos",
    title: "Por que fazemos o que fazemos",
    excerpt:
      "Pé no chão, mão na terra e família por perto. A história e as escolhas por trás do jeito Quintal da Nona de educar.",
    category: "Nossa história",
    date: "2026-10-14",
    readMinutes: 5,
    cover: hero,
    icon: Heart,
    color: "bg-primary",
    cta: "Olá! Li o artigo “Por que fazemos o que fazemos” no blog e quero conhecer o Quintal da Nona.",
    body: [
      {
        type: "p",
        text: "Toda escola tem uma resposta para a pergunta “o que vocês ensinam?”. A gente gosta mais de outra pergunta: por quê? Por que horta, por que coelhos, por que deixar a criança se sujar, por que chamar a família para dentro da escola? Este texto é a nossa resposta, sem jargão.",
      },
      { type: "h2", text: "Começou com um sonho simples" },
      {
        type: "p",
        text: "O Quintal da Nona nasceu do sonho de Izabel e Márcio Gardin: um lugar onde a criança é vista por inteiro, junto com a sua família e a sua história. Não um depósito de horas enquanto os pais trabalham, mas uma extensão da casa, com o cheiro de bolo da vó e o espaço do quintal que muitas crianças da cidade já não têm.",
      },
      {
        type: "p",
        text: "O nome não é por acaso. “Nona” é a avó, na tradição italiana tão forte em Campo Largo. É quem acolhe sem pressa, conta história, deixa mexer na massa e ensina sem parecer que está ensinando.",
      },
      { type: "h2", text: "Porque criança aprende com o corpo inteiro" },
      {
        type: "p",
        text: "Antes de aprender a letra A, a criança precisa aprender a confiar no próprio corpo: subir, equilibrar, cair, levantar. Antes de contar até dez, ela precisa sentir que dez sementes enchem a mão. É assim que pensavam Piaget e Paulo Freire, e é assim que a gente vê acontecer todo dia no quintal.",
      },
      {
        type: "list",
        items: [
          "Na horta, a criança aprende ciência e paciência: plantar hoje, colher semanas depois.",
          "Com os coelhos, aprende empatia e responsabilidade: alguém depende do seu cuidado.",
          "Na culinária, aprende matemática e autonomia: medir, misturar, esperar o forno.",
          "Na arte, aprende a dizer o que ainda não sabe colocar em palavras.",
        ],
      },
      { type: "h2", text: "Porque pertencer vem antes de aprender" },
      {
        type: "p",
        text: "Nossa proposta é inspirada na pedagogia sistêmica. Em linguagem simples: a criança não chega sozinha na escola. Ela chega com a família, com a história da família, com o lugar que ocupa em casa. Quando a escola respeita isso, a criança se sente segura. E criança segura explora, pergunta, tenta de novo.",
      },
      { type: "quote", text: "Criança que se sente pertencente tem coragem de aprender." },
      { type: "h2", text: "Porque cuidar bem começa por cuidar de quem cuida" },
      {
        type: "p",
        text: "Nenhuma proposta funciona sem gente boa e bem preparada. Por isso nossa equipe passa por formação continuada. Educador cansado e sem apoio não consegue ter o olhar atento que cada criança merece.",
      },
      { type: "h2", text: "E por que contar tudo isso?" },
      {
        type: "p",
        text: "Porque escolher uma escola é escolher com quem dividir a infância do seu filho. Você merece saber não só o que fazemos, mas por que fazemos. E a melhor forma de sentir isso é vindo aqui, com calma, de preferência num dia de sol, para ver as crianças com as mãos na terra.",
      },
    ],
  },
  {
    slug: "arteterapia-na-infancia",
    title: "Arteterapia na infância: o que é e como a arte ajuda seu filho",
    excerpt:
      "Pintar, modelar e rabiscar é muito mais do que passatempo. Entenda o que é arteterapia e o que a arte faz pelas emoções das crianças.",
    category: "Desenvolvimento",
    date: "2026-10-07",
    readMinutes: 6,
    cover: arte,
    icon: Palette,
    color: "bg-berry",
    cta: "Olá! Li o artigo sobre arteterapia no blog e quero saber como é a arte no dia a dia do Quintal.",
    body: [
      {
        type: "p",
        text: "Seu filho chegou em casa com a mão cheia de tinta e um desenho que, para você, parece só um monte de rabiscos. Para ele, pode ser um dragão, a casa da vó ou o jeito que encontrou de dizer que ficou com saudade. A arte é uma das primeiras línguas da criança.",
      },
      { type: "h2", text: "Primeiro: como se escreve?" },
      {
        type: "p",
        text: "O certo é arteterapia, tudo junto e sem hífen. É uma prática terapêutica que usa a expressão artística (desenho, pintura, colagem, modelagem, música, dança, teatro) como caminho para cuidar das emoções. O foco não é fazer uma obra bonita. É o processo: o que a criança escolhe, como usa o material, o que conta enquanto cria.",
      },
      { type: "h2", text: "Arteterapia é a mesma coisa que aula de arte?" },
      {
        type: "p",
        text: "Não. A arteterapia de verdade é conduzida por um arteterapeuta formado, com objetivos terapêuticos, geralmente em consultório ou clínica. Ela costuma ajudar crianças em momentos difíceis: chegada de um irmão, separação dos pais, luto, ansiedade, dificuldade de falar sobre o que sentem.",
      },
      {
        type: "p",
        text: "Na escola, a gente não faz terapia. Mas bebe da mesma fonte: oferece arte como linguagem, sem certo ou errado, e com um adulto que escuta mais do que corrige.",
      },
      { type: "h2", text: "O que a arte faz pelas crianças" },
      {
        type: "list",
        items: [
          "Dá nome ao que ainda não tem palavra. Raiva vira vermelho forte, saudade vira um desenho da família.",
          "Acalma. Amassar argila e misturar tinta organiza o corpo e baixa a agitação.",
          "Fortalece a autoestima. “Eu que fiz” é uma das frases mais poderosas da infância.",
          "Desenvolve a coordenação fina, base para segurar o lápis e escrever depois.",
          "Ensina a lidar com o erro. A tinta escorreu? Vira outra coisa.",
        ],
      },
      {
        type: "tip",
        title: "Em casa",
        text: "Em vez de perguntar “o que é isso?”, experimente “me conta sobre o seu desenho”. A primeira pergunta pede uma resposta certa. A segunda abre uma conversa.",
      },
      { type: "h2", text: "Como é a arte no Quintal" },
      {
        type: "p",
        text: "Aqui a arte acontece no chão, na mesa e no quintal. Fazemos releituras de artistas (já teve Mondrian no gramado!), pintamos com elementos da natureza, misturamos cores para descobrir outras. O resultado vai para a parede, mas o mais importante fica na criança.",
      },
      { type: "h2", text: "Quando procurar um arteterapeuta" },
      {
        type: "p",
        text: "Se o seu filho passa por uma mudança grande, anda muito retraído, agressivo ou com medos que atrapalham a rotina, vale conversar com o pediatra e com a escola. Um arteterapeuta ou psicólogo infantil pode ajudar. Pedir ajuda cedo é cuidado, não exagero.",
      },
      { type: "quote", text: "A criança não desenha o que vê. Desenha o que sente." },
    ],
  },
  {
    slug: "aulas-de-equitacao-para-criancas",
    title: "Aulas de equitação para crianças: benefícios, idade certa e cuidados",
    excerpt:
      "Andar a cavalo trabalha equilíbrio, coragem e vínculo com o animal. Veja a partir de que idade começar e o que observar antes de matricular.",
    category: "Natureza e bichos",
    date: "2026-09-30",
    readMinutes: 6,
    icon: HorseIcon,
    color: "bg-accent",
    cta: "Olá! Li o artigo sobre equitação para crianças no blog e quero saber mais sobre o contato com animais no Quintal.",
    body: [
      {
        type: "p",
        text: "Poucas coisas brilham tanto nos olhos de uma criança quanto um cavalo. Ele é grande, quente, respira forte e, mesmo assim, aceita ser guiado. Não é à toa que as aulas de equitação para crianças crescem tanto. Mas será que é para o seu filho? E a partir de quando?",
      },
      { type: "h2", text: "Equitação ou equoterapia?" },
      {
        type: "p",
        text: "São coisas diferentes. Equitação é a aula de montaria: aprender a se equilibrar, conduzir o cavalo, cuidar dele. Equoterapia é um tratamento, feito por equipe de saúde (fisioterapeuta, psicólogo, fonoaudiólogo, entre outros), indicado por médico para crianças com deficiências ou necessidades específicas. Se a sua dúvida for equoterapia, comece pela conversa com o pediatra.",
      },
      { type: "h2", text: "O que a criança ganha andando a cavalo" },
      {
        type: "list",
        items: [
          "Equilíbrio e postura. O passo do cavalo mexe o corpo todo, e a criança precisa se ajustar o tempo inteiro.",
          "Força e coordenação. Pernas, tronco e mãos trabalham juntos.",
          "Coragem com segurança. Encarar um animal grande, com um adulto ao lado, ensina que dá para sentir medo e ir mesmo assim.",
          "Empatia e responsabilidade. Escovar, alimentar e respeitar o humor do cavalo faz parte da aula.",
          "Tempo longe das telas, ao ar livre, com cheiro de mato.",
        ],
      },
      { type: "h2", text: "Com que idade começar?" },
      {
        type: "p",
        text: "Muitas escolas de equitação aceitam crianças a partir de 4 ou 5 anos, geralmente em pôneis ou cavalos bem mansos, com o instrutor puxando o animal pela guia. Antes disso, o mais indicado é a criança conviver com o cavalo do chão: fazer carinho, escovar, dar cenoura com a mão aberta. Essa aproximação já é aprendizado.",
      },
      {
        type: "p",
        text: "Mais importante que a idade é o momento da criança: ela segue instruções simples? Aguenta ficar com o capacete? Está curiosa ou só com medo? Respeite o tempo dela.",
      },
      { type: "h2", text: "Checklist de segurança antes de matricular" },
      {
        type: "list",
        items: [
          "Capacete próprio para equitação, bem ajustado, sempre. Sem exceção.",
          "Sapato fechado com salto pequeno (nada de tênis com sola grossa ou chinelo).",
          "Instrutor qualificado e com experiência em crianças.",
          "Cavalos mansos, acostumados com iniciantes, em boa saúde.",
          "Aula em picadeiro cercado, com um adulto ao lado do cavalo no início.",
          "Turmas pequenas, para que o instrutor consiga olhar cada criança.",
        ],
      },
      {
        type: "tip",
        title: "Primeira aula",
        text: "Visite o lugar antes, sem montar. Deixe a criança observar, fazer perguntas e conhecer o cavalo. A primeira aula fica bem mais tranquila quando o animal já não é um desconhecido.",
      },
      { type: "h2", text: "E no dia a dia?" },
      {
        type: "p",
        text: "Nem toda criança precisa montar para ganhar com os animais. Aqui no Quintal, os nossos coelhos já ensinam muito: esperar a vez, tocar com delicadeza, lembrar da água e da comida. O vínculo com os bichos é uma porta para a empatia, seja com um coelho no quintal ou com um cavalo no haras.",
      },
    ],
  },
  {
    slug: "adaptacao-escolar-sem-sofrimento",
    title: "Adaptação escolar: como preparar seu filho (e você) para os primeiros dias",
    excerpt:
      "Choro na porta, aperto no peito, dúvida se fez a escolha certa. Um guia carinhoso para atravessar a adaptação com mais calma.",
    category: "Família",
    date: "2026-09-23",
    readMinutes: 7,
    cover: bercario,
    icon: HeartHandshake,
    color: "bg-sky",
    cta: "Olá! Li o artigo sobre adaptação escolar no blog e quero entender como funciona a adaptação no Quintal.",
    body: [
      {
        type: "p",
        text: "A adaptação escolar é um dos primeiros grandes “tchau” da vida. Para a criança, é aprender que existe um mundo seguro longe da família. Para os pais, é confiar esse pedacinho de coração a outras pessoas. Os dois lados sentem. E está tudo bem.",
      },
      { type: "h2", text: "Choro é normal (e não é sinal de erro)" },
      {
        type: "p",
        text: "Chorar na despedida é a forma que a criança tem de dizer “eu gosto de você e vou sentir sua falta”. Não significa que a escola é ruim ou que ela não está pronta. O que importa é o que acontece depois: ela se acalma? Brinca? Come? Busca o colo da professora? São esses sinais que mostram que a adaptação está andando.",
      },
      { type: "h2", text: "Antes do primeiro dia" },
      {
        type: "list",
        items: [
          "Visite a escola junto com a criança. Deixe ela explorar o espaço com você por perto.",
          "Fale da escola com naturalidade e alegria, sem prometer que “vai ser só diversão”.",
          "Leia livros infantis sobre ir para a escola. Eles dão palavras para o que ela vai sentir.",
          "Ajuste a rotina de sono e alimentação aos horários da escola alguns dias antes.",
          "Deixe ela escolher a mochila ou um objeto de casa para levar (um paninho, um bichinho).",
        ],
      },
      { type: "h2", text: "Durante a adaptação" },
      {
        type: "list",
        items: [
          "Despeça-se sempre. Sair escondido parece mais fácil, mas ensina que você pode sumir a qualquer momento.",
          "Faça despedidas curtas e firmes: um abraço, “volto depois do lanche”, e vá.",
          "Cumpra o que prometeu. Se disse que volta depois do lanche, volte depois do lanche.",
          "Converse com a professora todos os dias. Pergunte como foi, conte como está em casa.",
          "Cuide de você também. A criança percebe a nossa ansiedade.",
        ],
      },
      {
        type: "tip",
        title: "Frase que ajuda",
        text: "Troque “não chora, não precisa chorar” por “eu sei que você está triste, e eu volto para te buscar”. Acolher o sentimento acalma mais do que negar.",
      },
      { type: "h2", text: "Quanto tempo leva?" },
      {
        type: "p",
        text: "Não existe prazo certo. Para algumas crianças são poucos dias. Para outras, algumas semanas. Bebês, crianças que nunca ficaram longe da família e momentos de mudança em casa (irmão novo, mudança de casa) podem pedir mais tempo. Também é comum a criança ir bem na primeira semana e estranhar na segunda, quando percebe que a escola veio para ficar.",
      },
      { type: "h2", text: "Como fazemos no Quintal" },
      {
        type: "p",
        text: "Aqui a adaptação é gradual e acontece no tempo de cada criança e de cada família. Nos primeiros dias, os pais participam junto, e o tempo de permanência vai aumentando aos poucos. A gente não tem pressa: a adaptação é a base de tudo o que vem depois.",
      },
      { type: "quote", text: "Uma boa adaptação não é a que não tem choro. É a que tem vínculo." },
    ],
  },
  {
    slug: "brincar-na-natureza",
    title: "Criança suja é criança feliz? O que o brincar na natureza ensina",
    excerpt:
      "Barro, chuva, galho e formiga. Por que deixar seu filho brincar ao ar livre é um dos melhores presentes para o desenvolvimento dele.",
    category: "Natureza e bichos",
    date: "2026-09-16",
    readMinutes: 5,
    cover: horta,
    icon: Sprout,
    color: "bg-primary",
    cta: "Olá! Li o artigo sobre brincar na natureza no blog e quero conhecer o quintal da escola.",
    body: [
      {
        type: "p",
        text: "Muita criança de hoje passa a maior parte do dia entre paredes: casa, carro, escola, tela. Alguns educadores chamam isso de infância emparedada. O contrário dela é simples e antigo: quintal. Terra, água, sol, bicho, árvore.",
      },
      { type: "h2", text: "O que a natureza oferece que a sala não oferece" },
      {
        type: "list",
        items: [
          "Movimento de verdade. Subir em tronco, correr na grama irregular e pular poça desenvolvem equilíbrio e força.",
          "Brinquedo sem manual. Um galho vira espada, varinha ou colher. A imaginação faz o resto.",
          "Risco na medida certa. Aprender até onde dá para subir ensina a avaliar o perigo.",
          "Ciência na prática. De onde vem a formiga? Por que a semente brotou? Para onde foi a água?",
          "Calma. Muitas famílias percebem que, depois de brincar lá fora, a criança come e dorme melhor.",
        ],
      },
      { type: "h2", text: "E a sujeira?" },
      {
        type: "p",
        text: "Roupa suja lava. Joelho ralado sara. O que fica é a experiência. Claro que alguns cuidados são importantes: vacinas em dia, mãos lavadas antes de comer, protetor solar e roupa que pode sujar. Mas deixar a criança mexer na terra não é descuido. É infância.",
      },
      {
        type: "tip",
        title: "Dica de mãe para mãe",
        text: "Deixe na escola (e no carro) uma muda de roupa “de brincar”. Assim ninguém precisa se preocupar com a roupa nova e a criança fica livre para explorar.",
      },
      { type: "h2", text: "Dá para fazer em casa, mesmo em apartamento" },
      {
        type: "list",
        items: [
          "Um vaso com tempero para regar todo dia.",
          "Passeio de “caça ao tesouro” na praça: três folhas diferentes, uma pedra, uma flor caída.",
          "Banho de chuva no verão, com toalha quentinha esperando.",
          "Feijão no algodão: o clássico que nunca perde a graça.",
        ],
      },
      { type: "h2", text: "Natureza todos os dias" },
      {
        type: "p",
        text: "No Quintal da Nona, natureza não é passeio de fim de semestre. É rotina. Brincamos ao ar livre, cuidamos da horta e dos coelhos e, quando o tempo permite, até a chuva entra na brincadeira. O quintal é a nossa maior sala de aula.",
      },
      { type: "quote", text: "Mão suja de terra hoje, coração cheio de memória amanhã." },
    ],
  },
  {
    slug: "como-escolher-escola-infantil",
    title: "Como escolher a escola infantil: 9 perguntas para fazer na visita",
    excerpt:
      "Fachada bonita não é tudo. Leve esta lista na visita e descubra o que realmente importa para o dia a dia do seu filho.",
    category: "Guia para pais",
    date: "2026-09-09",
    readMinutes: 6,
    icon: ClipboardCheck,
    color: "bg-secondary",
    cta: "Olá! Li o guia “Como escolher a escola infantil” no blog e quero agendar uma visita com as minhas perguntas.",
    body: [
      {
        type: "p",
        text: "Escolher a primeira escola do filho dá frio na barriga. São muitas opções, muitos sites bonitos e pouca informação sobre o que acontece de verdade lá dentro. A visita é o momento de descobrir. Para ajudar, separamos as perguntas que mais fazem diferença.",
      },
      { type: "h2", text: "1. Como é um dia comum aqui?" },
      {
        type: "p",
        text: "Peça para contarem a rotina, do horário de chegada ao de saída. Quanto tempo as crianças passam ao ar livre? E em atividades dirigidas? Existe tempo para brincar livre?",
      },
      { type: "h2", text: "2. Quantas crianças por educador?" },
      {
        type: "p",
        text: "Turmas pequenas permitem olhar para cada criança. Pergunte também quem fica com a turma nos intervalos e nas trocas de turno.",
      },
      { type: "h2", text: "3. Como funciona a adaptação?" },
      {
        type: "p",
        text: "Os pais podem ficar nos primeiros dias? O tempo de permanência aumenta aos poucos? A resposta mostra quanto a escola respeita o tempo da criança.",
      },
      { type: "h2", text: "4. Qual é a proposta pedagógica, em palavras simples?" },
      {
        type: "p",
        text: "Toda escola tem um nome bonito para a sua linha. Peça um exemplo prático: “como isso aparece numa terça-feira normal?”.",
      },
      { type: "h2", text: "5. Como é a alimentação?" },
      {
        type: "p",
        text: "Quem prepara? Tem nutricionista? Como lidam com alergias e restrições? Dá para ver o cardápio da semana?",
      },
      { type: "h2", text: "6. Como a escola conversa com a família?" },
      {
        type: "p",
        text: "Agenda, aplicativo, reuniões, conversas na porta. O importante é saber que você vai ser ouvido e informado, inclusive quando algo não vai bem.",
      },
      { type: "h2", text: "7. O que acontece quando a criança se machuca ou fica doente?" },
      {
        type: "p",
        text: "Pergunte sobre o protocolo, quem avisa os pais e em quanto tempo. Uma boa escola responde isso sem rodeios.",
      },
      { type: "h2", text: "8. Como a equipe é formada e acompanhada?" },
      {
        type: "p",
        text: "Educadores bem preparados e apoiados fazem toda a diferença. Pergunte sobre formação continuada e há quanto tempo a equipe está junta.",
      },
      { type: "h2", text: "9. Posso ver as crianças em atividade?" },
      {
        type: "p",
        text: "Observe o clima: as crianças parecem à vontade? Os adultos se abaixam para falar com elas? Tem desenho de criança na parede ou só decoração pronta?",
      },
      {
        type: "tip",
        title: "Confie no seu sentimento",
        text: "Depois da visita, pergunte a si mesmo: eu me imagino deixando meu filho aqui amanhã? Muitas vezes a resposta já está no peito antes de estar na planilha.",
      },
      { type: "h2", text: "Venha fazer essas perguntas para a gente" },
      {
        type: "p",
        text: "Nós adoramos visita com lista na mão. Agende pelo WhatsApp, traga seu filho e faça todas as perguntas que quiser. A gente mostra o quintal, a horta, os coelhos e responde tudo com calma.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
