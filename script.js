// CONVERSÃO DE STRING PRA NUMBER NO PROMPT
// v1 = parseInt(prompt("Informe um Valor"));
// v2 = parseInt(prompt("Informe outro valor"));
// v3 = parseInt(v1 + v2);
// alert(v3)

// Adição de textos (Index)
// ac = "";
// function dick(){
//     nome = document.getElementById("TxTnome")
//     ac = ac + nome.value + "</br>";
//     dv = document.getElementById("dv1");
//     dv.innerHTML = ac

// sel = sel + "option value='" + nome.value + "'>";
// sel = sel + nome.value + "</option>"
// dv.innerHTML = ac

// function fecha(){

// }

function enviar(){
    opSexo="";

    nome = document.getElementById("txtNome").value
    idade = document.getElementById("idade").value
    idade = parseInt(idade)
    if(sexo[0].checked){
        opSexo = "Masculino"
    } else {
        opSexo = "Feminino"
    }
    pais = document.getElementById("SelPais").value
    dv = document.getElementById("dvResultado")

    dv.innerHTML = "<h1> Relatorio </h1><br>"
    "nome: <b>" + nome + "</b> <br>" +
    "sexo: <b>" + opSexo + "</b> <br>" +
    "idade: <b>" + idade + "</b> <br>";
}