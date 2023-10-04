//DADOS PRIMITIVOS (imutáveis): string, number, boolean, undefined, null, (bigint, symbol) 
//DADOS REFERÊNCIA (mutáveis): array, object, function 


let nome = "Luiz";
console.log(nome[0]);
nome[0] = "R"    // n muda pq a string é imutável 
console.log(nome) 

console.log();
console.log();
console.log();
console.log();

let a = [1, 2, 3]; 
let b = a;
console.log(a,b);
a.push(4); // a variável b recebe a mudança, pq a array é mutável 
console.log(a,b)  