
const binario= (prompt('Digite aqui o seu numero binário'))
var array = binario.split('').reverse();//transforma string em um array, corta a string até o final quandi achar aquele padrão
//transformo em uma string vazia, onde cada caractere da minha string seja fatiada. toda vez que ele achar um caractere 

let decimal = 0

array.forEach((value, index)=>{//esse valor vai vir em valor, ou zero ou um
   if (value!=='0'){
       decimal = decimal + 2**index//elevado a posição que ele está
   }
});
document.write('seu numero em decimal é'+ decimal)




