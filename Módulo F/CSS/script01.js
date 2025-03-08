// SELEÇÃO DE ELEMENTOS
let btn = window.document.getElementById('btn')
let btn2 = window.document.getElementById('btn2')
let coluna = window.document.getElementById('txt1')


// CRIAÇÃO DE EVENTOS
btn.addEventListener('mouseenter', mouseenterbtn)
btn.addEventListener('mouseout', mouseoutbtn)
btn2.addEventListener('mouseenter', mouseenterbtn2)
btn2.addEventListener('mouseout', mouseoutbtn2)
btn.addEventListener('click', clickbtn)
btn2.addEventListener('click', clickbtn2)
        

// FUNÇÕES
// entrar mouse
function mouseenterbtn() {
    btn.style.background = 'white'
    btn.style.color = 'black'
}
function mouseenterbtn2() {
    btn2.style.background = 'white'
    btn2.style.color = 'black'
}

        // sair mouse
function mouseoutbtn() {
    btn.style.background = 'black'
    btn.style.color = 'white'
}
function mouseoutbtn2() {
    btn2.style.background = 'black'
    btn2.style.color = 'white'
}
        
// click
var listavalores = [] // A lista precisa ficar fora das functions, para que os valores não sejam resetados ao clicar.
function clickbtn() {
    let numero = window.document.getElementById('n')
    let valornumero = Number(numero.value)
            
    if (valornumero <= 100 && valornumero >= 1) {
        listavalores.push(valornumero) // Adicionar os valores na lista.

        coluna.innerHTML += `<option>Valor ${valornumero} adicionado.</option>`
    }
    else {
        window.alert('Valor inválido! Tente novamente.')
    }

    numero.value = '' // Limpar o bloco de escrever número automaticamente.
    numero.focus() // Manter o bloco de escrever número selecionado
}
function clickbtn2() {
    let resposta = window.document.getElementById('res')

    let listavaloresordem = listavalores.sort() // Para ordenar a lista em crescente.
    let maiorn = listavaloresordem[listavaloresordem.length - 1] // Para conseguir último número da lista ordenada, ou seja, o maior.

    if (listavalores.length > 0) {
        let sectiontag = window.document.getElementById('section')
        sectiontag.style.height = '500px' // Aumentar tamanho da section
        
        resposta.innerHTML = `Ao todo, temos ${listavalores.length} números cadastrados.</br>`
        resposta.innerHTML += `- O maior valor encontrado foi ${maiorn}.</br>`
        resposta.innerHTML += `- O menor valor encontrado foi ${listavaloresordem[0]}.</br>`
        var soma = 0
        for (c in listavalores) {
            soma += listavalores[c]
        }
        resposta.innerHTML += `- Somando todos os valores, temos ${soma}.</br>`
        resposta.innerHTML += `- A média dos valores digitados é ${soma / listavalores.length}.`
    }
    else {
        window.alert('Nenhum valor foi adicionado! Tente novamente.')
    }
}