console.log('teu pai'); //console.log -> imprime no console
console.log('salve');
let idade = 5;// number literal 
idade = idade+1;
console.log(idade);
let nomeCompleto = "dsadosajda";//string literal
console.log("nome completo =", nomeCompleto);
const number = 55;
console.log(number);
let verdadeiro = true; //booleano
let falso = false;//booleano
console.log(verdadeiro , falso);
let sobrenome;//undefined
//exemplo
let corSelect = null// casos para redefinir o valor atribui como null


//tipagem dinamica
//typeof console

//objeto-> classe
let pessoa= {
    nome:'Chaves',
    idade: 24,
    aprovado: true,

};
console.log(pessoa);

//arrays -> vetores
//pode misturar string com mnumeros e booleanos
let familia = [26,45,36,79, 'pablo'];
console.log(familia);
console.log(familia[4]);
console.log(familia.length);//tamanho do vetor array
 //função
  //exemplo:
  let corSite = "AZUL"
function mudaCor(){
    corSite = "";
};
console.log(corSite);
mudaCor();
console.log(corSite);
//com parametros
let cor="AZUL";
 function mudacorParametro(coratual, tonalidade){
     cor = coratual + tonalidade;

 };
 console.log(cor);
 mudacorParametro("Vermelho" , " claro");
 console.log(cor);


 // tipos de funções
    //1º realiza a tarefa sem retorno
        function sayname(){
            console.log("teu pai");
        }
        sayname();
    //2º com retorno
        function multporDois(valor){
            return valor*2;
        }
        console.log(multporDois(9));

//operadores logicos
    //1ºoperadores aritimeticos
    //2ºoperadores de atribuição
    //3ºoperadores de comparação
    //4ºoperadores logicos 
    //5º]operadores bitwise
//1º
    let salario=100;
        // + , - , *, / , **(x ** y -> x^y)
    console.log(salario**salario)
        //++, --
        let n = 18;
        console.log(n++);//acresçe depois de exibir
        console.log(++n);//acresçe antes de exibir
//2º 
    let valores=10;
    valores+=valores;// valores = valores + valores
    console.log(valores);
//3º comparação
    //igualdade estrita compara valores e tipos ===
        console.log(1 === 1);
        console.log('1'===1);
    //igualdade solta compara somente valores ==
        console.log(1==1);
        console.log('1'==1);
    //operador ternarios
    let pontos=100;
    let tipo = pontos >100? 'premium': 'comum'; //caso for verdadeiro: primeira opção, se falso: segunda opção
    console.log(tipo);
//4º
    //operador && 
    //retorna true se os dois operandos forem true
    console.log(true && true);
    console.log(true && false);

    let maiodeidade = true;
    let carteiradeTrab= true;
    let podeaplicar = maiodeidade && carteiradeTrab;
    console.log("apto:",podeaplicar);
    //operador || 
    //retorna true se qualquer uma das condições for true
    console.log("apto ou:", maiodeidade || carteiradeTrab);
    //operador NOT !
    //retorna o oposto do tipo booleano 
    let candidato = !podeaplicar;
    console.log(candidato);
    // é considerado falso se tiver atribuição do tipo:
    // undefined
    //null
    //" "
    //false
    //NaN -> not a number


//iF Else

//exemplo: se a hora estiver entre 06:00 e 12:00 = bom dia
//se estiver entre 12:00 e 18:00 = boa tarde
//caso contrario = boa noite
let hora = 9;
if(hora > 6 && hora<12){
    console.log("Bom dia!");
}
else if(hora>12 && hora < 18){
    console.log("Boa tarde!");
}
else{
    console.log("Boa noite!");
}

// switch case 
    let permissao;
    permissao='comum';
    switch(permissao){
        case 'comum':
            console.log("comum");
        break;

        case 'gerente':
            console.log("gerente");
            break;
        
        case 'diretor':
            console.log("diretor");
            break;

        default:
            console.log("usuario invalido");
    }

//for while loop:
    //1. for
    //2. while
    //3. do..while
    //4.for..in

    //1.For
    for(let i=0; i<5 ; i++){
        console.log(i);
    }
    for(let i=10; i>=1; i--){
        if(i%2 !==0)
        {
            console.log(i);
        }
    }

    //2. while
    console.log("djisdja");
    let i=5;
    while(i>=1)
    {
        if(i%2!==0)
        {
            console.log(i)
        };
        i--;
    }
    // do while
    do{
        console.log('digitando', i);
        i++;
    }while(i<15);

    //for in
    // laço para objeto
    const persona={
        nome: 'teu pai',
        idade: 18,
    };
    //key - variavel  value - valor da variavel
    for(let chave in persona){
        console.log(chave, persona[chave]);
    }
    const cores = ['red', 'blue', 'green']
    for(let indice in cores){

        console.log(indice, cores[indice]);
    }

    //for of
    for(let cor of cores){
        console.log(cor);
    }
