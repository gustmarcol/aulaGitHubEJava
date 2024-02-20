console.log(`Trabalhando com listas`);

const listasDeDestinos = new Array(
    `Salvador`, ` São Paulo`, `Bahia`, `Pernambuco`

)
    ;

///amanha depois eu queira inserir valores no meu array.. faço da seguinte forma

const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(listasDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) 


{
console.log("Comprador pode finalizar a compra da passagem!")
 listasDeDestinos.splice(0, 1);  //removendo item
console.log(listasDeDestinos);

}   else {
        console.log("comprador menor de idade, passagem aérea não pode ser vendida");

    };

    console.log (`Embarcando: \n\n`)

    if (idadeComprador >= 18 && temPassagemComprada ){
       
     
        console.log ("boa viagem");


    }

    else { console.log ("Você não pode embarcar");

    }
;