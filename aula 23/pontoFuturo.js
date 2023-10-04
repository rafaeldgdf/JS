/*
&& -> false && true = false 
|| -> true || false = true 


FALSY:              Qualquer destes valores checados serão avaliados em falso 
false 
0 
"" -> string vazia 
null / undefined 
NaN  


*/

let corUsuario = "Vemelho"; 
const corPadrao = "preto"; 

console.log(corUsuario || corPadrao);

corUsuario = null 
console.log(corUsuario || corPadrao);