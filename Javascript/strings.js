//tipo primitivo
const mensagem = 'string primitiva';
//tipo objeto
const outramensagem = new String('Bom dia');
console.log(typeof outramensagem);


// template literal

const mensagem2 = "Oi\n isso é a 'minha primeira mensagem'";
console.log(mensagem2);
//literais :
//Object{}
//Boolean true , false
//string '',""
//Template `` , ´´ mantem aspas e pontuações dentro da string e permite qubras de linhas manuais

const nome= 'Pedro';
//subistituir um elemento na string template literal
//antes tinah que fazer :
//const mensagem3 = 'Ola'+nome+'\n';
//agora com o template literal se faz:

// ${string}-> torna essa parte da string variavel e não constante

const outra = `oi ${nome}, isso é a minha "primeira mensagem
diajdasdjasjdiasjdasjdsajd
saiodsaodjiosad
dkpoajdopsjdiojsa
dksaodjsajd


doapsdpsajd

daopsdpsadosa
saopdsoa`

console.log(outra);
