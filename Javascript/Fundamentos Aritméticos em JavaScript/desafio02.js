/*Desafios

Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Você receberá 1 valor inteiro N, onde N > 0.*/

let numeros = gets();

let par = 2;

while (par <= numeros) {
  
  console.log(par);
  par += 2;

}