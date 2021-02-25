/* Desafio

Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km)
e o total de combustível consumido (em litros).

Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor
real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.*/

let X = parseInt(gets());
let Y = parseFloat(gets());

let consumoMedio = parseFloat(X / Y).toFixed(3);

console.log(consumoMedio + " km/l");