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