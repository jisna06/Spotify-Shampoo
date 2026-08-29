/* ================= DATA ================= */

const PRODUCTS = [
  {
    id: 'pop',
    name: 'Pop & Shine',
    genre: 'Pop',
    icon: '✨',
    accent: 'var(--pop)',
    tagline: 'For main-character hair.',
    benefit: 'Shine & volume for fine, dull hair',
    price: 18,
    rating: 4.8,
    meta: '🎧 Real tracks, real vibe',
    tracks: [
      ['Levitating', 'Dua Lipa', '41z2bSbbtJ9wiIee4RXdi5'],
      ['Anti-Hero', 'Taylor Swift', '70c3ObJaZ6tbc8CfDYAQjb'],
      ['Sunroof', 'Nicky Youre, dazy', '1MUUdloJ3eOkIXVrWZ0jOe']
    ]
  },

  {
    id: 'rock',
    name: 'Rock & Repair',
    genre: 'Rock',
    icon: '⚡',
    accent: 'var(--rock)',
    tagline: "For hair that doesn't break easily.",
    benefit: 'Repair & strength for damaged, weak hair',
    price: 20,
    rating: 4.9,
    meta: '🎧 Real tracks, real vibe',
    tracks: [
      ['Eye of the Tiger', 'Survivor', '2KH16WveTQWT6KOG9Rg6e2'],
      ['Seven Nation Army', 'The White Stripes', '0OpQGhVLtdZkylKVA6QLnj'],
      ['Enter Sandman', 'Metallica', '3VqHuw0wFlIHcIPWkhIbdQ']
    ]
  },

  {
    id: 'indie',
    name: 'Indie & Nourish',
    genre: 'Indie',
    icon: '🌿',
    accent: 'var(--indie)',
    tagline: 'For softness that feels effortless.',
    benefit: 'Nourishment for dry, frizzy hair',
    price: 19,
    rating: 4.7,
    meta: '🎧 Real tracks, real vibe',
    tracks: [
      ['Electric Feel', 'MGMT', '3FtYbEfBqAlGO46NUDQSAt'],
      ['Skinny Love', 'Bon Iver', '3B3eOgLJSqPEA0RfboIQVM'],
      ['Little Talks', 'Of Monsters and Men', '2ihCaVdNZmnHZWt0fvAM7B']
    ]
  },

  {
    id: 'lofi',
    name: 'Lo-fi & Calm',
    genre: 'Lo-fi',
    icon: '🌙',
    accent: 'var(--lofi)',
    tagline: 'For scalp days that need to slow down.',
    benefit: 'Hydration & scalp care',
    price: 17,
    rating: 4.6,
    meta: '🎧 Real tracks, real vibe',
    tracks: [
      ['Weightless', 'Marconi Union', '6kkwzB6hXLIONkEk9JciA6'],
      ['Sunset Lover', 'Petit Biscuit', '1xWH7lhR9YSWRyhKgvARfv'],
      ['Holocene', 'Bon Iver', '5bGd0OxvxZSATIf2eEkmTD']
    ]
  },

  {
    id: 'edm',
    name: 'EDM & Refresh',
    genre: 'EDM',
    icon: '⚡',
    accent: 'var(--edm)',
    tagline: 'For hair that needed a reset.',
    benefit: 'Deep cleansing & freshness for oily hair',
    price: 19,
    rating: 4.8,
    meta: '🎧 Real tracks, real vibe',
    tracks: [
      ['Clarity', 'Zedd ft. Foxes', '2vPYgry0qM5KdylSl0G26e'],
      ['Levels', 'Avicii', '5Keh5GFL2JEncwANS27YUF'],
      ['Titanium', 'David Guetta ft. Sia', '0lHAMNU8RGiIObScrsRgmP']
    ]
  }
];

const GENRE_KEY = {
  Pop: 'pop',
  Rock: 'rock',
  Indie: 'indie',
  'Lo-fi': 'lofi',
  EDM: 'edm'
};


/* ================= COVER ART ================= */

