import * as christians from './christians.js'
import * as jhoel from './jhoel.js'
import * as keisy from './keisy.js'
import * as lucry from './lucry.js'
import * as mohamed from './mohamed.js'
import * as jeff from './jeff.js'

const carros = [
  { marca: "chevrolet", modelo: "onix", tipo: "hatch", cor: "verde", ano: 2014 },
  { marca: "chevrolet", modelo: "onix plus", tipo: "sedan", cor: "vermelho", ano: 2020 },
  { marca: "chevrolet", modelo: "s-10", tipo: "picape", cor: "vermelho", ano: 1998 },
  { marca: "volkswagen", modelo: "gol", tipo: "hatch", cor: "rosa", ano: 1995 },
  { marca: "volkswagen", modelo: "virtus", tipo: "sedan", cor: "branco", ano: 2019 },
  { marca: "volkswagen", modelo: "t-cross", tipo: "suv", cor: "verde", ano: 2020 },
  { marca: "volkswagen", modelo: "saveiro", tipo: "picape", cor: "laranja", ano: 2002 },
  { marca: "fiat", modelo: "strada", tipo: "picape", cor: "preto", ano: 2008 },
  { marca: "fiat", modelo: "toro", tipo: "picape", cor: "preto", ano: 2017 },
  { marca: "renault", modelo: "kwid", tipo: "hatch", cor: "branco", ano: 2018 },
  { marca: "ford", modelo: "ka", tipo: "hatch", cor: "cinza", ano: 1997 },
  { marca: "ford", modelo: "ka sedan", tipo: "sedan", cor: "verde", ano: 2016 },
  { marca: "toyota", modelo: "corolla", tipo: "sedan", cor: "vermelho", ano: 2014 },
  { marca: "toyota", modelo: "hilux", tipo: "picape", cor: "vermelho", ano: 2015 },
  { marca: "hyundai", modelo: "hb20", tipo: "hatch", cor: "azul", ano: 2008 },
  { marca: "hyundai", modelo: "hb20s", tipo: "sedan", cor: "branco", ano: 2019 },
  { marca: "hyundai", modelo: "creta", tipo: "suv", cor: "branco", ano: 2017 },
  { marca: "jeep", modelo: "renegade", tipo: "suv", cor: "amarelo", ano: 2008 },
  { marca: "jeep", modelo: "compass", tipo: "suv", cor: "azul", ano: 2016 },
  { marca: "honda", modelo: "civic", tipo: "sedan", cor: "amarelo", ano: 2012 },
  { marca: "nissan", modelo: "kicks", tipo: "suv", cor: "amarelo", ano: 2016 },
]

function testarAtividade({ numero, aluno, funcao, testes }) {
  const tabelaAluno = document.querySelector(`#${aluno.nome}`)

  for (const [indice, teste] of testes.entries()) {
    const esperado = teste.esperado
    const resposta = aluno[funcao](carros, teste.parametro)
    const resultado = JSON.stringify(esperado) === JSON.stringify(resposta) ? "correto" : "errado"

    tabelaAluno.querySelector(`.resposta${numero}`).innerText +=
      `teste ${indice + 1} = ${JSON.stringify(esperado)}\n`

    tabelaAluno.querySelector(`.retornado${numero}`).innerHTML += resposta === null ?
      `<span class="nao_implementado">teste ${indice + 1} = não implementado</span><br>` :
      `<span>teste ${indice + 1} = ${JSON.stringify(resposta)}</span><br>`

    if (resposta !== null) {
      tabelaAluno.querySelector(`.resultado${numero}`).innerHTML +=
        `<span class="${resultado}">teste ${indice + 1} = ${resultado}</span><br>`
    }
  }
}

const atividade1_1 = { parametro: "ford", esperado: true }
const atividade1_2 = { parametro: "jaguar", esperado: false }

const atividade2_1a = { parametro: "branco", esperado: 4 }
const atividade2_1b = { parametro: "preto", esperado: 2 }

const atividade2_2a = { parametro: "rosa", esperado: 1 }
const atividade2_2b = { parametro: "azul", esperado: 2 }

const atividade3 = { esperado: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2012, 2008, 2002, 1998, 1997, 1995] }

const atividade4 = { esperado: ["hatch", "picape", "sedan", "suv"] }

const atividade5_1a = {
  parametro: "volkswagen",
  esperado: [
    { marca: "volkswagen", modelo: "gol", tipo: "hatch", cor: "rosa", ano: 1995 },
    { marca: "volkswagen", modelo: "virtus", tipo: "sedan", cor: "branco", ano: 2019 },
    { marca: "volkswagen", modelo: "t-cross", tipo: "suv", cor: "verde", ano: 2020 },
    { marca: "volkswagen", modelo: "saveiro", tipo: "picape", cor: "laranja", ano: 2002 },
  ]
}

const atividade5_1b = {
  parametro: "fiat",
  esperado: [
    { marca: "fiat", modelo: "strada", tipo: "picape", cor: "preto", ano: 2008 },
    { marca: "fiat", modelo: "toro", tipo: "picape", cor: "preto", ano: 2017 }
  ]
}

const atividade5_2a = {
  parametro: "honda",
  esperado: [
    { marca: "honda", modelo: "civic", tipo: "sedan", cor: "amarelo", ano: 2012 },
  ]
}

const atividade5_2b = {
  parametro: "toyota",
  esperado: [
    { marca: "toyota", modelo: "corolla", tipo: "sedan", cor: "vermelho", ano: 2014 },
    { marca: "toyota", modelo: "hilux", tipo: "picape", cor: "vermelho", ano: 2015 },
  ]
}

