var numeros =[]

var i = Number(prompt('Quantos numeros gostaria de digitar?'))

for(j=0; j<i; j++){
   var Nmrs= (prompt('Digite o' +j+'ºnumero'))
   numeros.push(parseFloat(Nmrs))
}

var soma=0

for(let Nmsrs of numeros){
    soma = soma+ Nmrs
}

document.write('A soma do de todos os numeros digitados é:'+ soma)

var media = soma/numeros.length

document.write('A media de todos os numeros é:'+ media)

numeros.forEach(function(numeros){
    document.white('Os numeros digitados ao quadrado são:'+ (Nmrs**2))

});

numeros.forEach(function(numeros){
    document.white('Os numeros digitados ao cubo são:'+ (Nmrs**3))

});
