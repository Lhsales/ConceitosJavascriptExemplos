// Novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 20,
    endereco: {
        logradouro: "Rua muito legal",
        numero: 1000
    }
}

const { nome, idade} = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; // bemHumorada vai tentar trazer do objeto, caso não há no objeto, ele irá setar como true
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep }} = pessoa;
console.log(logradouro, numero, cep);