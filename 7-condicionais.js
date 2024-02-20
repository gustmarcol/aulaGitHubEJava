console.log(`Trabalhando com listas`);

const listasDeDestinos = new Array(
    `Salvador`, ` São Paulo`, `Bahia`, `Pernambuco`

)
    ;


const idadeComprador = 10;
const estaAcompanhada = false;
console.log("Lista de destinos:");





console.log(listasDeDestinos);

if (idadeComprador >= 18)
    
{
    console.log("Comprador maior de idade!")
    listasDeDestinos.splice(0, 1);  //removendo item
    console.log(listasDeDestinos);

}


else {
    //A PESSOA É MENOR DE IDADE
    if (estaAcompanhada ==TRUE) //nao é obrigatorio apon tar esse ==TRUE
    { 
        console.log(`O cliente pode realizar a compra pois está acompanhado de um de maior`)
        listasDeDestinos.splice(0, 1);  //removendo item
        console.log(listasDeDestinos);

    } else {
        console.log("comprador menor de idade, passagem aérea não pode ser vendida")

    };
}
;

//console.log (listasDeDestinos);

/////// CODIGO DAQUI PRA BAIXO É UM CLONE, PORÉM UMA MANEIRA DIFERENTE DE JUNTAR O ELSE DA LINHA 32 COM O IF



console.log("Lista de destinos:");





console.log(listasDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade!")
    listasDeDestinos.splice(0, 1);  //removendo item
    console.log(listasDeDestinos);

}


else if (estaAcompanhada) {
    console.log(`O cliente pode realizar a compra pois está acompanhado de um de maior`);
    listasDeDestinos.splice(0, 1);  //removendo item
    console.log(listasDeDestinos);

} else {
    console.log("comprador menor de idade, passagem aérea não pode ser vendida");

}

;

