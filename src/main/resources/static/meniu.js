let meniu = document.querySelector('.meniu');
let span = meniu.querySelector('span');
let meniu_extins = document.querySelector('.meniu-extins');
span.style.background = "#fbbd61";
meniu.addEventListener('click', (e) => {
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (span.style.background == "rgb(251, 189, 97)") {
            span.style.background = "#262626";
            meniu.style.setProperty('--meniu-secondary', '30deg');
            meniu.style.setProperty('--meniu-primary', '-30deg');
            meniu_extins.style.height = "170px";
        } else if (span.style.background == "rgb(38, 38, 38)") {
            span.style.background = "#fbbd61";
            meniu.style.setProperty('--meniu-secondary', '0deg');
            meniu.style.setProperty('--meniu-primary', '0deg');
            meniu_extins.style.height = "0";

        }
    }
});

let meniuHeader = document.querySelector('header .meniu');
let spanH = meniuHeader.querySelector('span');
let meniu_extinsH = document.querySelector('header .meniu-extinsH');
meniuHeader.addEventListener('click', (e) => {
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (meniu_extinsH.offsetHeight > 0) {
            meniu_extinsH.style.height = "0px";
        } else if (meniu_extinsH.offsetHeight == 0) {
            meniu_extinsH.style.height = "200px";
        }
    } else if (window.matchMedia("(min-width: 800px)").matches) {
        meniu_extinsH.style.height = "200px";
        console.log('a');
    }

})