console.log (" Trabalhando com Atribucao de Variaveis ");




const idade = 29;
//const nome = "Gustavo"
let nome = "Gustavo";
const sobrenome = "Marcolino";
const nomeCompleto =  (nome + " " +  sobrenome);

console.log (nomeCompleto);

console.log (nome, sobrenome);

//tres maneiras para concatenar texto


console.log (`Meu nome completo é` + " " + nomeCompleto);  


console.log (`Meu nome completo é ${nomeCompleto}`);


console.log (`Meu nome completo é ${nome} ${sobrenome}`); 


nome = nome + " " + sobrenome; 

console.log (nome);