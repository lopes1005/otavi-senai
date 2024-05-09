let numeros = []

for(i=0; i<25; cont++){
    let n = Math.ceil(Math.random()*100)
    numeros.push(n)

}
console.log(numeros);
function att(){



let vetor = document.getElementById('divVetor')
for(i=0; i<numeros.length; i++){
    vetor.innerHTML += numeros[i] + '<br>'
}
}
let n1
function lerN1() {
    // ler n1 ("to function")
    do{
        n1 = Number(prompt())
    }
}
