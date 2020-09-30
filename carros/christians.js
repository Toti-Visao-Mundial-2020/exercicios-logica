export const nome = "christians";
export function temCarroDaMarca(carros, marca) {
  // coloque aqui o algoritmo para retornar um boolean (true ou false)
  // se existir um carro com a marca informada ou não
  for (let i = 0; i < carros.length; i++) {
    if (carros[i].marca === marca) {
      return true;
    }
  }
  return false;
}

export function carrosNaCor(carros, cor) {
  // coloque aqui o algoritmo para retornar a quantidade
  // de carros na cor recebida como parâmetro
  let contagem = 0;
  for (let i = 0; i < carros.length; i++) {
    if (carros[i].cor === cor) {
      contagem++;
    }
  }
  return contagem;
}

export function anosDisponiveis(carros) {
  // coloque aqui o algoritmo para retornar um array de number
  // com os anos disponíveis nos carros informados
  let anos = [];
  for (let i = 0; i < carros.length; i++) {
    if (!anos.includes(carros[i].ano)) {
      anos.push(carros[i].ano);
    }
    anos.sort().reverse();
  }
  return anos;
}

export function tiposDisponiveis(carros) {
  // coloque aqui o algoritmo para retornar um array de strings
  // com os tipos disponíveis nos carros informados
  let tipos = [];
  for (let i = 0; i < carros.length; i++) {
    if (!tipos.includes(carros[i].tipo)) {
      tipos.push(carros[i].tipo);
    }
    tipos.sort();
  }
  return tipos;
}
export function selecionarCarrosDaMarca(carros, marca) {
  // coloque aqui o algoritmo para retornar um array de object
  // com os carros da marca informado como parâmetro
  let carroslist = [];
  for (let i = 0; i < carros.length; i++) {
    if (carros[i].marca === marca) {
      carroslist.push(carros[i]);
    }
  }
  return carroslist;
}
