const questions = [

  {
    question:
      "Quando uma IA pode ajudar em um trabalho da escola, o que você faz?",

    answers: [
      {
        text: "✨ Uso como apoio e faço minha própria parte.",
        type: "estrategista"
      },

      {
        text: "🤖 Deixo a IA fazer praticamente tudo.",
        type: "dependente"
      }
    ]
  },


  {
    question:
      "A IA deu uma resposta estranha. O que você faz?",

    answers: [
      {
        text: "🔍 Pesquiso em outras fontes antes de acreditar.",
        type: "investigadora"
      },

      {
        text: "⚡ Aceito porque provavelmente está certo.",
        type: "impulsiva"
      }
    ]
  },


  {
    question:
      "Você precisa de uma ideia criativa para um projeto.",

    answers: [
      {
        text: "🎨 Peço sugestões e crio algo com meu estilo.",
        type: "criadora"
      },

      {
        text: "📋 Pego uma ideia pronta para terminar rápido.",
        type: "dependente"
      }
    ]
  },


  {
    question:
      "O que mais chama sua atenção no futuro da IA?",

    answers: [
      {
        text: "🛡️ Segurança, privacidade e uso responsável.",
        type: "investigadora"
      },

      {
        text: "🚀 As novas oportunidades que ela pode criar.",
        type: "visionaria"
      }
    ]
  },


  {
    question:
      "Se um aplicativo usasse seus dados para personalizar tudo, você...",

    answers: [
      {
        text: "🔐 Verificaria como meus dados seriam usados.",
        type: "estrategista"
      },

      {
        text: "💗 Aceitaria se isso facilitasse minha vida.",
        type: "impulsiva"
      }
    ]
  },


  {
    question:
      "Qual frase combina mais com você?",

    answers: [
      {
        text: "🌸 Tecnologia é incrível, mas precisamos saber usá-la.",
        type: "estrategista"
      },

      {
        text: "🚀 Quanto mais tecnologia, melhor!",
        type: "visionaria"
      }
    ]
  },


  {
    question:
      "Você está estudando algo novo e a IA explica o assunto.",

    answers: [
      {
        text: "🧠 Faço perguntas até realmente entender.",
        type: "investigadora"
      },

      {
        text: "💡 Pego a resposta e sigo em frente.",
        type: "criadora"
      }
    ]
  },


  {
    question:
      "Você recebeu uma imagem criada por IA para um trabalho.",

    answers: [
      {
        text: "🔎 Verifico as regras e identifico que foi feita por IA.",
        type: "estrategista"
      },

      {
        text: "✨ Uso normalmente sem pensar muito nisso.",
        type: "criadora"
      }
    ]
  },


  {
    question:
      "Se uma profissão mudar por causa da IA, você pensaria...",

    answers: [
      {
        text: "🌷 Vou aprender novas habilidades para acompanhar.",
        type: "visionaria"
      },

      {
        text: "🛡️ Prefiro manter tudo como sempre foi.",
        type: "investigadora"
      }
    ]
  },


  {
    question:
      "Qual seria sua missão usando Inteligência Artificial?",

    answers: [
      {
        text: "🌸 Criar coisas novas e desenvolver minhas ideias.",
        type: "criadora"
      },

      {
        text: "💜 Usar tecnologia com equilíbrio e responsabilidade.",
        type: "estrategista"
      }
    ]
  }

];


const profiles = {

  criadora: {
    icon: "🌸",

    title: "Criadora Digital",

    text:
      "Você gosta de transformar ideias em algo novo. Para você, a IA pode ser uma ferramenta criativa, mas seu toque pessoal continua sendo essencial."
  },


  investigadora: {
    icon: "🔍",

    title: "Investigadora da IA",

    text:
      "Você gosta de pesquisar, comparar informações e entender melhor as coisas antes de tomar uma decisão."
  },


  estrategista: {
    icon: "💗",

    title: "Estrategista Digital",

    text:
      "Você busca equilíbrio. Usa a tecnologia para facilitar sua vida, mas também pensa em responsabilidade e privacidade."
  },


  visionaria: {
    icon: "🚀",

    title: "Visionária do Futuro",

    text:
      "Você olha para a tecnologia pensando nas possibilidades. Novidades despertam sua curiosidade e sua imaginação."
  },


  dependente: {
    icon: "🤖",

    title: "Parceira da IA",

    text:
      "Você vê a IA como uma grande aliada. Seu próximo desafio é aproveitar essa ajuda sem deixar de desenvolver suas próprias ideias."
  },


  impulsiva: {
    icon: "⚡",

    title: "Exploradora Digital",

    text:
      "Você gosta de experimentar novidades. Um bom próximo passo é conferir informações e pensar nas consequências antes de decidir."
  }

};


let currentQuestion = 0;


let scores = {

  criadora: 0,

  investigadora: 0,

  estrategista: 0,

  visionaria: 0,

  dependente: 0,

  impulsiva: 0

};


const inicio =
  document.getElementById("inicio");

const game =
  document.getElementById("game");

const result =
  document.getElementById("result");

const startBtn =
  document.getElementById("startBtn");

const restartBtn =
  document.getElementById("restartBtn");

const question =
  document.getElementById("question");

const answers =
  document.getElementById("answers");

const questionCounter =
  document.getElementById("questionCounter");

const missionNumber =
  document.getElementById("missionNumber");

const progress =
  document.getElementById("progress");


function iniciarJogo() {

  currentQuestion = 0;

  scores = {

    criadora: 0,

    investigadora: 0,

    estrategista: 0,

    visionaria: 0,

    dependente: 0,

    impulsiva: 0

  };

  inicio.classList.add("hidden");

  result.classList.add("hidden");

  game.classList.remove("hidden");

  mostrarPergunta();
}


function mostrarPergunta() {

  const item =
    questions[currentQuestion];

  question.textContent =
    item.question;

  questionCounter.textContent =
    `${currentQuestion + 1} / ${questions.length}`;

  missionNumber.textContent =
    String(currentQuestion + 1)
      .padStart(2, "0");

  progress.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  answers.innerHTML = "";


  item.answers.forEach(answer => {

    const button =
      document.createElement("button");

    button.className = "answer";

    button.textContent =
      answer.text;


    button.addEventListener(
      "click",
      () => {

        scores[answer.type]++;

        currentQuestion++;


        if (
          currentQuestion <
          questions.length
        ) {

          mostrarPergunta();

        } else {

          mostrarResultado();

        }

      }
    );


    answers.appendChild(button);

  });

}


function mostrarResultado() {

  game.classList.add("hidden");

  result.classList.remove("hidden");


  let profile = "criadora";

  let highest = -1;


  for (const type in scores) {

    if (scores[type] > highest) {

      highest = scores[type];

      profile = type;

    }

  }


  const data =
    profiles[profile];


  document.getElementById(
    "resultIcon"
  ).textContent =
    data.icon;


  document.getElementById(
    "resultTitle"
  ).textContent =
    data.title;


  document.getElementById(
    "resultText"
  ).textContent =
    data.text;


  document.getElementById(
    "resultProfile"
  ).textContent =
    data.title;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


startBtn.addEventListener(
  "click",
  iniciarJogo
);


restartBtn.addEventListener(
  "click",
  iniciarJogo
);