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
ul_buttoane.addEventListener('click', (e) => {
    showButton();
    if (e.target.tagName == "LI") {
        const name = e.target.className;
        if (name !== "next-page" && name !== "previous-page") {
            nr = e.target.textContent;
            nr = nr * 4;
            displayOnly4(nr);
        } else if (e.target.className == "next-page") {
            if (isNaN(nr)) {
                nr = 4;
            }
            nr = nr + 4;
            console.log(nr + 'dsadasd');
            displayOnly4(nr);
        } else if (e.target.className == "previous-page") {

            nr = nr - 4;
            displayOnly4(nr);
        }
    }
});

// showButton();

function showButton() {
    console.log(nr);
    console.log(container_filme.children.length + 'container');
    if (nr == container_filme.children.length) {
        document.querySelector('.next-page').style.display = "none";
        console.log('a' + nr);
    } else if (nr >= 4) {
        document.querySelector('.next-page').style.display = "flex";
        console.log('b');
    }
    if (nr > 5) {
        console.log('c')
        document.querySelector('.previous-page').style.display = "flex";
    } else if (nr < 5) {
        console.log('d');
        document.querySelector('.previous-page').style.display = "none";

    }
}