let main = document.querySelector('main');
let container_filme = document.querySelector('.container-filme');
let ul_buttoane = document.querySelector('.ul-buttoane');
let container_nav_fiexd = document.querySelector('.container-nav-fiexd');
console.log(container_nav_fiexd);
window.onscroll = function(e) {
    if (window.scrollY > 100) {
        container_nav_fiexd.style.display = "unset";
    } else if (window.scrollY < 100) {
        container_nav_fiexd.style.display = "none";
    }
}

function addButoane() {
    let maxButoane = Math.ceil(container_filme.children.length / 4);
    let nr = maxButoane;
    let final = ul_buttoane.children.length - 1;
    for (let i = 0; i < maxButoane; i++) {
        if (nr !== 1) {
            let li = document.createElement('li');
            li.textContent = nr;
            nr--;
            ul_buttoane.insertBefore(li, ul_buttoane.children[final]);
        }
    }
}
addButoane();

function displayOnly4(numar) {
    for (let i = 0; i < container_filme.children.length; i++) {
        container_filme.children[i].style.display = "none";
    }
    let start = numar - 4;
    for (let i = start; i < numar; i++) {
        container_filme.children[i].style.display = "unset";
    }
}
displayOnly4(4);
let nr;
showButton();

ul_buttoane.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        const name = e.target.className;
        if (name !== "next-page" && name !== "previous-page") {
            nr = e.target.textContent;
            nr = parseInt(nr);
            animateieButton(parseInt(nr, 10));
            disableAnimatie(nr);
            nr = nr * 4;
            displayOnly4(nr);
        } else if (e.target.className == "next-page") {
            if (isNaN(nr)) {
                nr = 4;
            }
            nr = nr + 4;
            let aux = nr / 4;
            aux = parseInt(aux);
            animateieButton(aux);
            disableAnimatie(aux);
            displayOnly4(nr);
        } else if (e.target.className == "previous-page") {
            nr = nr - 4;
            let aux = nr / 4;
            aux = parseInt(aux);
            animateieButton(aux);
            disableAnimatie(aux);
            displayOnly4(nr);
        }
    }
    if (nr === container_filme.children.length) {
        document.querySelector('.next-page').style.display = "none";
    } else {
        document.querySelector('.next-page').style.display = "flex";
    }
    if (nr > 4) {
        document.querySelector('.previous-page').style.display = "flex";
    } else {
        document.querySelector('.previous-page').style.display = "none";
    }
});

function animateieButton(nr) {
    ul_buttoane.children[nr].style.color = "black";
    ul_buttoane.children[nr].style.border = "2px solid #fbbd61";
    console.log(ul_buttoane.children[2]);

}

function disableAnimatie(nr) {
    for (let i = 0; i < ul_buttoane.children.length; i++) {
        if (i !== nr) {
            ul_buttoane.children[i].style.border = "1px solid gray";
            color = "#fbbd61";

        }
    }
}

function showButton() {
    document.querySelector('.previous-page').style.display = "none";
}