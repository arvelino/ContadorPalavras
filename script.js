let texto = document.querySelector("#txta")
let res = document.querySelector("#resultado")
let qtdep = 0
let qtdel = 0
let palavra =""
let qtde = 0
const conectivos = ["A","E","I","O","U"]
const btn = document.querySelector("#btn-calc")
//let txt = texto.value
btn.addEventListener("click", function(){
    let letras = texto.value.replace(/\s+/g,"") //retira os espaços da string
    let palavras = texto.value.replace(/\s+/g,",")//substitui os espaços por virgula
    let text = palavras.split(",")
    qtdep = text.length
    qtdel = letras.length
    let unique = separar(text)
    printResul(unique)
    
})

function printResul(matriz){
    res.innerHTML = ""
    let para = document.createElement("p")
    para.innerHTML = ` Palavras: ${qtdep}<br>`
    para.innerHTML += `Letras: ${qtdel}<br>`
    for(let z in matriz){
        para.innerHTML += `${matriz[z].palavra}: ${matriz[z].qtde}<br>`
    }
      
    res.appendChild(para)
    
}

function separar(valor){
    let i = 0
    let unico = []
    let unitario =[]

    for(let x in valor){         
        if(!unico.includes(valor[x])){
            unico[i]= valor[x]
            i++
        }                       
    }
    
    for(let x in unico){
        unitario[x] = {palavra:unico[x]}
    }

    for(let j in unitario){
        let soma = 0
        for(let z in valor){
            if(unitario[j].palavra == valor[z]){
                soma++               
            }
        }       
        unitario[j].qtde = soma       
    }
    // alert(unitario[0].palavra)
    return unitario
}