const COVER_ART = {

  pop: `
    <svg class="cover-art" viewBox="0 0 300 300"
         xmlns="http://www.w3.org/2000/svg">

      <circle cx="82" cy="70" r="26"
              fill="#fff" opacity=".85"/>

      <circle cx="215" cy="52" r="13"
              fill="#fff" opacity=".55"/>

      <circle cx="238" cy="155" r="30"
              fill="#fff" opacity=".6"/>

      <circle cx="55" cy="205" r="16"
              fill="#fff" opacity=".45"/>

      <path
        d="M150 205 L159 230 L184 230
           L163 246 L171 271 L150 256
           L129 271 L137 246 L116 230
           L141 230 Z"
        fill="#fff"
        opacity=".9"/>
    </svg>
  `,

  rock: `
    <svg class="cover-art" viewBox="0 0 300 300"
         xmlns="http://www.w3.org/2000/svg">

      <path
        d="M172 26 L108 165 L150 165
           L118 274 L214 128 L166 128 Z"
        fill="#fff"
        opacity=".85"/>

      <g opacity=".45"
         stroke="#fff"
         stroke-width="12"
         stroke-linecap="round">

        <line x1="52" y1="260"
              x2="52" y2="220"/>

        <line x1="76" y1="260"
              x2="76" y2="196"/>

        <line x1="100" y1="260"
              x2="100" y2="232"/>
      </g>
    </svg>
  `,

  indie: `
    <svg class="cover-art" viewBox="0 0 300 300"
         xmlns="http://www.w3.org/2000/svg">

      <path
        d="M150 262
           C150 262 148 150 150 96
           C152 58 190 34 226 46
           C226 46 213 92 176 104
           C176 104 205 98 224 68"
        stroke="#fff"
        stroke-width="7"
        fill="none"
        stroke-linecap="round"
        opacity=".8"/>

      <path
        d="M150 158
           C150 158 104 146 92 110
           C92 110 128 104 150 136"
        stroke="#fff"
        stroke-width="7"
        fill="none"
        stroke-linecap="round"
        opacity=".65"/>

      <circle cx="150"
              cy="256"
              r="9"
              fill="#fff"
              opacity=".55"/>
    </svg>
  `,

  lofi: `
    <svg class="cover-art" viewBox="0 0 300 300"
         xmlns="http://www.w3.org/2000/svg">

      <path
        d="M196 54
           A72 72 0 1 0 214 198
           A94 94 0 1 1 196 54 Z"
        fill="#fff"
        opacity=".85"/>

      <g stroke="#fff"
         stroke-width="6"
         stroke-linecap="round"
         opacity=".5">

        <line x1="66" y1="212"
              x2="50" y2="244"/>

        <line x1="98" y1="218"
              x2="82" y2="250"/>

        <line x1="130" y1="212"
              x2="114" y2="244"/>
      </g>
    </svg>
  `,

  edm: `
    <svg class="cover-art" viewBox="0 0 300 300"
         xmlns="http://www.w3.org/2000/svg">

      <g fill="none"
         stroke="#fff"
         stroke-width="7"
         opacity=".45">

        <circle cx="150"
                cy="150"
                r="38"/>

        <circle cx="150"
                cy="150"
                r="70"/>

        <circle cx="150"
                cy="150"
                r="104"/>
      </g>

      <circle cx="150"
              cy="150"
              r="16"
              fill="#fff"
              opacity=".9"/>
    </svg>
  `
};


/* ================= TICKER ================= */

const tickerWords = [
  '🎧 POP & SHINE',
  '🎸 ROCK & REPAIR',
  '🌿 INDIE & NOURISH',
  '🌙 LO-FI & CALM',
  '⚡ EDM & REFRESH'
];

const tickerHTML = tickerWords
  .map(word => `<span><b>${word}</b></span>`)
  .join('');

document.getElementById('tickerTrack').innerHTML =
  tickerHTML + tickerHTML;


/* ================= PRODUCT GRID ================= */

const grid = document.getElementById('productGrid');

