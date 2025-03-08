// while (condição): Enquanto...
// Classificada como estrutura de repetição com teste lógico no INÍCIO.
// Primeiro faz o teste, se true, executa o bloco de loop.
var c = 1
while (c <= 6) {
    console.log(`Tudo bem? Passo ${c}`)
    c += 1
}


// do while (condição): Enquanto...
// Classificada como estrutura de repetição com teste lógico no FINAL.
// Primeiro executa o bloco, depois faz o teste, se true, executa o bloco novamente.
var v = 1
do {
    console.log(`Olá! Passo ${v}`)
    v += 1
} while (v <= 6)


// A diferença está no momento em que a condição é avaliada. No while é avaliada antes de entrar no loop, no do while é avaliada depois de entrar no loop. 
// Isso pode ser importante dependendo da lógica do seu código.