const atividade5_3 = {
  parametro: "ferrari",
  esperado: []
}

// Atividades Christian
testarAtividade({
  numero: 1,
  aluno: christians,
  funcao: "temCarroDaMarca",
  testes: [
    atividade1_1,
    atividade1_2
  ]
})

testarAtividade({
  numero: 2,
  aluno: christians,
  funcao: "carrosNaCor",
  testes: [
    atividade2_1a,
    atividade2_2a
  ]
})

testarAtividade({
  numero: 3,
  aluno: christians,
  funcao: "anosDisponiveis",
  testes: [
    atividade3
  ]
})

testarAtividade({
  numero: 4,
  aluno: christians,
  funcao: "tiposDisponiveis",
  testes: [
    atividade4
  ]
})

testarAtividade({
  numero: 5,
  aluno: christians,
  funcao: "selecionarCarrosDaMarca",
  testes: [
    atividade5_1a,
    atividade5_2a,
    atividade5_3
  ]
})

// Atividades Jhoel
testarAtividade({
  numero: 1,
  aluno: jhoel,
  funcao: "temCarroDaMarca",
  testes: [
    atividade1_1,
    atividade1_2
  ]
})

testarAtividade({
  numero: 2,
  aluno: jhoel,
  funcao: "carrosNaCor",
  testes: [
    atividade2_1b,
    atividade2_2a
  ]
})

testarAtividade({
  numero: 3,
  aluno: jhoel,
  funcao: "anosDisponiveis",
  testes: [
    atividade3
  ]
})

testarAtividade({
  numero: 4,
  aluno: jhoel,
  funcao: "tiposDisponiveis",
  testes: [
    atividade4
  ]
})

testarAtividade({
  numero: 5,
  aluno: jhoel,
  funcao: "selecionarCarrosDaMarca",
  testes: [
    atividade5_1a,
    atividade5_2b,
    atividade5_3
  ]
})

// Atividades Keisy
testarAtividade({
  numero: 1,
  aluno: keisy,
  funcao: "temCarroDaMarca",
  testes: [
    atividade1_1,
    atividade1_2
  ]
})

testarAtividade({
  numero: 2,
  aluno: keisy,
  funcao: "carrosNaCor",
  testes: [
    atividade2_1a,
    atividade2_2b
  ]
})

testarAtividade({
  numero: 3,
  aluno: keisy,
  funcao: "anosDisponiveis",
  testes: [
    atividade3
  ]
})

testarAtividade({
  numero: 4,
  aluno: keisy,
  funcao: "tiposDisponiveis",
  testes: [
    atividade4
  ]
})

testarAtividade({
  numero: 5,
  aluno: keisy,
  funcao: "selecionarCarrosDaMarca",
  testes: [
    atividade5_1b,
    atividade5_2b,
    atividade5_3
  ]
})

// Atividades Lucry
testarAtividade({
  numero: 1,
  aluno: lucry,
  funcao: "temCarroDaMarca",
  testes: [
    atividade1_1,
    atividade1_2
  ]
})

testarAtividade({
  numero: 2,
  aluno: lucry,
  funcao: "carrosNaCor",
  testes: [
    atividade2_1b,
    atividade2_2a
  ]
})

testarAtividade({
  numero: 3,
  aluno: lucry,
  funcao: "anosDisponiveis",
  testes: [
    atividade3
  ]
})

testarAtividade({
  numero: 4,
  aluno: lucry,
  funcao: "tiposDisponiveis",
  testes: [
    atividade4
  ]
})

testarAtividade({
  numero: 5,
  aluno: lucry,
  funcao: "selecionarCarrosDaMarca",
  testes: [
    atividade5_1b,
    atividade5_2a,
    atividade5_3
  ]
})

// Atividades Mohamed
testarAtividade({
  numero: 1,
  aluno: mohamed,
  funcao: "temCarroDaMarca",
  testes: [
    atividade1_1,
    atividade1_2
  ]
})

testarAtividade({
  numero: 2,
  aluno: mohamed,
  funcao: "carrosNaCor",
  testes: [
    atividade2_1b,
    atividade2_2b
  ]
})

testarAtividade({
  numero: 3,
  aluno: mohamed,
  funcao: "anosDisponiveis",
  testes: [
    atividade3
  ]
})

testarAtividade({
  numero: 4,
  aluno: mohamed,
  funcao: "tiposDisponiveis",
  testes: [
    atividade4
  ]
})

testarAtividade({
  numero: 5,
  aluno: mohamed,
  funcao: "selecionarCarrosDaMarca",
  testes: [
    atividade5_1a,
    atividade5_2a,
    atividade5_3
  ]
})

// Atividades Jeff
testarAtividade({
  numero: 1,
  aluno: jeff,
  funcao: "temCarroDaMarca",
  testes: [
    atividade1_1,
    atividade1_2
  ]
})

testarAtividade({
  numero: 2,
  aluno: jeff,
  funcao: "carrosNaCor",
  testes: [
    atividade2_1b,
    atividade2_2b
  ]
})

testarAtividade({
  numero: 3,
  aluno: jeff,
  funcao: "anosDisponiveis",
  testes: [
    atividade3
  ]
})

testarAtividade({
  numero: 4,
  aluno: jeff,
  funcao: "tiposDisponiveis",
  testes: [
    atividade4
  ]
})

testarAtividade({
  numero: 5,
  aluno: jeff,
  funcao: "selecionarCarrosDaMarca",
  testes: [
    atividade5_1a,
    atividade5_2a,
    atividade5_3
  ]
})
