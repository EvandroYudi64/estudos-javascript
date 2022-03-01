//trocando valores
let a = "verde";
let b = "azul";
let aux=a;
a=b;
b=aux;
console.log(a , b);


let x=5*2;
let y=8;
function maior(a,b){
    return a>b? a : b;
}
console.log(maior(x,y));


/// fizz buzz
// divisivel por 3 -> fizz
//divisivel por 5 -> buzz
//divisivel por 3 e 5 -> fizzbuzz
//não divisivel por 3 ou 5 -> entrada
//não for um numero retorne a mensagem não é um numero
const resultado= fizzBuzz(6);
console.log(resultado);
function fizzBuzz(entrada){
    if(typeof entrada !='number')
        return 'Não é um numero';
    if(entrada%3===0 && entrada%5===0)
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada%5===0)
        return 'Buzz';
   
    return entrada;

}


///velocidade max de 70kmh
// a cada 5km acima do dlimite ganha 1 ponto]
//Math.Floor()//arrendonda o numero
//caso pontos>12 cateira suspendida
verificarVelocidade(200);

function verificarVelocidade(velocidade){
    const veloMax = 70;
    const kmporponto = 5;
    if(velocidade <= veloMax)
        consolelog('OK');
    else{
        const pontos = Math.floor(((velocidade -veloMax)/kmporponto));
        if(pontos>=12)
            console.log('carteira suspensa');
        else
            console.log('Pontos', pontos);
    }

}
// verificar sde é par ou impar
parouimpar(10);
function parouimpar(a){
    for(let i=0; i<a;i++){
        if(i%2==0){
            console.log(i,'PAR');
        }
        else{
            console.log(i,"IMPAR");
        }
    }
}
//mostrar somente os tipos strings do obj
const filme={
    titulo: "Avengers",
    ano: 2018,
    diretor: "Joe russo",
    personagem: "Iron man",
};
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop]);
        }
    }

}
//somar os multiplos de 3 e 5
soma(10);
function soma(limite){
    let soma=0;
    for(let i=0; i<=limite;i++){
        if(i%3===0){
            soma+=i;
            console.log(i);
        }
        else if(i%5===0){
            soma+=i;
            console.log(i);
        }
    }
    console.log(soma);
}
// notas da sala media e nota final
//0-5 = F
//6-7 = D
//7-8 = C
//8-9 = B
//9-10 = A
const array=[10,5,3,8];
console.log(mediaaluno(array));
function mediaaluno(notas){
    const media=calcMedia(notas);
    if(media<5){
        return 'F';
    }
    else if(media<7){
        return 'D';
    }
    else if(media<8){
        return 'C';
    }
    else if(media<9){
        return 'B';
    }
    else{
        return 'A';
    }
    
}
function calcMedia(array){
    let soma=0;
    let qtd=array.length;
    for(let i =0; i<(array.length); i++){
        soma+=array[i];
        console.log(array[i]);
    }
    let media = soma/qtd;
    return media;
}
//exibir a qtd de asteriscos que a linha possui

exibirasteriscos(10);

function exibirasteriscos(linhas){
    for(let i=1; i<=linhas; i++){
        let padrao='';
        for(let j=0; j<i; j++){
                padrao+='*';// a variavel concatena a string automaticamewnte
        }
        console.log(padrao);
    }
}

//numeros primos

exibeprimos(15);

function exibeprimos(limite){
    for(let i=2; i<=limite;i++){
        if(verificaprimo(i)){
            console.log(i);
        }
    }
}
function verificaprimo(i){
        for(let j=2; j<i;j++){
            if(i%j===0){
                return false;
            }
        }
        return true;
}


//exercicios objeto endereço que contem:
// rua, cidade, cep,exibir endereço(função)

let endereço={
    rua: "Rio Branco",
    CEP: "13221-010",
    Cidade: "Salto",
}
function exibirEndereço(endereço){
    for(let chave in endereço)//for in itera sobre propriedade de um objeto
        console.log(chave, endereço[chave]);//chave é a propriedade , endereço[chave] é o indexado da chave o que esta atribuido a propriedade chave ex rua(chave propriewdade) -> Rio Branco (endereço[chave], oque está atribuido a propriedade chave)

}
exibirEndereço(endereço);

//igualdade de objetos

function Ender(rua,cidade,cep){
    this.rua=rua,
    this.cidade=cidade,
    this.cep=cep
}

const ender1 = new Ender('a', 'b', 'c');
const ender2 = new Ender('a', 'b', 'c');
const ender3 = ender1;// ender3 agora tem o endereço de ender1
//comparar se tem propriedades iguais
function saoIguais(ender1, ender2){
    return ender1.rua === ender2.rua && ender1.cidade === ender2.cidade
            && ender1.cep === ender2.cep;

}
console.log(saoIguais(ender1,ender2));
//compara se o endereço de memoria são iguais
function temEndereçoigual(ender1,ender2){
    return ender1 === ender2;//sem marcar a propriedade ele compara o endereço de memeoria igual ponteiro

}
console.log(temEndereçoigual(ender1,ender3));

// postagem de blog objeto com array de objetos
let postagem ={
    titulo: 'A',
    mensagem:'B',
    autor:'C',
    vizualizações: 10,
    comentarios :[
        {autor:'bla', mensagem: 'bl'},
        {autor: 'dsass', mensagem:'sdojad'}
    ],
    estaoaovivo:true
}
console.log(postagem);


//objeto postagem construction function
function Postagem2(titulo,mensagem,autor){//somente 3 paramtros pois são fixos , comentarios e vizualizações são dinamicos

    this.titulo=titulo,
    this.mensagem=mensagem,
    this.autor=autor,
    this.vizualizações=0,
    this.comentarios = [],
    this.estaoaovivo =false
}
let postagems =new Postagem2('IGN','Teu pai', 'Fabio');
console.log(postagems)

//faixa de preço -> array de objetos

let faixas = [
    {tooltip:'Até R$ 700,00', minimo:0 , max:700},
    {tooltip:'De R$ 700,00 a R$ 1000,00', minimo:700 , max:1000},
    {tooltip:'De R$ 1000,00 a R$ 2000,00', minimo:1000 , max:2000}
];

// fiaxa de preço com construction function
function Faixasdepreco(tooltips, preçomin , preçomax) {
    this.tooltip=tooltips,
    this.preçomin=preçomin,
    this.preçomax=preçomax
};//objeto
let faixa1 = [
    new Faixasdepreco("Até 300", 0,300),
    new Faixasdepreco("Até 400", 0,400),
    new Faixasdepreco("Até 500", 0,500),
]//array de objetos 
console.log(faixa1[2]);//exemplo de impressão no console

