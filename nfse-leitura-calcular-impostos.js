
var venda = 0, IRPF = 0, PIS = 0, COFINS = 0, INSS = 0, ISSQN = 0;
//const TABELA = document.getElementById("tabela-vendas-itens");

function calcularIRPF(porcentagem) {
    return 0;
}

function calcularPIS(porcentagem) {
    let imposto = venda * porcentagem / 100;
    return imposto;
}

function calcularCOFINS(porcentagem) {
    let imposto = venda * porcentagem / 100;
    return imposto;
}

function calcularINSS(porcentagem) {
    return 0;
}

function calcularISSQN(porcentagem) {
    let imposto = venda * porcentagem / 100;
    return imposto;
}

function calcularTudo() {
    const 
        INPUT_IRPF_PERC = document.getElementById("input-venda-irpf").value,
        INPUT_PIS_PERC = document.getElementById("input-venda-pis").value,
        INPUT_COFINS_PERC = document.getElementById("input-venda-cofins").value,
        INPUT_INSS_PERC = document.getElementById("input-venda-inss").value,
        INPUT_ISSQN_PERC = document.getElementById("input-venda-issqn").value;
    
    
    venda = document.getElementById("input-venda-valor").value;

    IRPF = calcularIRPF(INPUT_IRPF_PERC);
    PIS = calcularPIS(INPUT_PIS_PERC);
    COFINS = calcularCOFINS(INPUT_COFINS_PERC);
    INSS = calcularINSS(INPUT_INSS_PERC);
    ISSQN = calcularISSQN(INPUT_ISSQN_PERC);

    return;
}

function exibir(){
    const DIV_RESULTADOS = document.getElementById("resultados-vendas-calculos");
    let itens = listarItensTabela();

    calcularTudo();

    let total = PIS + COFINS + INSS + ISSQN;
    var
        strItens = converterListaParaTexto(itens),
        strIRPF = "IRPF: " + "Não se aplica" + "<br>",
        strPIS = "PIS: " + PIS.toFixed(2) + "<br>",
        strCOFINS = "COFINS: " + COFINS.toFixed(2) + "<br>",
        //strINSS = "INSS: " + INSS + "<br>",
        strINSS = "INSS: " + "Não se aplica" + "<br>",
        strISSQN = "ISSQN: " + ISSQN.toFixed(2) + "<br>",
        strTotal = "R$ " + total.toFixed(2) + "<br>",
        strFinal = "";

    const
        SECAO_ITENS = "ITENS",
        SECAO_IMPOSTOS = "IMPOSTOS",
        SECAO_TOTAL = "TOTAL",
        ESPACAMENTO = "<br>",

        ERRO_VALOR_ILEGAL = "Erro: insira um valor maior que zero no valor total da venda.",
        AVISO_LISTA_ITENS_VAZIA = "Aviso: lista de itens está vazia."

    
    if(venda == null || venda <= 0) {
        strFinal = ERRO_VALOR_ILEGAL;
    } else {
        if(itens.length == 0){
            strFinal = h5(SECAO_ITENS) + AVISO_LISTA_ITENS_VAZIA + ESPACAMENTO;
        } else {
            strFinal = h5(SECAO_ITENS) + strItens + ESPACAMENTO;
        }
        strFinal += h5(SECAO_IMPOSTOS) + strIRPF + strPIS + strCOFINS + strINSS + strISSQN + ESPACAMENTO
        strFinal += h5(SECAO_TOTAL) + strTotal + ESPACAMENTO;
    }

    DIV_RESULTADOS.innerHTML = strFinal;

    return;
}

function h5(texto){
    return "<h5>" + texto + "</h5>"
}

function listarItensTabela(){
    let linha = TABELA.rows;
    let itens = [];


    for(let i = 1; i < linha.length; i++){
        itens.push(linha[i].cells[0].firstElementChild.value);
    }

    return itens;
}

function converterListaParaTexto(lista){
    let texto = "";

    for(let i = 0; i < lista.length; i++){
        texto = texto + lista[i] + "<br>";
    }

    return texto;
}