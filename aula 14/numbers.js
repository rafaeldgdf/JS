//.toString() = transforma number em string temporariamente
//.toFixed(numero que deseja arredondar) = serve para arredondar números decimais 
// Number.isInteger(número/variável a ser testada) = retorna verdadeiro ou falso para saber se número é um inteiro
// Number.isNaN(número/variável a ser testada) = retorna verdadeiro ou falso para saber se número é um NaN
// parseFloat(número/variáve) = retorna um número decimal/flutuante
// parseFloat(num1.toFixed(2)) = corrigir erros de conta;



let num1 = 55.123333  //number 
let num2 = 2.5; // number


num1 = parseFloat(num1.toFixed(2)); 
console.log(num1);
console.log(Number.isInteger(num1));


