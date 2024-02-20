console.log (`Seja bem vindo a EMBAP AIR: \n Segue abaixo as passagens disponíveis: \n \n` );


const listDeDestinos = new Array (
`São Paulo`, `Maceio`, `Rio de Janeiro`, `Amazonas`, `Minas Gerais`, `Salvador`);

console.log (listDeDestinos);

const idadePassageiro = 18;
const menorDeIdadeAcompanhado = true
const possuiPassagemComprada = true


if (idadePassageiro >= 18)
{
    //todas passagens que serão compradas por enquanto vai ser de amazonas
console.log (`Compra realizada com sucesso, EMBAP AIR agradece a preferência,\n Tenha uma excelente viagem!!!`);
listDeDestinos.splice (3,1)
console.log (listDeDestinos)
}



else  if (menorDeIdadeAcompanhado == true && idadePassageiro < 18){

console.log ("Compra realizada com sucesso. Por passageiro ser um menor de idade, necessário no dia do embarque todos documentos do responsável pelo menor.")
}
 

    else {
    console.log ("Você não possui idade suficiente para finalizar a compra, ou um acompanhante definido, entre em contato com 0800 para esclarecer suas dúvidas.");


}

console.log (`Embarcando: ${listDeDestinos [3]} \n \n \n \n`)

if (idadePassageiro >= 18 || menorDeIdadeAcompanhado && possuiPassagemComprada){

console.log ("Boa viagem")



} else {
        console.log ("Você não possui os requisitos para embarcar")

}





// const listDeDestinos = new Array (
//     `São Paulo`, `Maceio`, `Rio de Janeiro`, `Amazonas`, `Minas Gerais`, `Salvador`);
    