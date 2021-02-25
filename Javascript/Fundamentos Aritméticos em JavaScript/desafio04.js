/* Desafio

Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o
valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência
mostre o valor lido e a relação de notas necessárias.*/

let notas = [100, 50, 20, 10, 5, 2, 1]; // sao as cédulas que existem
let qnotas = [0, 0, 0, 0, 0, 0, 0]; // qnotas sao as quantidades de cedulas que irão precisar.

let quantia = parseInt(gets()); // quantidade inserida pelo usario. ex: R$ 1542.

let resto = quantia; 

while (resto >= 1) {
  
  nota = notas.findIndex(value => value <= resto);
  qnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];

}

console.log(quantia);
console.log(qnotas[0] + " nota(s) de R$ 100,00");
console.log(qnotas[1] + " nota(s) de R$ 50,00");
console.log(qnotas[2] + " nota(s) de R$ 20,00");
console.log(qnotas[3] + " nota(s) de R$ 10,00");
console.log(qnotas[4] + " nota(s) de R$ 5,00");
console.log(qnotas[5] + " nota(s) de R$ 2,00");
console.log(qnotas[6] + " nota(s) de R$ 1,00");