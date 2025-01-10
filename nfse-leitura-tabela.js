
const TABELA = document.getElementById("tabela-vendas-itens");
    
function adicionarLinhaTabela(){
    var linha = TABELA.insertRow(1);
    var celulaInput = linha.insertCell(0);
    var celulaAcoes = linha.insertCell(1);
    celulaInput.innerHTML = criarCampoInput();
    celulaAcoes.appendChild(criarBotaoDeletar(linha));
    return;
}

function excluirLinhaTabela(linha){
    linha.outerHTML = "";
    return;
    //linha.outerHTML = "";
    //saber exata linha sendo excluida
    //pai do pai do botao de excluir <table row>
}

function criarCampoInput(){
    var input = document.createElement("input");
    input.type = "text";
    //input.className = "newclass"; //definir classe css
    input.placeholder = "Serviço prestado";
    
    return input.outerHTML;
}

function criarBotaoDeletar(linha){
    var button;

    button = document.createElement("button");
    button.innerHTML = "❌";
    //button.onclick = excluirLinhaTabela;
    button.onclick = function () {
        excluirLinhaTabela(linha);
    }

    return button;
}