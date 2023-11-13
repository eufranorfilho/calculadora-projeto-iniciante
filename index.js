function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
   
}

function clean (){
    document.querySelector('#resultado').innerHTML =''
}

function clearBack (){
    let resultado = document.getElementById('resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length-1);
}

function calcular(){
    let resultado = document.querySelector('#resultado').innerHTML;
    if(resultado)
    document.querySelector('#resultado').innerHTML = eval(resultado);
}