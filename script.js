let texto = document.querySelector("#txta")
let res = document.querySelector("#resultado")
let qtdep = 0
let qtdel = 0
const conectivos = ["A","E","I","O","U"]
const btn = document.querySelector("#btn-calc")
//let txt = texto.value
btn.addEventListener("click", function(){
    let text = texto.value.split(" ")
    qtdep= text.length
    qtdel = somaLetra(qtdep, text, 0)
    
    alert(`O texto possue ${qtdel} letras em ${qtdep} palavras`)
})

function somaLetra(palavras, texto, soma){ //Contas as letras 
    for(let i=0;i<palavras; i++){   
        soma +=texto[i].length
    }
    return soma
}
