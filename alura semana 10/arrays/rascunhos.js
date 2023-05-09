const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

let novaLista = []

let media = 0

let lista2 = []

for(let multiplicador = 0; multiplicador < alunos.length; multiplicador++) {

    console.log(`${listaDeNotasEAlunos[0][multiplicador]}, sua media é ${listaDeNotasEAlunos[1][multiplicador]}`);
    //console.log(multiplicador *100);
    
    // cria uma nova lista com nome e nota de cada aluno de acordo com indice
    novaLista.push(listaDeNotasEAlunos[0][multiplicador], listaDeNotasEAlunos[1][multiplicador])

     // soma as notas dos alunos
    media = media + listaDeNotasEAlunos[1][multiplicador]
     // ou
     //media += listaDeNotasEAlunos[1][multiplicador]

    if (listaDeNotasEAlunos[1][multiplicador] == 10) {
        lista2.push(listaDeNotasEAlunos[1][multiplicador])
    } else {
        lista2.push(listaDeNotasEAlunos[1][multiplicador] + 1)
    }

    if (listaDeNotasEAlunos[1][multiplicador] <= 8) {
        console.log(`${listaDeNotasEAlunos[0][multiplicador]} você esta reprovado`)
    } else {
        console.log(`${listaDeNotasEAlunos[0][multiplicador]} você esta aprovado`)
    }
    // ponto extra para cada aluno
    //lista2.push(listaDeNotasEAlunos[1][multiplicador] + 1)

   
}

// imprime a media dos alunos
console.log(media / alunos.length)


// imprime nova lista
console.log(novaLista)

console.log(lista2)