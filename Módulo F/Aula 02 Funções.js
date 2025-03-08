// Nós podemos adicionar parâmetros em uma função e retorná-los.

/* Exemplo:
    function ação(param) {
        return res
    }
    ação(5)

Parâmetro = param
Ação = todo o bloco do function
Retorno = return res
Chamada = ação(5)
*/

function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } 
    else {
        return 'ímpar'
    }
}

let resposta = parimp(11)
console.log(resposta)

// ---------------------------

function soma(n1=0, n2=0) {
    s = n1 + n2
    return s
}

let resp = soma(2, 4)
console.log(resp)

// ---------------------------

let v = function(x) {
    return x * 2
}

console.log(v(5))

// ---------------------------

function fatorial(f) {
    let fat = 1
    for (let c = f; c > 1; c -= 1) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))