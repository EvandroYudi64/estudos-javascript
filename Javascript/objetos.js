// exemplo de objeto 

let marcaCelular='LG';
let tamanhoTelaVertical= 155;

const celular={
    marcaCel:'ASUS',
    tamanhoTela:{
        vertical:155,
        horizontal:175
    },
    capacidadeBateria: 5000,
    ligar:function(){
        console.log("Fazendo ligação....")
    }
}
//quando uma função esta dentro de um objeto, ela se torna um metodo
celular.capacidadeBateria=6000;
console.log(celular.capacidadeBateria);
celular.ligar();

//factory functions
//função é mais util mpara casos onde precisa criar mais de um objetos com os mesmos atributos
function criarcelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular:marcaCelular,//se tiver o mesmo nome não precisa adicionar o valor
        tamanhoTela,//por exemplo aqui tem o mesmo nome do tamanhotela anterior
        capacidadeBateria,
        ligar:function(){
            console.log("Fazendo ligação....")
        }
    }
}
const celular1=criarcelular('Zenfone', 5.5, 5000);
console.log(celular1);

//construction functions
//Pascal Case -> todas as palavras iniciam com maiusculo ex: CriarCelular
//camelCase -> a primeira palavra se inicia com minuscula
//Pascal Case -> construction function

function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = this.capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação.......");
    }
}
const novoCelular = new Celular('Asus', 5.5,5000);//comando new para criar uma nova instancia do objeto
console.log(novoCelular);
//construction functions fazem a mesma coisa que factory functions

//exercicio
function Champion(nome,tipo,rota,level){
    this.nome = nome;
    this.tipo = tipo;
    this.rota = rota;
    this.ultimate = function(level){
        if(level >=6)
            return 'Ultimate disponivel';
        else
            return 'Ultimate indisponivel';    
    }
}

const boneco = new Champion('Rumble', 'lutador mago', 'Top - Mid');
console.log(boneco,boneco.ultimate(7));


//natureza dinamica de objetos

//ex
const mouse={
    cor:'red',
    marca:'dazz',
}
mouse.velocidadedpi=5000;//pode adicionar elementos sem estar nas propriedades do  objeto
delete mouse.velocidadedpi;//deleta propriedade de um objeto
console.log(mouse);

//clonando objetos object assign
const novocel = Object.assign({
    baterias: 1,//posso clonar e adicionar uma nova propriedade
}, celular);
console.log(novocel);

//jeito direto
const novocel2 = {...celular};//clona sem precisar do assign
console.log(novocel2);


//igualdade de objetos
