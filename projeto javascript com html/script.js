// function VerificarEntrada(){
//     NomeConvidado = document.getElementById('nome').value;
//     ConvidadospeloCristian=['Amanda', 'Roger', 'Fabio', 'cristian', 'Evandro'];
//     if(ConvidadospeloCristian.includes(NomeConvidado)){
//         document.getElementById('Permissaodeentrada').innerText='Permissão concedida';
//     }
//     else{
//         document.getElementById('Permissaodeentrada').innerText='Permissao negada';
//     }
// }
function verificaquemconvidou(){
    let NomeConvidado = document.getElementById('nome').value;//pega o valor id do elemento nome que foi digitado no input
    let nomequemconvidou = document.getElementById('convidadoPor').value;//pega o valor id do elemento convidadoPor que foi digitado no input
    if(nomequemconvidou === 'Cristian')
    {
        ConvidadospeloCristian=['Amanda', 'Roger', 'Fabio', 'cristian', 'Evandro'];
        if(ConvidadospeloCristian.includes(NomeConvidado)){
            document.getElementById('Permissaodeentrada').innerText='Permissão concedida';
        }
        else{
            document.getElementById('Permissaodeentrada').innerText='Permissao negada';
        }
    }
    else if(nomequemconvidou === 'Natalia'){
        Convidadospelanatalia=['Amanda', 'Fabricio', 'Rafa', 'anny'];
        if(Convidadospelanatalia.includes(NomeConvidado)){
            document.getElementById('Permissaodeentrada').innerText='Permissão concedida';
        }
        else{
            document.getElementById('Permissaodeentrada').innerText='Permissao negada';
        }
    }
    else if(nomequemconvidou === 'Lucas'){
        ConvidadospeloLucas=['Ana', 'Roberto', 'Felipe'];
        if(ConvidadospeloLucas.includes(NomeConvidado)){
            document.getElementById('Permissaodeentrada').innerText='Permissão concedida';
        }
        else{
            document.getElementById('Permissaodeentrada').innerText='Permissao negada';
        }
    }
    else{
        document.getElementById('Permissaodeentrada').innerText='Permissao negada. Quem te convidou não está na lista'
    }
   
}