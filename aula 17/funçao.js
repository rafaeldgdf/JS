//DECLARAR FUNÇÃO 
function saudacao(nome){  //COLOCA-SE PARÂMETRO/VARIÁVEIS DENTRO DOS PARÊNTESES, PARA SER USADO DENTRO DA FUNÇÃO

console.log(`Bom dia, ${nome}!`);
return 123567 //o comando return faz a função retornar um valor // nada abaixo do return será exibido 
}

 
saudacao("Rafael"); 
saudacao ("Laura"); // os parâmetros são mutáveis 

const retorno = saudacao();
console.log(retorno);
console.log();
console.log();
console.log();



/////////// EXERCICIO FUNÇÃO 
function soma(num1 = 1, num2 = 1){ //caso n seja atribuído um valor as variáveis da função, o valoe dos números serão 1
const resultado = num1 + num2
return resultado
}

console.log(soma (1, 3));
console.log(soma()); // se exibir a função sem atribuir valores ao parametros, dará "NaN"; 
console.log();
console.log();
console.log();


/////////CRIAR UMA FUNÇÃO ANÔNIMA DENTRO DE UMA VARIÁVEL 

const raiz = function(n){      //bastar criar a função dentro de uma variável 
    return n ** 0.5;
}

console.log(raiz(9)); 
console.log(raiz(4));
console.log(raiz(77).toFixed(2));




