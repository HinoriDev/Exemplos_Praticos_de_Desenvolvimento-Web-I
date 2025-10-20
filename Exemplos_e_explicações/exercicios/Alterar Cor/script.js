var corMudar = 'corBlue', corAtual = 'corRed';

function mudaCor(){
    let el = document.getElementById("corDiv");
    el.classList.remove(corAtual);
    el.classList.add(corMudar);
    let aux = corAtual;
    corAtual = corMudar;
    corMudar = aux;
}

document.getElementById('btnCor').addEventListener('click',mudaCor);