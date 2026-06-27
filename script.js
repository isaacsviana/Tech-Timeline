const eventos = [
  {
    ano: 1970,
    titulo: "Criação do Unix",
    descricao: "Ken Thompson e Dennis Ritchie criam o Unix nos laboratórios Bell, revolucionando os sistemas operacionais com conceitos de multitarefa e multiusuário.",
    descricaoLonga: "O Unix foi desenvolvido nos Bell Labs por Ken Thompson, Dennis Ritchie e outros engenheiros. Seu design modular e filosofia de 'tudo é arquivo' influenciou praticamente todos os sistemas operacionais modernos. O Unix introduziu conceitos fundamentais como pipes, shell scripts e permissões de arquivo que são usados até hoje em Linux, macOS e outros sistemas.",
    categoria: "Software",
    icone: "fa-solid fa-terminal",
    curiosidade: "O nome 'Unix' foi um trocadilho com 'Multics', o sistema que Thompson e Ritchie tentavam simplificar."
  },
  {
    ano: 1971,
    titulo: "Intel 4004 — Primeiro Microprocessador",
    descricao: "A Intel lança o 4004, o primeiro microprocessador comercial do mundo, com 2.300 transistores operando a 740 kHz.",
    descricaoLonga: "O Intel 4004 foi projetado por Federico Faggin, Ted Hoff e Stan Mazor. Com apenas 2.300 transistores e uma arquitetura de 4 bits, ele tinha o mesmo poder de processamento que o ENIAC — que ocupava uma sala inteira. O 4004 abriu o caminho para a era dos computadores pessoais e colocou processamento em dispositivos do tamanho de uma mão.",
    categoria: "Hardware",
    icone: "fa-solid fa-microchip",
    curiosidade: "O Intel 4004 foi originalmente criado para uma calculadora da empresa japonesa Busicom, mas a Intel negociou os direitos do design."
  },
  {
    ano: 1975,
    titulo: "Fundação da Microsoft",
    descricao: "Bill Gates e Paul Allen fundam a Microsoft em Albuquerque, Novo México, com o objetivo de criar software para microcomputadores.",
    descricaoLonga: "Bill Gates e Paul Allen fundaram a Microsoft após desenvolverem um interpretador BASIC para o Altair 8800. A empresa rapidamente se tornou referência em software para microcomputadores. A virada decisiva veio em 1980, quando a IBM contratou a Microsoft para fornecer o sistema operacional para seu novo PC — dando início ao domínio da empresa no mercado de software.",
    categoria: "Software",
    icone: "fa-brands fa-windows",
    curiosidade: "O nome 'Microsoft' é uma combinação de 'microcomputer' e 'software', sugerido por Paul Allen."
  },
  {
    ano: 1976,
    titulo: "Fundação da Apple",
    descricao: "Steve Jobs, Steve Wozniak e Ronald Wayne fundam a Apple Computer, lançando o Apple I como kit de computador para entusiastas.",
    descricaoLonga: "A Apple foi fundada em 1º de abril de 1976 na garagem da família Jobs em Los Altos, Califórnia. O Apple I foi montado à mão por Wozniak e vendido por US$ 666,66. A empresa transformaria a indústria com o Apple II em 1977, o Macintosh em 1984 e, décadas depois, com o iPod, iPhone e iPad, redefinindo categorias inteiras de produtos.",
    categoria: "Hardware",
    icone: "fa-brands fa-apple",
    curiosidade: "Ronald Wayne, o terceiro cofundador, vendeu sua participação de 10% por apenas US$ 800 — hoje valeria bilhões."
  },
  {
    ano: 1981,
    titulo: "Lançamento do IBM PC",
    descricao: "A IBM lança o Personal Computer 5150, padronizando a arquitetura x86 e definindo o que chamamos de 'PC' até hoje.",
    descricaoLonga: "O IBM PC 5150 foi lançado em agosto de 1981 com um processador Intel 8088 de 4,77 MHz e rodava o MS-DOS da Microsoft. Sua arquitetura aberta permitiu que outros fabricantes criassem clones compatíveis, popularizando massivamente o computador pessoal. Essa decisão de design moldou a indústria por décadas e explica por que a arquitetura x86 ainda domina o mercado de desktops e laptops.",
    categoria: "Hardware",
    icone: "fa-solid fa-desktop",
    curiosidade: "O IBM PC foi desenvolvido em apenas 12 meses por uma equipe pequena em Boca Raton, Flórida — um recorde para os padrões da IBM na época."
  },
  {
    ano: 1983,
    titulo: "Nascimento do TCP/IP",
    descricao: "O protocolo TCP/IP se torna o padrão oficial da ARPANET, criando a base técnica sobre a qual a internet moderna foi construída.",
    descricaoLonga: "Em 1º de janeiro de 1983, a ARPANET migrou oficialmente para o conjunto de protocolos TCP/IP, desenvolvido por Vint Cerf e Bob Kahn. Esse evento é considerado o nascimento da internet moderna. O TCP/IP resolveu o problema de comunicação entre redes diferentes (inter-networking), permitindo que qualquer dispositivo em qualquer rede se comunicasse com outro de forma padronizada.",
    categoria: "Internet",
    icone: "fa-solid fa-network-wired",
    curiosidade: "Vint Cerf e Bob Kahn são chamados de 'pais da internet' por terem desenvolvido o TCP/IP. Cerf hoje é Vice-Presidente do Google."
  },
  {
    ano: 1985,
    titulo: "Lançamento do Windows 1.0",
    descricao: "A Microsoft lança o Windows 1.0, sua primeira interface gráfica para o MS-DOS, iniciando a era das janelas no PC.",
    descricaoLonga: "O Windows 1.0 foi lançado em novembro de 1985 após dois anos de desenvolvimento. Ele rodava sobre o MS-DOS e introduziu conceitos como janelas, menus e mouse para o público geral dos PCs. Embora limitado pelos padrões atuais — as janelas não podiam se sobrepor — foi o primeiro passo de uma jornada que levaria a Microsoft a dominar o mercado de sistemas operacionais por décadas.",
    categoria: "Software",
    icone: "fa-solid fa-display",
    curiosidade: "Steve Jobs acusou a Microsoft de 'roubar' a ideia de interface gráfica, mas ambas se inspiraram no trabalho pioneiro do Xerox PARC."
  },
  {
    ano: 1991,
    titulo: "Linux — o Kernel que Mudou Tudo",
    descricao: "Linus Torvalds, estudante finlandês de 21 anos, anuncia a criação do kernel Linux em uma lista de e-mails, mudando o mundo do software.",
    descricaoLonga: "Em 25 de agosto de 1991, Linus Torvalds postou a mensagem histórica: 'Estou fazendo um sistema operacional (livre), apenas um hobby, não será grande e profissional como o GNU'. Hoje o Linux alimenta mais de 96% dos servidores web do mundo, todos os supercomputadores do Top500, o Android, e inúmeros dispositivos embarcados. É o maior projeto colaborativo de código aberto da história.",
    categoria: "Software",
    icone: "fa-brands fa-linux",
    curiosidade: "O mascote do Linux, o pinguim Tux, foi escolhido porque Linus Torvalds teve uma experiência traumática ao ser mordido por um pinguim em um zoológico."
  },
  {
    ano: 1991,
    titulo: "Nascimento da World Wide Web",
    descricao: "Tim Berners-Lee publica o primeiro site da história no CERN, inaugurando a World Wide Web e transformando para sempre a comunicação humana.",
    descricaoLonga: "Em 6 de agosto de 1991, Tim Berners-Lee publicou o primeiro site da web em info.cern.ch — uma página simples explicando o projeto World Wide Web. Berners-Lee criou os três pilares da web: HTML para estruturar páginas, HTTP para transferi-las e URLs para identificá-las. Sua decisão de disponibilizar a tecnologia gratuitamente foi crucial para a explosão da internet nos anos seguintes.",
    categoria: "Internet",
    icone: "fa-solid fa-earth-americas",
    curiosidade: "Tim Berners-Lee recusou-se a patentear a web, tornando-a um bem público. Ele disse: 'Se eu tivesse cobrado por isso, não haveria web.'"
  },
  {
    ano: 1993,
    titulo: "Mosaic — O Primeiro Navegador Popular",
    descricao: "O NCSA Mosaic é lançado como o primeiro navegador web com suporte a imagens inline, tornando a internet visualmente acessível ao público.",
    descricaoLonga: "O Mosaic foi desenvolvido por Marc Andreessen e Eric Bina no NCSA (National Center for Supercomputing Applications). Foi o primeiro navegador a exibir imagens diretamente no texto das páginas web, tornando a internet visualmente atrativa. O Mosaic popularizou a web para além dos meios acadêmicos e foi o precursor direto do Netscape Navigator e, indiretamente, de todos os navegadores modernos.",
    categoria: "Internet",
    icone: "fa-solid fa-magnifying-glass",
    curiosidade: "Marc Andreessen, co-criador do Mosaic, fundou a Netscape e depois se tornou um dos investidores mais influentes do Vale do Silício."
  },
  {
    ano: 1995,
    titulo: "Criação do JavaScript",
    descricao: "Brendan Eich cria o JavaScript em apenas 10 dias na Netscape, inventando a linguagem que tornaria a web dinâmica e interativa.",
    descricaoLonga: "Brendan Eich desenvolveu o JavaScript em maio de 1995 enquanto trabalhava na Netscape Communications. A linguagem foi criada em apenas 10 dias para adicionar interatividade ao navegador Netscape Navigator. Originalmente chamada de Mocha e depois LiveScript, foi renomeada para JavaScript como jogada de marketing. Hoje é a linguagem mais usada no mundo, rodando em browsers, servidores (Node.js), mobile e até em hardware.",
    categoria: "Software",
    icone: "fa-brands fa-js",
    curiosidade: "O nome 'JavaScript' foi uma estratégia de marketing para aproveitar a popularidade do Java na época — as duas linguagens não têm relação alguma."
  },
  {
    ano: 1998,
    titulo: "Fundação do Google",
    descricao: "Larry Page e Sergey Brin fundam o Google em uma garagem em Menlo Park, com um algoritmo revolucionário de busca baseado em links.",
    descricaoLonga: "Larry Page e Sergey Brin, estudantes de doutorado em Stanford, criaram o PageRank — um algoritmo que rankeava páginas web pela quantidade e qualidade dos links que as apontavam. Em setembro de 1998, fundaram o Google Inc. com um cheque de US$ 100 mil de Andy Bechtolsheim. O Google transformou completamente como as pessoas encontram informação e se tornou uma das empresas mais valiosas do mundo.",
    categoria: "Internet",
    icone: "fa-brands fa-google",
    curiosidade: "O nome 'Google' é uma grafia intencional de 'googol' (10 elevado a 100), refletindo a missão de organizar a enorme quantidade de informação na web."
  },
  {
    ano: 2001,
    titulo: "Windows XP e iPod",
    descricao: "A Microsoft lança o Windows XP e a Apple lança o iPod no mesmo ano, dois produtos que definiram toda uma geração de usuários de tecnologia.",
    descricaoLonga: "Em 2001, dois lançamentos marcaram a tecnologia: o Windows XP (outubro) trouxe estabilidade e uma interface amigável que conquistou o mercado por mais de uma década. O iPod (outubro) da Apple revolucionou o mercado de música digital com a promessa de '1.000 músicas no seu bolso'. Juntos, esses lançamentos mostram como 2001 foi um ano transformador tanto para computação pessoal quanto para entretenimento digital.",
    categoria: "Hardware",
    icone: "fa-solid fa-compact-disc",
    curiosidade: "O Windows XP ainda roda em mais de 1% dos computadores do mundo mesmo décadas após seu lançamento — e a Microsoft encerrou o suporte em 2014."
  },
  {
    ano: 2004,
    titulo: "Lançamento do Facebook",
    descricao: "Mark Zuckerberg lança o Facebook em Harvard, iniciando a era das redes sociais modernas e transformando como humanos se conectam.",
    descricaoLonga: "O Facebook foi lançado em 4 de fevereiro de 2004 como 'TheFacebook', exclusivo para estudantes de Harvard. Em duas semanas, metade dos alunos de Harvard havia se cadastrado. A rede se expandiu rapidamente para outras universidades e depois para o público geral. Hoje o Meta (empresa que controla o Facebook) tem mais de 3 bilhões de usuários ativos, tornando-se a maior rede social da história humana.",
    categoria: "Internet",
    icone: "fa-brands fa-facebook",
    curiosidade: "Mark Zuckerberg era estudante de segundo ano em Harvard quando lançou o Facebook e nunca concluiu a graduação — mas recebeu um diploma honorário em 2017."
  },
  {
    ano: 2007,
    titulo: "iPhone Reinventa o Celular",
    descricao: "Steve Jobs apresenta o iPhone como 'um iPod, um telefone e um comunicador de internet' — redefinindo completamente o conceito de smartphone.",
    descricaoLonga: "Em 9 de janeiro de 2007, Steve Jobs subiu ao palco na MacWorld e anunciou: 'Hoje a Apple vai reinventar o telefone'. O iPhone original combinava tela multitouch, músicas, internet e telefone em um único dispositivo sem teclado físico. Ele inaugurou a era dos smartphones modernos, criou o mercado de aplicativos móveis e transformou a Apple na empresa mais valiosa do mundo. A indústria de telecomunicações nunca mais foi a mesma.",
    categoria: "Mobile",
    icone: "fa-solid fa-mobile-screen-button",
    curiosidade: "Steve Jobs apresentou o iPhone como '3 produtos revolucionários em um': um iPod com tela widescreen, um telefone e um comunicador de internet. A plateia demorou para perceber que era um único aparelho."
  },
  {
    ano: 2008,
    titulo: "Android Chega ao Mercado",
    descricao: "A Google lança o Android 1.0 no HTC Dream, iniciando a plataforma que se tornaria o sistema operacional móvel mais usado do mundo.",
    descricaoLonga: "O Android foi desenvolvido pela Android Inc., adquirida pelo Google em 2005. O primeiro smartphone Android, o HTC Dream (T-Mobile G1), foi lançado em outubro de 2008. O Android se diferenciou do iOS por ser de código aberto, permitindo que qualquer fabricante o adotasse. Essa estratégia levou o Android a dominar mais de 72% do mercado global de smartphones, com mais de 3 bilhões de dispositivos ativos.",
    categoria: "Mobile",
    icone: "fa-brands fa-android",
    curiosidade: "As versões do Android foram batizadas com nomes de doces em ordem alfabética (Cupcake, Donut, Eclair...) até a versão 10, quando o Google abandonou essa tradição."
  },
  {
    ano: 2009,
    titulo: "Bitcoin — Dinheiro Digital Descentralizado",
    descricao: "Satoshi Nakamoto lança o Bitcoin, a primeira criptomoeda descentralizada, usando blockchain para eliminar a necessidade de intermediários financeiros.",
    descricaoLonga: "Em janeiro de 2009, Satoshi Nakamoto (identidade ainda desconhecida) minerou o primeiro bloco do Bitcoin, chamado de 'bloco gênesis'. O Bitcoin criou o conceito de blockchain — um livro-razão público, imutável e descentralizado. Essa tecnologia permitiu transações financeiras sem bancos ou governos como intermediários. O Bitcoin disparou uma revolução nas finanças digitais, criando um mercado de criptomoedas que vale trilhões de dólares.",
    categoria: "Software",
    icone: "fa-brands fa-bitcoin",
    curiosidade: "Satoshi Nakamoto é a identidade desconhecida por trás do Bitcoin. Em 2010, ele transferiu o controle do projeto e desapareceu. Suas carteiras contêm cerca de 1 milhão de bitcoins, nunca movimentados."
  },
  {
    ano: 2011,
    titulo: "Siri — A Primeira Assistente de IA",
    descricao: "A Apple apresenta a Siri no iPhone 4S, trazendo ao grande público a primeira assistente de voz com inteligência artificial integrada a um smartphone.",
    descricaoLonga: "A Siri foi originalmente desenvolvida como projeto do SRI International financiado pela DARPA, e depois adquirida pela Apple em 2010. Lançada com o iPhone 4S, a Siri popularizou a interação por voz com dispositivos e mostrou ao mundo o potencial dos assistentes virtuais. Ela foi a precursora do Google Assistant, Amazon Alexa e Cortana, inaugurando uma nova era de computação conversacional.",
    categoria: "IA",
    icone: "fa-solid fa-microphone",
    curiosidade: "A Siri foi apresentada pelo próprio Steve Jobs em uma demonstração interna, poucos dias antes de sua morte em outubro de 2011."
  },
  {
    ano: 2016,
    titulo: "AlphaGo Vence o Campeão Mundial",
    descricao: "O AlphaGo da DeepMind derrota Lee Sedol, campeão mundial de Go, marcando um momento histórico para a inteligência artificial.",
    descricaoLonga: "Em março de 2016, o AlphaGo da DeepMind (Google) derrotou o campeão mundial Lee Sedol por 4 a 1 no jogo de tabuleiro Go. O Go sempre foi considerado um desafio impossível para a IA por seu número astronômico de possibilidades (mais do que átomos no universo). O AlphaGo usou redes neurais profundas e aprendizado por reforço — técnicas que inspiraram toda uma geração de sistemas de IA modernos.",
    categoria: "IA",
    icone: "fa-solid fa-chess",
    curiosidade: "A 'jogada 37' do AlphaGo na segunda partida foi tão inesperada que os comentaristas acharam que era um erro — mas foi considerada genial pelos mestres de Go após análise."
  },
  {
    ano: 2022,
    titulo: "ChatGPT Transforma o Mundo",
    descricao: "A OpenAI lança o ChatGPT, um chatbot baseado em GPT-4 que atinge 1 milhão de usuários em 5 dias e inicia a revolução dos modelos de linguagem.",
    descricaoLonga: "Lançado em 30 de novembro de 2022, o ChatGPT se tornou o produto de crescimento mais rápido da história, atingindo 100 milhões de usuários em apenas 2 meses. Baseado no modelo GPT-3.5 (e depois GPT-4), o ChatGPT demonstrou ao grande público o poder dos Large Language Models (LLMs). Ele gerou uma corrida tecnológica entre Google, Microsoft, Meta e outras empresas para desenvolver e integrar IA em seus produtos.",
    categoria: "IA",
    icone: "fa-solid fa-comments",
    curiosidade: "A OpenAI inicialmente lançou o ChatGPT como uma 'pesquisa de baixo custo' sem expectativas comerciais. O sucesso explosivo surpreendeu até seus próprios criadores."
  },
  {
    ano: 2023,
    titulo: "Era dos LLMs Multimodais",
    descricao: "GPT-4V, Gemini e Claude surgem como LLMs multimodais, capazes de processar texto, imagens e outros tipos de dados, redefinindo o que a IA pode fazer.",
    descricaoLonga: "Em 2023, os modelos de linguagem grandes (LLMs) deram um salto qualitativo com capacidades multimodais: GPT-4V da OpenAI, Gemini do Google e Claude da Anthropic passaram a compreender e gerar não apenas texto, mas imagens, código e outros tipos de dados. Essa evolução abriu caminho para aplicações antes impossíveis: análise médica de imagens, código gerado por IA, assistentes que 'veem' o mundo. O ano de 2023 marcou a virada da IA de ferramenta especializada para assistente universal.",
    categoria: "IA",
    icone: "fa-solid fa-brain",
    curiosidade: "O modelo Gemini Ultra do Google foi o primeiro modelo de IA a superar humanos no benchmark MMLU (Massive Multitask Language Understanding), testando conhecimento em 57 áreas diferentes."
  }
];

