/* Desafio

Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada,
devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Você receberá seis valores, negativos e/ou positivos.*/

let valores = []  // criar o arrray

let Positivos = 0  // criar contador 
for (let i=0;i < 6;i++){  // iremos receber 6 numeros , de 0 a 5 
      valores[i] = gets();  // receber cada um dos numeros 
   if(valores[i] > 0) {  // validar se é positivo , não nulo 
       Positivos += 1      // incrementar contador de positivo 
   }
}

console.log(Positivos + ' valores positivos')