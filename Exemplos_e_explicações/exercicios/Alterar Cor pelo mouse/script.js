function mudaCor(){
    let el = document.getElementById("corDiv");
    el.classList.remove('corRed');
    el.classList.add('corBlue');
}

function voltaCor(){
    let el = document.getElementById("corDiv");
    el.classList.remove('corBlue');
    el.classList.add('corRed');
}

document.getElementById('corDiv').addEventListener('mouseenter',mudaCor);


document.getElementById('corDiv').addEventListener('mouseleave',voltaCor);