/* ===== PARTÍCULAS ===== */
(function iniciarParticulas() {
  const canvas = document.getElementById('particulas');
  const ctx = canvas.getContext('2d');
  let particulas = [];

  function redimensionar() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function criarParticula() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.1,
      cor: Math.random() > 0.6 ? '#c4b5fd' : '#ffffff'
    };
  }

  function inicializar() {
    redimensionar();
    particulas = Array.from({ length: 120 }, criarParticula);
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.cor;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animar);
  }

  inicializar();
  animar();
  window.addEventListener('resize', redimensionar);
})();

/* ===== VARIÁVEIS GLOBAIS ===== */
const wrapper    = document.getElementById('timeline-wrapper');
const container  = document.getElementById('timeline-container');
const evContainer = document.getElementById('eventos-container');
const linhaCentral = document.getElementById('linha-central');
const progressoFill = document.getElementById('progresso-fill');
const progressoTexto = document.getElementById('progresso-texto');
const minipPontos = document.getElementById('minimapa-pontos');
const modalOverlay = document.getElementById('modal-overlay');
const modalFechar  = document.getElementById('modal-fechar');

const isMobile = () => window.innerWidth <= 768;

/* ===== RENDERIZAR TIMELINE ===== */
function renderizarEventos() {
  evContainer.innerHTML = '';
  minipPontos.innerHTML = '';

  eventos.forEach((ev, i) => {
    const posicao = i % 2 === 0 ? 'acima' : 'abaixo';

    const item = document.createElement('div');
    item.className = `evento-item ${posicao}`;
    item.dataset.index = i;

    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${ev.ano} — ${ev.titulo}`);
    card.innerHTML = `
      <div class="card-icone"><i class="${ev.icone}" aria-hidden="true"></i></div>
      <div class="card-ano">${ev.ano}</div>
      <div class="card-titulo">${ev.titulo}</div>
      <div class="card-descricao">${ev.descricao}</div>
      <span class="card-tag tag-${ev.categoria}">${ev.categoria}</span>
    `;
    card.addEventListener('click', () => abrirModal(ev));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') abrirModal(ev); });

    const conector = document.createElement('div');
    conector.className = 'conector';

    const ponto = document.createElement('div');
    ponto.className = 'ponto-linha';
    const anoLabel = document.createElement('span');
    anoLabel.className = 'ponto-ano';
    anoLabel.textContent = ev.ano;
    ponto.appendChild(anoLabel);

    if (!isMobile()) {
      if (posicao === 'acima') {
        item.appendChild(card);
        item.appendChild(conector);
        item.appendChild(ponto);
      } else {
        item.appendChild(ponto);
        item.appendChild(conector);
        item.appendChild(card);
      }
    } else {
      item.appendChild(ponto);
      item.appendChild(conector);
      item.appendChild(card);
    }

    evContainer.appendChild(item);

    const miniItem = document.createElement('div');
    miniItem.className = 'minimapa-item';
    miniItem.dataset.index = i;
    miniItem.setAttribute('title', `${ev.ano} — ${ev.titulo}`);
    miniItem.innerHTML = `
      <div class="minimapa-ponto"></div>
      <span class="minimapa-ano">${ev.ano}</span>
    `;
    miniItem.addEventListener('click', () => navegarParaEvento(i));
    minipPontos.appendChild(miniItem);
  });

  const padding = document.createElement('div');
  padding.style.cssText = 'width:80px;height:1px;flex-shrink:0;';
  evContainer.appendChild(padding);

  ajustarLarguraLinha();
  observarVisibilidade();
}

function ajustarLarguraLinha() {
  if (!isMobile()) {
    setTimeout(() => {
      linhaCentral.style.width = container.scrollWidth + 'px';
    }, 50);
  } else {
    linhaCentral.style.width = '';
  }
}

/* ===== INTERSECTION OBSERVER para animação de entrada ===== */
function observarVisibilidade() {
  const itens = document.querySelectorAll('.evento-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visivel');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  itens.forEach(item => obs.observe(item));
}

/* ===== BARRA DE PROGRESSO ===== */
function atualizarProgresso() {
  const scrollAtual = isMobile() ? wrapper.scrollTop : wrapper.scrollLeft;
  const scrollMax   = isMobile()
    ? wrapper.scrollHeight - wrapper.clientHeight
    : wrapper.scrollWidth  - wrapper.clientWidth;

  const pct = scrollMax > 0 ? Math.round((scrollAtual / scrollMax) * 100) : 0;
  progressoFill.style.width = pct + '%';
  progressoTexto.textContent = pct + '%';
  const barraFill = document.getElementById('minimapa-barra-fill');
  if (barraFill) barraFill.style.width = pct + '%';
  atualizarMinimapa(scrollAtual, scrollMax);
}

/* ===== ATUALIZAR MINI-MAPA ===== */
function atualizarMinimapa(scrollAtual, scrollMax) {
  const itens = document.querySelectorAll('.evento-item');
  const miniItens = document.querySelectorAll('.minimapa-item');

  itens.forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    const centro = isMobile()
      ? (rect.top + rect.bottom) / 2
      : (rect.left + rect.right) / 2;

    const dentroDaTela = isMobile()
      ? centro > 0 && centro < window.innerHeight
      : centro > 0 && centro < window.innerWidth;

    if (miniItens[i]) {
      miniItens[i].classList.toggle('ativo', dentroDaTela);
    }
  });
}

/* ===== NAVEGAR PARA EVENTO ===== */
function navegarParaEvento(index) {
  const item = document.querySelector(`.evento-item[data-index="${index}"]`);
  if (!item) return;

  if (isMobile()) {
    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    const rect = item.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    const scrollAlvo = wrapper.scrollLeft + rect.left - wrapperRect.left - wrapper.clientWidth / 2 + item.offsetWidth / 2;
    wrapper.scrollTo({ left: scrollAlvo, behavior: 'smooth' });
  }
}

/* ===== BOTÕES DE NAVEGAÇÃO ===== */
function navegarPasso(direcao) {
  const passo = 320;
  wrapper.scrollBy({ left: direcao * passo, behavior: 'smooth' });
}

document.getElementById('btn-esquerda').addEventListener('click', () => navegarPasso(-1));
document.getElementById('btn-direita').addEventListener('click',  () => navegarPasso(1));

/* ===== TECLADO ===== */
document.addEventListener('keydown', e => {
  if (modalOverlay.classList.contains('aberto')) {
    if (e.key === 'Escape') fecharModal();
    return;
  }
  if (e.key === 'ArrowRight') navegarPasso(1);
  if (e.key === 'ArrowLeft')  navegarPasso(-1);
});

/* ===== DRAG TO SCROLL (desktop) ===== */
(function configurarDrag() {
  let arrastando = false;
  let inicioX = 0;
  let scrollInicio = 0;

  wrapper.addEventListener('mousedown', e => {
    arrastando = true;
    inicioX = e.pageX;
    scrollInicio = wrapper.scrollLeft;
    wrapper.classList.add('arrastando');
  });

  document.addEventListener('mousemove', e => {
    if (!arrastando) return;
    wrapper.scrollLeft = scrollInicio - (e.pageX - inicioX);
  });

  document.addEventListener('mouseup', () => {
    arrastando = false;
    wrapper.classList.remove('arrastando');
  });
})();

/* ===== TOUCH SWIPE (mobile) ===== */
(function configurarTouch() {
  let inicioX = 0, inicioY = 0;

  wrapper.addEventListener('touchstart', e => {
    inicioX = e.touches[0].clientX;
    inicioY = e.touches[0].clientY;
  }, { passive: true });

  wrapper.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - inicioX;
    const dy = e.changedTouches[0].clientY - inicioY;
    if (!isMobile() && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
      navegarPasso(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
})();

/* ===== SCROLL EVENT ===== */
wrapper.addEventListener('scroll', atualizarProgresso, { passive: true });

/* ===== MODAL ===== */
function abrirModal(ev) {
  document.getElementById('modal-imagem').innerHTML = `<i class="${ev.icone}" aria-hidden="true"></i>`;
  document.getElementById('modal-titulo').textContent = ev.titulo;
  document.getElementById('modal-ano-detalhe').textContent = `— ${ev.ano} —`;
  document.getElementById('modal-descricao-longa').textContent = ev.descricaoLonga;
  document.getElementById('modal-curiosidade-texto').textContent = ev.curiosidade;
  modalOverlay.classList.add('aberto');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  modalOverlay.classList.remove('aberto');
  document.body.style.overflow = '';
}

modalFechar.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) fecharModal();
});

/* ===== RESPONSIVIDADE ===== */
let ultimaLargura = window.innerWidth;
window.addEventListener('resize', () => {
  if (window.innerWidth !== ultimaLargura) {
    ultimaLargura = window.innerWidth;
    renderizarEventos();
    atualizarProgresso();
  }
});

/* ===== INIT ===== */
renderizarEventos();
atualizarProgresso();
