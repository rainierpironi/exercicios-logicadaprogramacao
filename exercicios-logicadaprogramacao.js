const nomeCompleto = "Rainier Gomes Pironi";
console.log(nomeCompleto)
// ----
const numeroA = 1;
const numeroB = 5;
const resultado = numeroA + numeroB;
console.log(resultado)
// ----
function saudacao(){
    console.log("Oi, eu sou o Goku!")
}
saudacao()
// ----
function multiplica(a,b){
    return a * b
}
multiplica(2, 3)
// ----
function podeDirigir(idade){
    if (idade >= 18){
        console.log("Você pode dirigir")

}
    else{
        console.log("Você não pode dirigir")
    }
        
    }
podeDirigir(18)
// ----
for (let i = 0; i <=20; i++) {  
    console.log(i)
}
// ----
for (let i = 1; i <=20; i+=2) {  
    console.log(i)
}
// ----
function tabuada(numero){
    for (let i = 1; index <=10 ; index++) {
       console.log(numero * i)
        
    }
}
tabuada(7)
// ----
function converterEmHoras(minutos){
    console.log(minutos / 60)

}
converterEmHoras(120)
// ----