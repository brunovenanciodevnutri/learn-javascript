var idade = 16

if (idade < 16) {
    console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto Opcional')
} else {
        console.log('Voto Obrigatório')
}

// ---------------------------------------

var agora = new Date()
var diaSem = agora.getDay()
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

console.log(diaSem)

switch(diaSem) { // É necessário que em cada case tenha um "break" para funcionar. Essa função ajuda a simplificar o código, ao invés de usar if.
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERROR] Dia inválido!')
        break
}