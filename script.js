let texto = document.querySelector("#txta")
let res = document.querySelector("#resultado")
let qtdep = 0
let qtdel = 0
const conectivos = ["A","E","I","O","U"]
const btn = document.querySelector("#btn-calc")
//let txt = texto.value
btn.addEventListener("click", function(){
    let letras = texto.value.replace(/\s+/g,"")
    let palavra = texto.value.replace(/\s+/g,",")
    let text = palavra.split(",")
    qtdep = text.length
    //qtdep = somaPalavra(0, text)
    qtdel = letras.length
    
    alert(`${text.length} {${letras}} - O texto possue ${qtdel} letras em ${qtdep} palavras`)
})
