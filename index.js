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

    console.log("\nResumo da entrega:"); //Mostra o resumo da entrega
    console.log(`Cliente: ${nome}`); //Mostra o nome do cliente
    console.log(`Endereço: ${endereco}`); //Mostra o endereço do cliente
    console.log(`Distância: ${distancia} km`); //Mostra a ditância em Km da entrega
    console.log(`Valor por km: R$ ${valorPorKm.toFixed(2)}`); //Mostra o valor por Km da entrega
    console.log(`Tipo: ${tipo}`); //Mostra o tipo da entrega
    console.log(`Custo total: R$ ${custo.toFixed(2)}`); //Mostra o custo total da entrega

    let registro = `Cliente: ${nome} | Endereço: ${endereco} | Distância: ${distancia} km | Valor/km: R$ ${valorPorKm.toFixed(2)} | Tipo: ${tipo} | Custo: R$ ${custo.toFixed(2)}\n`;
    fs.appendFileSync('historico_entregas.txt', registro); //Cria o arquivo com o nome 'historico_entregas.txt' e a variável registro é colocada lá com todas informações

    let resposta = prompt('\nDeseja cadastrar outra entrega? (sim ou não): ');  //Pergunta ao usuário se ele deseja cadastrar outra entrega
    if (resposta !== 'sim' && resposta !== 's') { //Verifica se o valor inserido pelo usuário é igual a "sim" ou "sim"
        continuar = false;  // Encerra o loop se o usuário digitar "não" para não continuar o loop, assim se torna falso
    } else {
        i++;
    }
}

let totalEntregas = i + 1;
let somaCustos = 0;
for (let j = 0; j <= i; j++) {
    somaCustos += custos[j]; //Aqui será armazenado o valor total de todas as entregas
}
let mediaCusto = somaCustos / totalEntregas; //Aqui fará a média do custos de todas as entregas

console.log("\nResumo Final"); //Aqui mostrará o resumo de toudo
console.log(`Total de entregas: ${totalEntregas}`); //Mostra o total de entregas
console.log(`Média de custo por entrega: R$ ${mediaCusto.toFixed(2)}`); //Mostra a média de custo por entrega

fs.appendFileSync('historico_entregas.txt', `\nTotal de entregas: ${totalEntregas} | Média de custo: R$ ${mediaCusto.toFixed(2)}\n`); //Colocará o total das entregas e a média de custos dentro do arquivo "txt" criado
console.log("\nHistórico salvo em 'historico_entregas.txt'"); //Menssagem que mostra onde foi salvo todo o histórico da entregas