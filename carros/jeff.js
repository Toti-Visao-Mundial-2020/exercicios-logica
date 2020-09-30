export const nome = "jeff"

export function temCarroDaMarca(carros, marca) {
    for (let i = 0; i < carros.length; i += 1) {
        const carro = carros[i]
        if (carro.marca === marca) {
            return true
        }
    }
    return false
}

export function carrosNaCor(carros, cor) {
    let carrosNaCor = 0

    for (let carro of carros) {
        if (carro.cor === cor) {
            carrosNaCor += 1
        }
    }

    return carrosNaCor
}

export function anosDisponiveis(carros) {
    const anos = []

    for (let carro of carros) {
        if (!anos.includes(carro.ano)) {
            anos.push(carro.ano)
        }
    }

    return anos.sort(ordenarDecrescente);
}

function ordenarDecrescente(elemento1, elemento2) {
    return elemento2 - elemento1
}

export function tiposDisponiveis(carros) {
    const tipos = []

    for (let carro of carros) {
        if (!tipos.includes(carro.tipo)) {
            tipos.push(carro.tipo)
        }
    }

    return tipos.sort();
}

export function selecionarCarrosDaMarca(carros, marca) {
    return carros
        .filter(function (carro) {
            return carro.marca === marca
        })
}
