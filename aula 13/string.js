
// Índice para buscar elemtentos dentro de uma string 0123456
// Para buscar um caractere dentro do indice =  [numero do indice]
// .indexOf('palavra/letra') retorna o índice da PALAVRA/LETRA TEXTO 
// lastIndexOf('palavra/letra')retorna o índice da última PALAVRA/LETRA TEXTO 
// search() buscar string pelo valor do índice 
// .replace substitui o caractere da string por outro valor desejado 
// .length retorna o número de caracteres de uma string 
// lastIndexOf() retorna o último índice de uma strign 
// .toUpperCase = caracteres da string todas em maiúsculo 
// .toLowerCase = caracteres da string todas em minúsculo 
// slice(número do índice que quer que apareça, numero do índice que quer que termina a fatiada) = fatia a string/arrray 
// split(" ") = retorna as palavras de uma string 


let string1 = "Rafael Vitor de Oliveira"

/*
console.log (`Seu nome é: ${string1}`);
console.log(`Seu nome tem ${string1.length} letras`);
let calculo1 = string1.length - 3; 
let calculo2 = string1.length - 2;
let tresUltimasLetras = string1[calculo1];
console.log (tresUltimasLetras);
console.log (string1[calculo2]);
console.log ("As três últimas letras do seu nome são: ", string1[string1.length - 3], string1[string1.length - 2], string1[string1.length - 1]);

console.log(string1.toLocaleUpperCase()); 
*/

console.log(string1.indexOf(" "));
