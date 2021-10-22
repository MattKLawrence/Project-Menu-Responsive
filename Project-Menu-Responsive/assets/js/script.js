/* Definizioni costanti */
const MENU = {
    icon: document.getElementById('menu-icon'),
    slider: document.getElementById('menu-slider')
}
const SEARCH = {
    icon: document.getElementById('search-icon'),
    slider: document.getElementById('search-slider'),
    input: document.getElementById('search-input'),
    result: document.getElementById('search-result'),
    audio: new Audio("assets/audio/digit.mp4")
};
const CONTENT = [
    "Contenuto letteratura e filosofia",
    "Contenuto informatica e matematica",
    "Contenuto informatica e altro.."
];

/* Event Listener */
SEARCH.icon.addEventListener('click', toggleSearch);
SEARCH.input.addEventListener('keyup', searchAction);
MENU.icon.addEventListener('click', toggleMenu);

/* Funzioni ricerca */
function searchAction(e) {
    const { input, slider } = SEARCH;
    const ENTER = 13, ESCAPE = 27;

    if(e.keyCode === ENTER) {
        searchFn(input.value);
        input.value = "";
    }
    if(e.keyCode === ESCAPE) {
        slider.classList.replace('attiva', 'chiudi');
    }
}

function searchFn(str) {
    let result = [];
    SEARCH.result.textContent = "";
    CONTENT.forEach(item => {
        if(item.indexOf(str) !== -1) {
            result.push(item);
        }
    });
    if(result.length === 0) {
        return setResultItem("Nessun risultato!");
    }
    result.forEach(risultato => setResultItem(risultato));
}

function setResultItem(ris) {
    let newResult = document.createElement("p");
    newResult.appendChild(document.createTextNode(ris));
    SEARCH.result.appendChild(newResult);
    audio.play();
}

function toggleSearch() {
    const { slider, input } = SEARCH;
    slider.classList.toggle('chiudi');
    slider.classList.toggle('attiva');
    if(slider.classList.contains('attiva')) {
        input.focus();
    }
}

/* Funzioni menù */
function toggleMenu() {
    const { icon, slider } = MENU;
    icon.classList.toggle('trasforma');
    slider.classList.toggle('chiudi');
    slider.classList.toggle('attiva');
}
