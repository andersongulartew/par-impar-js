function qualValor() {
    let numero = Number(prompt("Digite sua nota Nº1:"));

   let tipo 
    if(numero % 2 === 0) {
        tipo = "PAR";
    }else{
        tipo = "IMPAR";
    }

    let res =document.getElementById('valor');
    
    res.innerHTML += `<p> O número ${numero} que foi digitado é <strong>${tipo}<strong>.<p>`;
     
}


