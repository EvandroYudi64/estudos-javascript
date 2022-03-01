///ADD novos elementos
const numeros =[1,2,3];
    ///inserir no inicio do array
    numeros.unshift(50);//unshift adiciona um elemento no inicio do array

    //inserir no meio do array
    numeros.splice(1,0,'a');// splice insere na posição desejada (indice onde deseja inserir , indice que deseja apagar ou não (0m para não), elemento a ser inserido)

    //inserir no final
    numeros.push(70);//insere um elemento na ultima posição do array

// como encontrar elementos tipo primitivo
const numeros2 =[1,2,3,4,3];
console.log(numeros2.indexOf(2));//retorna o indice do valor indicado ex: o 2 está no indice 1 do array - retorna -1 caso não exista no array
console.log(numeros2.lastIndexOf(3));//retorna a ultima ocorrencia do valor digitado
console.log(numeros2.indexOf(2)!== -1);//verifica se o elemto existe no vetor, pois se não existir o indexof retorna -1 e o retorno será false
console.log(numeros2.includes(2));//verifica se o elemto existe no vetor, igual o de cima , porem mais simples
console.log(numeros);

//como encontrar elemntos tipo referencia 
const bonecos =[
    {nome:'a', id:1},
    {nome:'b', id:2},
    {nome:'c', id:3},
    {nome:'d', id:4},
];
const tem = bonecos.find(function(boneco){//find retorna o primerio elemento que satisfaz a funçaõ teste
    return boneco.nome === 'a';//se encontrar retorna o objeto, caso contrario retorna undefined
});
console.log(tem);
//mesma coisa que fazer uma função para verificar se existe um elemento que satisfaz o requisito e passa-la pelo find no consol.log

function nomeboneco(nome){
    return nome.nome === 'a';
}
console.log(bonecos.find(nomeboneco));

    //arrow functions-> forma mais simples do find
    //ex:
    console.log(bonecos.find((boneco)=>boneco.nome === 'a'));

// remover elementos 
    //remover no final
    const ultimo= numeros.pop();// pop remove o ultimo elemento do array
    console.log(ultimo);//retorna o ultimo valor 
    console.log(numeros);//mostra o array depois da remoção

    //remover no inicio
    const primeiro = numeros.shift();//shift remove o primeiro elemento do array
    console.log(primeiro);//retorna o primeiro elemento do array
    console.log(numeros);//mostra o array depois da remoção

    //remover do meio
    const meio = numeros.splice(2,1);//splice(indice a ser removido, quantidade de items a ser removido)
    console.log(meio);//retorna o elemento removido
    console.log(numeros);//mostra o array depois da remoção

    //como esvaziar um array
    let numerosnew=[1,2,3,4,5,6];//não usar const pois precisa ser reatribuido
    //solução 1
    let outros = numerosnew;
    numerosnew = [];//esse metodo não esvazia o array alocado na memoria, por exemplo se ele tiver uma sido referenciado em outra variavel ex:
    console.log('solução 1',outros);//o outros ainda vai referenciar os valore do array original, mesmo ele tendo sido "apagado"

    //solução 2
    let numerosnew2 =[1,2,4,55,6];
    let outros2 = numerosnew2;
    numerosnew2.length=0;//apaga todas as referencias do array até o outros
    console.log('solução 2',numerosnew2);
    console.log(outros2);

    //solução 3
    let numeros4=[12,3,45,55,6];
    numeros4.splice(0,numeros4.length);//apaga desde o indice zero até o tamanho do array -> numeros4.length
    console.log('solução3',numeros4);

    //solução 4
    let numeros5=[1,2,3,45,656,77];
    while(numeros5.length>0){//loop de pop para remover o ltimo elemento até o array estar vazio, porem não é inidcado em casas de arrays muito grandes, pois consome muito tempo e muito processamento

        numeros5.pop();
    }
    console.log('solução 4',numeros5);

// dividir elementos
// dividira arrays tipos primitivos
const juntos = [10,20,30,40,50,60,70];
const dividido = juntos.slice(1,3);// slice divide oque está entre o primeiro e ultimo indice passado -> slice(primeiroindice, ultimoindice)
                                    //slice() -> copia o array inteiro para a outra variavel
                                    //slice(indice)-> vai copiar tudo que estiver depois do indice indicado
console.log('dividido',dividido);
console.log('array final', juntos);
// combinar arrays tipos primitivos 
const primeiro1 =[1,2,3];
const segundo1 = [4,5,6];
const combinado = primeiro1.concat(segundo1);//concat concatena ou junta o array1 com array2 
console.log('combinado',combinado);

//SPREAD
const juntos2 =[...primeiro1,...segundo1];// spread é a forma mais simples ...primeiroarray, ...segundoarray => junta o primeiroarray com o segundoarray
console.log('spread',juntos2);
const clonado=[...juntos2];
console.log("clonado", clonado);


//Iterar o array -> FOREACH
const numerosit=[1,2,4,5,6,7];
 // forma comum:
    for(indice of numerosit){
        console.log(indice);
    }
    //metodo forEach
    numerosit.forEach(function(indice){//itera para cada indice do array passado na função
        console.log(indice);
    })
    //ou:
    numerosit.forEach((indice, numerodoarray)=>console.log(indice,numerodoarray))//assim ele imprime o numero e o indice do numero no array


//combinando arrays
 const array1=[1,2,3,4,67,7];

 const combinandoarray = array1.join('.');//separa os elementos do array com o elemento inserido -> '.' -> 1.2.3.4.5.67.7
 console.log(combinandoarray);

 //ex com string
 const frase = "Olá bem vindo ao hello world";
 const resultadofrase=frase.split(' ');//separa por espaços 
 console.log(resultadofrase);
console.log(resultadofrase.join('-'));//no caso de urls que não podem ter espaço nos usamos join para juntar o titulo(por exemplo) num corpo ´so
