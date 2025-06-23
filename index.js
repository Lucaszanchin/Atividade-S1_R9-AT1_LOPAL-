const prompt = require('prompt-sync')();
const fs = require('fs');

let nomes = []; //Vetor que armazena os nomes
let enderecos = []; //Vetor que armazena os endereçõs
let distancias = []; //Vetor que armazena as distância
let valoresPorKm = []; //Vetor que armazena valor da entrega por KM
let tiposEntrega = []; //Vetor que armazena o tipo de entrega escolhido
let custos = []; //Vetor que armazena o custo total da entrega
let continuar = true; //Serve para finalizar ou continuar o looping
let i = 0;
let nome
let endereco
let valorPorKm
let distancia

console.log("Sistema de Cálculo de Entregas ");

while (continuar) { //loop que permite ao usuário cadastrar várias entregas.
    console.log("\nNova entrega:");
    do {
        nome = prompt("Nome do cliente: "); // Pede ao cliente para digitar o seu nome.
        if (!isNaN(nome) || nome == "") {
            console.log("Inválido! Você não digitou um nome, escreva novamente!"); // Indica se a entrada de informações não foi compatível com o pedido.
        }
    } while (!isNaN(nome) || nome == ""); // Repetição do looping.

    do {
        endereco = prompt("Endereço de Entrega:");  //Essa variável pede para o usuário o endereço dele
        if (!isNaN(endereco) || endereco == "") {
            console.log("Inválido! Você não digitou um endereço, escreva novamente!"); // Indica se a entrada de informações não foi compatível com o pedido.
        }
    } while (!isNaN(endereco) || endereco == ""); // Repetição do looping.

    do {
        distancia = parseFloat(prompt('Distância da entrega (km): ')); //Essa variável pede para o usuário a distância da entrega
        if (isNaN(distancia) || distancia == "") {
            console.log("Inválido! Você não digitou um número, escreva novamente!"); // Indica se a entrada de informações não foi compatível com o pedido.
        }
    } while (isNaN(distancia) || distancia == ""); // Repetição do looping.

    do {
        valorPorKm = parseFloat(prompt('Valor cobrado por km: ')); //Essa variável pede o valor por quilômetro
        if (isNaN(valorPorKm) || valorPorKm == "") {
            console.log("Inválido! Você não digitou um número, escreva novamente!"); // Indica se a entrada de informações não foi compatível com o pedido.
        }
    } while (isNaN(valorPorKm) || valorPorKm == ""); // Repetição do looping.
}