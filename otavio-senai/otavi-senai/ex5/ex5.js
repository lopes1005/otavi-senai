function attFor() {
   let nMultas = Number(prompt("qual o numero de multas que deseja cadastrar"))
   let somaM = 0
    let somaP = 0

   for (let for1 = nMultas; for1 > 0; for1--){
    let multas = Number(prompt("qual o valor da multa"))
    let pontos = Number(prompt("quantos pontos foram dados"))
    somaM += multas
    somaP += pontos
   


}
if(somaM >= 5000){
    alert(`com o valor das multas é possivel comprar um gol 1980 no valor de 5000, total de multas é igual ${multas}`)
}else(
    (`não tem como comprar um gol 1980 com o valor total de multas que você tem é igual ${multas}`)
)
if(somaP >= 21){
    alert(`você está irregular`)

}else(
    alert(`você está regular`)
)
 
   alert(`o valor total de multas é de ${multas} e o valor total de pontos é ${pontos}`)




}
