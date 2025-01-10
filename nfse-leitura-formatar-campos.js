

function atualizarCampoPorcentagem(element) {
    const
        MAXIMO = 100,
        MINIMO = 0;

    let
        valor = element.value,
        novoValor = valor;

    if(valor > MAXIMO){
        novoValor = 100;
    } else if(valor < MINIMO) {
        novoValor = 0;
    }

    element.value = decimal(Number(novoValor));
}

function atualizarCampoValor(element) {
    const
        MINIMO = 0;

    let
        valor = element.value,
        novoValor = valor;

    if(valor < MINIMO) {
        novoValor = 0;
    }

    element.value = decimal(Number(novoValor));
}

function decimal(numero) {
    if(typeof numero == "number") return numero.toFixed(2);
    else return 0;
}