grid.innerHTML = PRODUCTS.map(product => `

  <div class="card"
       style="--accent:${product.accent}">

    <div class="cover"
         style="--accent:${product.accent}">

      ${COVER_ART[product.id]}

      <div class="eq">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button
        class="cover-play"
        onclick='openPlaylist("${product.id}")'
        aria-label="Open ${product.name} playlist">

        ▶

      </button>

    </div>

    <span
      class="genre-pill"
      style="background:${product.accent};
             color:#0a0a0e;">

      ${product.genre}

    </span>

    <h3>${product.name}</h3>

    <p class="tagline">
      ${product.tagline}
    </p>

    <p class="benefit">
      ${product.benefit}
    </p>

    <div class="card-meta">

      <span>
        ${product.meta}
      </span>

      <span class="rating">
        ★ ${product.rating}
      </span>

    </div>

    <div class="card-foot">

      <span class="price">
        $${product.price}
      </span>

      <button
        class="add-btn"
        style="background:${product.accent}"
        onclick='addToCart({
          id:"${product.id}",
          name:"${product.name}",
          price:${product.price},
          accent:"${product.accent}"
        })'>

        Add to Cart

      </button>

    </div>

  </div>

`).join('');


/* ================= PLAYLISTS ================= */

const plTabs = document.getElementById('plTabs');
const plPanels = document.getElementById('plPanels');

plTabs.innerHTML = PRODUCTS.map((product, index) => `

  <button
    class="tab ${index === 0 ? 'active' : ''}"
    data-id="${product.id}"
    onclick="switchTab('${product.id}')">

    ${product.icon} ${product.genre}

  </button>

`).join('');


plPanels.innerHTML = PRODUCTS.map((product, index) => `

  <div
    class="playlist-panel ${index === 0 ? 'active' : ''}"
    id="panel-${product.id}">

    <div class="pl-header">

      <div
        class="pl-cover"
        style="--accent:${product.accent}">

        ${COVER_ART[product.id]}

      </div>

      <div>

        <div class="pl-title">
          ${product.name}
        </div>

        <div class="pl-sub">
          ${product.tagline} · ${product.meta}
        </div>

      </div>

    </div>

    <div class="embed-stack">

      ${product.tracks.map(track => `

        <iframe
          class="spotify-embed"
          src="https://open.spotify.com/embed/track/${track[2]}?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="${track[0]} by ${track[1]}">
        </iframe>

      `).join('')}

    </div>

  </div>

`).join('');


function switchTab(id) {

  document.querySelectorAll('.tab').forEach(tab => {

    tab.classList.toggle(
      'active',
      tab.dataset.id === id
    );

  });

  document.querySelectorAll('.playlist-panel').forEach(panel => {

    panel.classList.toggle(
      'active',
      panel.id === 'panel-' + id
    );

  });

}


function openPlaylist(id) {

  switchTab(id);

  document
    .getElementById('playlists')
    .scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

}


/* ================= QUIZ ================= */

const QUESTIONS = [

  {
    q: "What's your favourite kind of music?",
    opts: [
      ['Pop — catchy & upbeat', 'pop'],
      ['Rock — loud & powerful', 'rock'],
      ['Indie — dreamy & mellow', 'indie'],
      ['Lo-fi — chill & quiet', 'lofi'],
      ['EDM — bold & electric', 'edm']
    ],
    weight: 2
  },

  {
    q: "How's your mood today?",
    opts: [
      ['Energetic & confident', 'pop'],
      ['Rebellious & fired up', 'rock'],
      ['Dreamy & reflective', 'indie'],
      ['Calm & cozy', 'lofi'],
      ['Ready to reset', 'edm']
    ],
    weight: 1
  },

  {
    q: "What's your main hair concern?",
    opts: [
      ['Lack of shine', 'pop'],
      ['Damage & breakage', 'rock'],
      ['Dryness & frizz', 'indie'],
      ['Sensitive scalp', 'lofi'],
      ['Oily / product build-up', 'edm']
    ],
    weight: 1
  },

  {
    q: "How often do you wash your hair?",
    opts: [
      ['Every day', 'edm'],
      ['Every other day', 'pop'],
      ['About 3× a week', 'indie'],
      ['2× a week', 'lofi'],
      ['Whenever it feels right', 'rock']
    ],
    weight: 1
  },

  {
    q: "Pick your hair personality:",
    opts: [
      ['The main character', 'pop'],
      ['The rebel', 'rock'],
      ['The dreamer', 'indie'],
      ['The chill one', 'lofi'],
      ['The hype starter', 'edm']
    ],
    weight: 1
  }

];


