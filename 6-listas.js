console.log (`Trabalhando com listas`);

//control kc para comentar tudo ... contral ku para descomentar

// const salvador = `Salvador`;

// const bahia = `Bahia`;

// const saoPaulo = ` São Paulo`;

// const rioDeJaneiro = ` Rio de Janeiro`;

// const pernambuco = `Pernambuco`;

// console.log ("Destinos disponíveis:")

// console.log (salvador)
// console.log (saoPaulo)

//// essa forma de fazer é ruim pq toda vz que alterar codigo vou ter que declarar e rodar o console.log para trazer novos destinos..
//aqui vamos criar um away e a estrutura é a seguinte;

const listasDeDestinos = new Array (
    `Salvador`, ` São Paulo`, `Bahia`,`Pernambuco`

)
;

///amanha depois eu queira inserir valores no meu array.. faço da seguinte forma

listasDeDestinos.push (`Curitiba`);  //adicionadno valores a minha variavel


console.log (listasDeDestinos);


listasDeDestinos.splice (1,1);  // PRIMEIRO NUMERO É A POSICAO, E DEPOIS QUANTIDADE DE ELEMENTOS, ENTAO POSIÇÃO 0 É INICIO (SALVADOR), E 4 É QUANTIDADES QUE QUERO
// APAGAR, QUE VAI ATE BAHIA, ENTAO MANTENDO SOMENTE O NOME CURITIBA...


console.log (listasDeDestinos)

console.log(listasDeDestinos[3], listasDeDestinos[0]) //para exibir somente o valor, ou valres que eu quiser no caso aqui quero exibir somente curitiba e salvador

