let meniu = document.querySelector('.meniu');
let span = meniu.querySelector('span');
let nav = document.querySelector('nav');
const ul = document.querySelector('.nav-ul');
span.style.background = "black";
meniu.addEventListener('click', (e) => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        if (span.style.background == "black") {
            span.style.background = "white";
            meniu.style.setProperty('--meniu-secondary', '30deg');
            meniu.style.setProperty('--meniu-primary', '-30deg');
            nav.style.overflow = "unset";

            ul.style.opacity = "1";
            ul.style.transform = "translateX(0px)";
        } else if (span.style.background == "white") {
            span.style.background = "black";
            meniu.style.setProperty('--meniu-secondary', '0deg');
            meniu.style.setProperty('--meniu-primary', '0deg');
            ul.style.opacity = "0";
            ul.style.transform = "translateX(100%)";
            nav.style.overflow = "hidden";
        }
    }
});

const ora = document.querySelector('.alegere-ora a');
const main = document.querySelector('main');
main.addEventListener('click', (e) => {
    if (e.target.className == "alegere") {
        const alegere_ora = e.target.parentNode.parentNode;
        alegere_ora.style.height = "300px";
        if (alegere_ora.offsetHeight > 60) {
            alegere_ora.style.height = "50px";

        } else {
            alegere_ora.style.height = "850px";
        }
    }
})

const tabel = document.querySelector('table');
const checkd_place = document.querySelector('.checkd-place');
tabel.addEventListener('click', (e) => {
    if (e.target.tagName == "SPAN") {
        let scaun = e.target.textContent;
        var p = document.createElement("p");
        p.textContent = scaun;
        checkd_place.appendChild(p);
    }
})