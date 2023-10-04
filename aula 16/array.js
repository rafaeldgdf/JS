


// ÍNDICE        0        1       2        3
const nomes = ["Luiz", "Maria", "João", "Pedro"]; 
console.log(nomes);
console.log( );
console.log( );
console.log( );
console.log(nomes.length); // BUSCAR TAMANHO 
console.log( );
console.log( );
console.log( );
console.log(nomes[2]); // BUSCAR PELO ÍNDICE 
console.log( );
console.log( );
console.log( );
nomes[0] = "Rafael"; // TROCAR VALOR DA ARRAY PELO ÍNDICE 
console.log(nomes);
console.log( );
console.log( );
console.log( );
nomes[4] = "Laura"; // ADICIONAR UM NOVO ELEMTENTO AO ARRAY CRIANDO UM NOVO ÍNDICE E ATRIBUINDO UM VALOR 
console.log(nomes);
console.log( );
console.log( );
console.log( );
nomes.push("Kaká");  // ADICIONA UM ELEMENTO AO FINAL DA ARRAY
console.log(nomes);
console.log( );
console.log( );
console.log( );
nomes.unshift("Edna"); // ADICIONA UM ELEMENTO AO INÍCIO DA ARRAY
console.log(nomes);
console.log( );
console.log( );
console.log( );
nomes.pop(); //REMOVE O ÚLTIMO ELEMENTO DA ARRAY 
console.log (nomes);
console.log( );
const nomesRemovidos = nomes.pop(); // É POSSÍVEL SALVAR NUMA VÁRIAVEL UM VALOR REMOVIDO 
console.log (nomes);
console.log (`O nome removido foi: ${nomesRemovidos}`); 
console.log( );
console.log( );
console.log( );
nomes.shift(); // REMOVE O PRIMEIRO ELEMENTO DE UMA ARRAY, TAMBÉM É POSSÍVEL SALVAR O VALOR REMOVIDO NUM VARIÁVEL 
console.log(nomes);
console.log( );
console.log( );
console.log( );
delete nomes[2];  // DELETA O ITEM DE UMA ARRAY PELO VALOR DO ÍNDICE, PORÉM PRESERVA A ORDEM DOS ÍNDICES, ESVAZIANDO APENAS O ESPAÇO
console.log(nomes); 
console.log( );
console.log( );
console.log( );
nomes[2] = "Laurinha"; 
nomes.push("Juca");
console.log (nomes);
console.log(`O total de índices da array é: ${nomes.length}`);
console.log(nomes.slice(1,3)); // FATIAR UMA ARRAY, PARA ESCOLHER A VISUALIZAÇÃO A PARTIR DE ONDE QUEREMOS.
                               //O PRIMEIRO NÚMERO É O ÍNDICE DE INÍCIO, QUE VOCÊ DESEJAR VER. 
                               //O ÚLTIMO NÚMERO É O ÍNDICE QUE VOCÊ NÃO QUER VER, NA QUAL FINALIZA O CORTE DA ARRAY
                               


