let num = [5, 8, 4] // ARRAY: Funciona como uma Lista.

let amigo = {nome: 'José', // OBJECT: Funciona como um Dicionário.
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){ // Criei uma função dentro de uma variável composta objeto.
        console.log('Engordou')
        this.peso += p
    }
}

console.log(amigo)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

amigo.engordar(2)

console.log(typeof amigo)

