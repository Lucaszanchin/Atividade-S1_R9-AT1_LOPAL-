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
 
    let tipo = ""; //Essa variável pede para o usuário o tipo de entrega
    let tipoValido = false; //Essa variável verifica se o tipo é válido ou não

    while (!tipoValido) {  // loop de validação que garante que o usuário insira um tipo de entrega válido
        tipo = prompt('Tipo de entrega (normal ou urgente): '); //Pergunta ao usuário qual tipo de entrega
        if (tipo === 'normal' || tipo === 'urgente') { //Verifica se o valor inserido pelo usuário é igual a "normal" ou "urgente"
            tipoValido = true; //Isso define que "tipoVálido" seja verdadeiro assim encerrando o loop, pois enquanto for falso vai se repetir até ser verdadero e se encerrar
        } else {
            console.log('Tipo inválido! Digite "normal" ou "urgente".'); //Messagem que será enviada ao usuário se a resposta for inválida
        }
    }

    let custo = distancia * valorPorKm; //Variável que fará a multiplicação da distância pelo valor por KM
    if (tipo === 'urgente') { //É uma condição que verifica se a variável tipo contém o valor 'urgente'
        custo *= 1.2;  //Aqui será feita multiplicação de um custo a mais caso seja urgente
    }

    nomes[i] = nome; //O que será armazenado na variável "nome" irá pro vetor "nomes"
    enderecos[i] = endereco; //O que será armazenado na variável "endereço" irá pro vetor "endereços"
    distancias[i] = distancia; //O que será armazenado na variável "distância" irá pro vetor "distâncias"
    valoresPorKm[i] = valorPorKm; //O que será armazenado na variável "valorPorKM" irá pro vetor "valoresPorKM"
    tiposEntrega[i] = tipo; //O que será armazenado na variável "tipo" irá pro vetor "tiposEntrega"
    custos[i] = custo; //O que será armazenado na variável "custo" irá pro vetor "custos"
}