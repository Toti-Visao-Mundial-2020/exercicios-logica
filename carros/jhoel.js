export const nome = "jhoel"

export function temCarroDaMarca(carros, marca) {
    // coloque aqui o algoritmo para retornar um boolean (true ou false)
    // se existir um carro com a marca informada ou não
    for (let carro of carros) {
        if (carro.marca === marca) {
            return true
        }
    }
    return false
}

export function carrosNaCor(carros, cor) {
    // coloque aqui o algoritmo para retornar a quantidade
    // de carros na cor recebida como parâmetro
    let contador = 0
    for (let carro of carros) {
        if (carro.cor === cor) {
            contador += 1
        }
    }
    return contador
}

export function anosDisponiveis(carros) {
    // coloque aqui o algoritmo para retornar um array de number
    // com os anos disponíveis nos carros informados
    const disponibleYears = []

    for (let carro of carros) {
        if (!disponibleYears.includes(carro.ano)) {
            disponibleYears.push(carro.ano)
        }
    }
    return disponibleYears.sort().reverse()
}

export function tiposDisponiveis(carros) {
    // coloque aqui o algoritmo para retornar um array de strings
    // com os tipos disponíveis nos carros informados
    const disponibleType = []

    for (let carro of carros) {
        if (!disponibleType.includes(carro.tipo)) {
            disponibleType.push(carro.tipo)
        }
    }
    return disponibleType.sort()
}

export function selecionarCarrosDaMarca(carros, marca) {
    // coloque aqui o algoritmo para retornar um array de object
    // com os carros da marca informado como parâmetro
    const disponibleMark = []

    for (let carro of carros) {
        if (carro.marca === marca) {
            disponibleMark.push(carro)
        }
    }
    return disponibleMark
}