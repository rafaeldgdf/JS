// Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.80 de altura e seu IMC é de 25.92
//Luiz Ótavio nasceu em 1980 





//As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente.


const nome = "Luiz Otávio";
const sobrenome = "Miranda"; 
const idade = 30; 
const peso = 84;
const altura = 1.80; 

let imc = peso / (1.80 * 1.80); 
let anoNascimento = 2023 - 30; 

console.log (imc, anoNascimento);


console.log(nome, sobrenome, "tem", idade, "anos, pesa " + peso + " kg, tem " + altura + "e seu IMC é de " + imc);
console.log(nome, sobrenome + " nasceu em " + anoNascimento);

//concatenação com variável e string `${}`  

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}`);
