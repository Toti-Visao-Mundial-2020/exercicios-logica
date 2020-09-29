export const nome = "mohamed";

export function temCarroDaMarca(carros, marca) {
    // coloque aqui o algoritmo para retornar um boolean (true ou false)
    // se existir um carro com a marca informada ou não
    // for (let i = 0; i < carros.length; i++) {
    //     if (carros[i]["marca"] === marca) {
    //         return true;
    //     } else {
    //         continue;
    //     }
    // }
    // return false;
    return !!carros.find((carro) => carro.marca === marca);
}

export function carrosNaCor(carros, cor) {
    // let x = 0;
    // for (let i = 0; i < carros.length; i++) {
    // if (carros[i].cor === cor) {
    //  x++;
    // } else {
    //     continue;
    // }
    //}
    // return x;
    return carros.filter((carro) => carro.cor === cor).length;
}

export function anosDisponiveis(carros) {
    // coloque aqui o algoritmo para retornar um array de number
    // com os anos disponíveis nos carros informados
    const resultado = [];
    for (let i = 0; i < carros.length; i++) {
        if (resultado.includes(carros[i].ano)) continue;
        resultado.push(carros[i].ano);
    }
    return resultado.sort().reverse();
}

export function tiposDisponiveis(carros) {
    // coloque aqui o algoritmo para retornar um array de strings
    // com os tipos disponíveis nos carros informados
    const resultado = [];
    for (let i = 0; i < carros.length; i++) {
        if (resultado.includes(carros[i].tipo)) continue;
        resultado.push(carros[i].tipo);
    }
    return resultado.sort();
}

export function selecionarCarrosDaMarca(carros, marca) {
    // coloque aqui o algoritmo para retornar um array de object
    // com os carros da marca informado como parâmetro
    return carros.filter((carro) => carro.marca === marca);
}