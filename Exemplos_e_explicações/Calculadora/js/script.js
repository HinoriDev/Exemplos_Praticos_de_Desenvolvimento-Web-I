function calculo(opRealizar,val1,val2){
    let resultado = 0;
    if (opRealizar == '+'){
        resultado = val1 + val2;
    } else if(opRealizar == '-'){
        resultado = val1 - val2;
    } else if (opRealizar == '*'){
        resultado = val1 * val2;
    } else {
        resultado = val1 / val2;
    }
    return resultado;
}

function eftuaOperacao(){
    let v1 = document.getElementById("v1").value;
    v1 = parseFloat(v1);
    let v2 = document.getElementById("v2").value;
    v2 = parseFloat(v2);
    let op = document.querySelector("input[name=op]:checked");
    if (op != null){
        op = op.value;
        let result = calculo(op,v1,v2);
        document.getElementById("resultFinal").innerHTML = "Resultado = "+ result;
    } else {
        document.getElementById("resultFinal").innerHTML = "Selecione pelo menos uma operação";
    }
}

document.getElementById("btnClicar").addEventListener("click",eftuaOperacao);