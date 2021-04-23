const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // O último elemento é removido
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona na última posição
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona elemento na primeira posição
console.log(pilotos);

// splice pode adicionar ou remover elementos no array
pilotos.splice(2, 0, 'Botas', 'Massa');
console.log(pilotos);

pilotos.splice(3, 1);

const algunsPilotos1 = pilotos.slice(2); // Gera um novo array apartir do indice do parâmetro
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);