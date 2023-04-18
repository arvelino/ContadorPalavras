let texto = document.querySelector("#txta")
let res = document.querySelector("#resultado")
let qtdep = 0
let qtdel = 0
let palavra =""
let qtde = 0
let soma = 0
let paragrafo = ""
const btn = document.querySelector("#txta")

btn.addEventListener("keyup", ()=> {
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
    let resul = document.querySelectorAll(".resul")
    let desid = document.querySelector("#listDensidade")
    desid.innerHTML =""
    resul[0].innerHTML = qtdep
    resul[1].innerHTML = qtdel
    paragrafo = document.createElement("li")
    paragrafo.setAttribute("class","list-group-item")

    if(matriz.length>10){
        for(let z =0; z<10; z++){
            paragrafo = document.createElement("li")
            paragrafo.setAttribute("class","list-group-item")
            paragrafo.innerHTML += `${matriz[z].palavra}: ${matriz[z].qtde} - ${matriz[z].porc}% <br>`
            desid.appendChild(paragrafo)
        }
    }else{
        for(let z in matriz){
            paragrafo = document.createElement("li")
            paragrafo.setAttribute("class","list-group-item list-item")
            paragrafo.innerHTML += `${matriz[z].palavra}: ${matriz[z].qtde} - ${matriz[z].porc}% <br>`
            desid.appendChild(paragrafo)
        }
    }
    
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

const menuPlagio = document.querySelector('#menu-plagio')
menuPlagio.onclick = function(){
    alert('Em construção!')
}

