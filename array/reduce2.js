const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: false}
];


// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (anterior, atual) => (!anterior) ? false : atual;
const desafio1 = alunos.map(a => a.bolsista).reduce(todosBolsistas);
console.log(`Desafio 1: ${desafio1}`);

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (anterior, atual) => (anterior) ? true : atual
const desafio2 = alunos.map(a => a.bolsista).reduce(algumBolsista);
console.log(`Desafio 2: ${desafio2}`);
