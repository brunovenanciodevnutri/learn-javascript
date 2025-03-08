// Variáveis Simples: só conseguem armazenar um valor por vez.
// Variáveis Compostas: são capazes de armazenar vários valores em uma estrutura.

let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}.`)

num[5] = 6 // Adiciona um valor em um local específico.
console.log(`Nosso vetor é o ${num}.`)

num.push(7) // Adiciona um valor no último local possível.
console.log(`Nosso vetor é o ${num}.`)

console.log(`O vetor tem ${num.length} posições.`) // Lê a quantidade de elementos no array.

console.log(`O array em ordem crescente é ${num.sort()}.`) // Ordena em ordem crescente os elementos.

console.log(`O array em ordem crescente é ${num.sort().reverse()}.`) // Ordena em ordem decrescente os elementos.

console.log(`O valor 9 está na posição ${num.indexOf(9)}.`) // Lê a quantidade de valores que você escolheu procurar, na variável composta.


// UTILIZANDO FOR
let n = [0, 1, 2, 3, 4, 5]

for (let pos=0; pos < n.length; pos += 1) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}.`)
}

// Ou simplificando
console.log(`----------`)

for(let pos in n)
    console.log(`A posição ${pos} tem o valor ${n[pos]}.`)

let no = []

no.push(7)
no.push(8)
console.log(no)