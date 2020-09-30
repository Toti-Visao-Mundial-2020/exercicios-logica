export const nome = "keisy"

export function temCarroDaMarca(carros, marca) {
    // coloque aqui o algoritmo para retornar um boolean (true ou false)
    // se existir um carro com a marca informada ou não
    for (let i = 0; i < carros.length; i++) {
        if (carros[i]['marca'] == marca) { return true; }
    }
    return false;
}

export function carrosNaCor(carros, cor) {
    // coloque aqui o algoritmo para retornar a quantidade
    // de carros na cor recebida como parâmetro
    let cantidad = 0;
    for (let i = 0; i < carros.length; i++) {
        if (carros[i]['cor'] == cor) {
            cantidad++;
        }
    }
    return cantidad;
}

    export function anosDisponiveis(carros) {
        // coloque aqui o algoritmo para retornar um array de number
        // com os anos disponíveis nos carros informados
        let resultado = []
        for (let i = 0; i < carros.length; i++) {
            if (!resultado.includes(carros[i]['ano'])) {
                resultado.push(carros[i]['ano']);
            }
        }
        resultado.sort()
        resultado.reverse();
        return resultado;
    }

    export function tiposDisponiveis(carros) {
        // coloque aqui o algoritmo para retornar um array de strings
        // com os tipos disponíveis nos carros informados
        let tiposDeCarros = []

        for (let i = 0; i < carros.length; i++) {
            if (!tiposDeCarros.includes(carros[i]['tipo'])) {
                tiposDeCarros.push(carros[i]['tipo']);
            }
        }
        tiposDeCarros.sort();
        return tiposDeCarros;
    }

    export function selecionarCarrosDaMarca(carros, marca) {
        // coloque aqui o algoritmo para retornar um array de object
        // com os carros da marca informado como parâmetro
        let selectedBrand = []
        for (let i = 0; i < carros.length; i++) {
            if (carros[i]['marca'] == marca) {
                selectedBrand.push(carros[i]);
            }
        }
        return selectedBrand;
    }