let qIndex = 0;

let qAnswers =
  new Array(QUESTIONS.length).fill(null);


/* ================= QUIZ PROGRESS ================= */

function renderProgress() {

  document.getElementById('quizProgress').innerHTML =
    QUESTIONS.map((question, index) => `

      <i class="${
        index <= qIndex &&
        qAnswers[index] !== null
          ? 'done'
          : ''
      }"></i>

    `).join('');

}


/* ================= RENDER QUESTION ================= */

function renderQuestion() {

  const item = QUESTIONS[qIndex];

  document.getElementById('quizBody').innerHTML = `

    <div class="q-count">
      QUESTION ${qIndex + 1} OF ${QUESTIONS.length}
    </div>

    <div class="q-text">
      ${item.q}
    </div>

    <div class="options">

      ${item.opts.map(([label, value], index) => `

        <button
          class="option ${
            qAnswers[qIndex] === value
              ? 'selected'
              : ''
          }"
          onclick="selectOption(${index})">

          ${label}

        </button>

      `).join('')}

    </div>

  `;

  document.getElementById('backBtn').disabled =
    qIndex === 0;

  document.getElementById('nextBtn').disabled =
    qAnswers[qIndex] === null;

  document.getElementById('nextBtn').textContent =
    qIndex === QUESTIONS.length - 1
      ? 'See My Result'
      : 'Next';

  renderProgress();

}


/* ================= SELECT QUIZ OPTION ================= */

function selectOption(index) {

  qAnswers[qIndex] =
    QUESTIONS[qIndex].opts[index][1];

  renderQuestion();

}


/* ================= NEXT QUESTION ================= */

function quizNext() {

  if (qAnswers[qIndex] === null) {
    return;
  }

  if (qIndex === QUESTIONS.length - 1) {

    finishQuiz();

    return;
  }

  qIndex++;

  renderQuestion();

}


/* ================= PREVIOUS QUESTION ================= */

function quizBack() {

  if (qIndex === 0) {
    return;
  }

  qIndex--;

  renderQuestion();

}


/* ================= RETAKE QUIZ ================= */

function retakeQuiz() {

  qIndex = 0;

  qAnswers =
    new Array(QUESTIONS.length).fill(null);

  document.getElementById(
    'wrapped-section'
  ).style.display = 'none';

  document.getElementById(
    'quiz'
  ).scrollIntoView({
    behavior: 'smooth'
  });

  renderQuestion();

}


/* ================= QUIZ RESULT ================= */

let lastWrappedProductId = null;


