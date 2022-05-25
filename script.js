let texto = document.querySelector("#txta")
let res = document.querySelector("#resultado")
let qtdep = 0
let qtdel = 0
let palavra =""
let qtde = 0
let soma = 0
const conectivos = ["de"]
const btn = document.querySelector("#btn-calc")
//let txt = texto.value
btn.addEventListener("click", function(){
    let letras = texto.value.replace(/\s+/g,"") //retira os espaços da string
    let virgulas = texto.value.replace(/\.+/g,"")
    virgulas = virgulas.replace(/\,+/g,"")
    virgulas = virgulas.replace(/\;+/g,"")
    virgulas = virgulas.replace(/\"+/g,"")
    let palavras = virgulas.replace(/\s+/g,"--")//substitui os espaços por dois traços
    
    let text = palavras.split("--") //transforma a string em array
    qtdep = text.length
    qtdel = letras.length
    let unique = tratar(text)
    printResul(unique)
})


function printResul(matriz){
    res.innerHTML = ""
    let para = document.createElement("p")
    para.innerHTML = ` Palavras: ${qtdep}<br>`
    para.innerHTML += `Letras: ${qtdel}<br>`
    if(matriz.length>10){
        for(let z =0; z<10; z++){
            para.innerHTML += `${matriz[z].palavra}: ${matriz[z].qtde} - ${matriz[z].porc}% <br>`
        }
    }else{
        for(let z in matriz){
            para.innerHTML += `${matriz[z].palavra}: ${matriz[z].qtde} - ${matriz[z].porc}% <br>`
        }
    }
          
    res.appendChild(para)    
}

function tratar(valor){
    let i = 0
    let unico = []
    let unitario =[]

    for(let x in valor){ //array de palavras unicas 
        if(!unico.includes(valor[x])){
            unico[i]= valor[x]
            i++
        }                       
    }
    
    for(let x in unico){//Monta o array unitario, inclue a palavra
        if(unico[x] !="" && unico[x].length>2){
            unitario[x] = {palavra:unico[x]}
        }   
    }

    for(let j in unitario){//Monta o array unitario, inclue a quantidade
        for(let z in valor){
            if(unitario[j].palavra == valor[z]){
                soma++               
            }
        }       
        unitario[j].qtde = soma
        unitario[j].porc = Math.round(soma/valor.length*100)
        soma = 0
    }


    unitario.sort(function(a,b){return b.qtde - a.qtde})// Classifica o array pela maior quantidade

    // alert(unitario[0].palavra)
    return unitario
}

