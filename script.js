const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pedro é um jovem enfermeiro apaixonado por ajudar as pessoas e melhorar suas condições de vida. Um dia, ele decide embarcar em uma jornada emocionante: criar uma missão inovadora para fornecer assistência médica a comunidades carentes. Seu objetivo é claro, mas ele enfrenta uma série de escolhas ao longo do caminho.Pedro começa refletindo sobre o propósito de sua missão humanitária. Ele entende que o principal objetivo de uma missão humanitária deve ser:",
        alternativas: [
            {
                texto: "Oferecer assistência médica imediata.",
                afirmacao: "Isso permitirá salvar vidas em situações de emergência e fornecer cuidados essenciais rapidamente."
            },
            {
                texto: "Promover a auto-suficiência das comunidades.",
                afirmacao: "Isso capacitará as comunidades a cuidarem de si mesmas no futuro, garantindo um impacto duradouro."
            }
        ]
    },
    {
        enunciado: "Com o objetivo definido, Pedro precisa escolher a região específica onde concentrará seus esforços humanitários. Ele considera duas opções principais:",
        alternativas: [
            {
                texto:"Regiões rurais de difícil acesso.",
                afirmacao: "Essas áreas frequentemente carecem de serviços médicos básicos e são as que mais necessitam de ajuda."
            },
            {
                texto:"Periferias urbanas densamente povoadas.",
                afirmacao: "Essas áreas têm grandes populações vulneráveis que também necessitam de assistência médica, mas são mais acessíveis."
            }
        ]
    },
    {
        enunciado: "Chegou a hora de Pedro desenvolver a estratégia de assistência que será usada em sua missão. Ele sabe que a abordagem correta é crucial, então ele se pergunta qual abordagem deve adotar:",
        alternativas: [
            {
               texto: "Montar clínicas móveis temporárias.",
               afirmacao: "Isso permitirá alcançar diversas comunidades dispersas e fornecer assistência médica rápida e eficaz"
            },
            {
               texto: "Construir um centro de saúde permanente.",
               afirmacao: "Isso proporcionará uma infraestrutura duradoura e um ponto de referência constante para a comunidade."
            }
        ]
    },
    {
        enunciado: "Com a estratégia de assistência definida, Pedro precisa engajar voluntários para garantir o sucesso de sua missão. Ele entende que a participação de profissionais dedicados é crucial:",
        alternativas: [
            {
               texto: "Recrutar voluntários locais e internacionais.",
               afirmacao: "Isso trará diferentes perspectivas e habilidades à missão, enriquecendo a abordagem e a execução do projeto."
            },
            {
               texto: "Trabalhar apenas com uma equipe fixa.",
               afirmacao: "Isso permitirá uma coordenação mais estreita e consistente, mas pode limitar os recursos humanos disponíveis."
            }
        ]
    },
    {
        enunciado: "Com a missão quase completa, Pedro reflete sobre a importância de monitorar e avaliar o impacto de suas ações. Ele sabe que é importante garantir que seus esforços estejam realmente ajudando as comunidades:",
        alternativas: [
            {
                texto:"Coletar dados sobre a saúde das comunidades ao longo do tempo.",
                afirmacao: "Isso permitirá uma coordenação mais estreita e consistente, mas pode limitar os recursos humanos disponíveis."
            },
            {
                texto:"Focar apenas nos resultados imediatos.",
                afirmacao: "Isso pode mostrar um impacto rápido, mas não fornecerá uma visão abrangente do progresso e das necessidades a longo prazo."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Graças a...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();