function finishQuiz() {

  const scores = {
    pop: 0,
    rock: 0,
    indie: 0,
    lofi: 0,
    edm: 0
  };


  QUESTIONS.forEach((question, index) => {

    scores[qAnswers[index]] +=
      question.weight;

  });


  const maxScore =
    Math.max(...Object.values(scores));


  const totalWeight =
    QUESTIONS.reduce(
      (sum, question) =>
        sum + question.weight,
      0
    );


  const winner =
    Object.keys(scores).find(
      key => scores[key] === maxScore
    );


  const product =
    PRODUCTS.find(
      product => product.id === winner
    );


  lastWrappedProductId =
    product.id;


  const concernLabels = {

    pop: 'Lack of Shine',

    rock: 'Damage & Breakage',

    indie: 'Dryness & Frizz',

    lofi: 'Sensitive Scalp',

    edm: 'Oily Build-up'

  };


  const concernAnswer =
    qAnswers[2];


  const washLabels = {

    edm: 'Daily Washer',

    pop: 'Every Other Day',

    indie: '3× a Week',

    lofi: '2× a Week',

    rock: 'Whenever It Feels Right'

  };


  const washAnswer =
    qAnswers[3];


  document.documentElement.style.setProperty(
    '--w-accent',
    product.accent
  );


  document.getElementById(
    'wVibeTitle'
  ).innerHTML =
    `Your vibe:
     <span style="color:${product.accent}">
       ${product.genre}
     </span>`;


  document.getElementById(
    'wShampoo'
  ).textContent =
    product.name;


  document.getElementById(
    'wConcern'
  ).textContent =
    concernLabels[concernAnswer];


  document.getElementById(
    'wAnthem'
  ).textContent =
    product.tracks[0][0]
    + ' — '
    + product.tracks[0][1];


  document.getElementById(
    'wWash'
  ).textContent =
    washLabels[washAnswer];


  const pct =
    Math.round(
      (maxScore / totalWeight) * 100
    );


  document.getElementById(
    'pctLabel'
  ).textContent =
    `${pct}% ${product.genre} hair personality match`;


  document.getElementById(
    'wrapped-section'
  ).style.display = 'block';


  document.getElementById(
    'wrappedAddBtn'
  ).style.background =
    product.accent;


  document.getElementById(
    'wrappedAddBtn'
  ).onclick = () => {

    addToCart({

      id: product.id,

      name: product.name,

      price: product.price,

      accent: product.accent

    });

  };


  setTimeout(() => {

    document.getElementById(
      'pctFill'
    ).style.width =
      pct + '%';


    document.getElementById(
      'wrapped-section'
    ).scrollIntoView({
      behavior: 'smooth'
    });

  }, 100);

}


/* ================= PLAYLIST FROM WRAPPED ================= */

function selectPlaylistFromWrapped() {

  if (lastWrappedProductId) {

    switchTab(
      lastWrappedProductId
    );

  }

}


/* ================= INITIALIZE QUIZ ================= */

renderQuestion();


/* ================= CART ================= */

let cart = [];


function addToCart(item) {

  cart.push(item);

  updateCartUI();

  showToast(
    `Added ${item.name} to cart 🎧`
  );

}


function removeFromCart(index) {

  cart.splice(index, 1);

  updateCartUI();

}


function updateCartUI() {

  document.getElementById(
    'cartCount'
  ).textContent =
    cart.length;


  const container =
    document.getElementById(
      'cartItems'
    );


  if (cart.length === 0) {

    container.innerHTML = `
      <div class="cart-empty">
        Your cart is empty.<br>
        Go find your hair vibe 🎧
      </div>
    `;

    document.getElementById(
      'cartTotal'
    ).style.display = 'none';


    document.getElementById(
      'checkoutBtn'
    ).style.display = 'none';


    return;
  }


  container.innerHTML =
    cart.map((item, index) => `

      <div class="cart-item">

        <div
          class="ci-cover"
          style="background:${item.accent}">
        </div>

        <div>

          <div class="ci-name">
            ${item.name}
          </div>

          <div class="ci-price">
            $${item.price}
          </div>

        </div>

        <button
          class="ci-remove"
          onclick="removeFromCart(${index})">

          Remove

        </button>

      </div>

    `).join('');


  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price,
      0
    );


  document.getElementById(
    'cartTotal'
  ).style.display = 'flex';


  document.getElementById(
    'cartTotalVal'
  ).textContent =
    '$' + total;


  document.getElementById(
    'checkoutBtn'
  ).style.display = 'block';

}


/* ================= OPEN CART ================= */

function openCart() {

  document.getElementById(
    'overlay'
  ).classList.add('show');


  document.getElementById(
    'drawer'
  ).classList.add('show');

}


/* ================= CLOSE CART ================= */

function closeCart() {

  document.getElementById(
    'overlay'
  ).classList.remove('show');


  document.getElementById(
    'drawer'
  ).classList.remove('show');

}


/* ================= INITIAL CART ================= */

updateCartUI();


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

  const element =
    document.getElementById(
      'toast'
    );


  element.textContent =
    message;


  element.classList.add(
    'show'
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(() => {

      element.classList.remove(
        'show'
      );

    }, 2200);

}


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            'in'
          );

        }

      });

    },
    {
      threshold: 0.15
    }
  );


document
  .querySelectorAll('.reveal')
  .forEach(element => {

    observer.observe(element);

  });