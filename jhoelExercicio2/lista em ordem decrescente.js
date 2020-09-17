const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 
'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 
'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 
'geraldo', 'yuri', 'marcio'];

function listaEmOrdemDecrescente(class1) {
    const len = class1.length
  
    for (let unsortedIndex = 1; unsortedIndex < len; unsortedIndex++) {
      let sortedIndex = unsortedIndex
      const element =class1[unsortedIndex]
  
      while (sortedIndex > 0 && class1[sortedIndex - 1] > element) {
        class1[sortedIndex] = class1[sortedIndex - 1]
        sortedIndex--
      }
  
      class1[sortedIndex] = element
    }
  
    return class1.reverse(class1)
  }

  /* Utilizamos o algoritmo de ordenacão "insertion sort", 
para assim coseguirmos ordenar a nossa lista de chamada 
por ordem alfabeticade forma decrescente.\*

\* Chamando o nome da funcão ("listaEmOrdemDecrescente") no 
console do navegador podemos vizualizar o resultado.\*

listaEmOrdemDecrescente(class1)
(27) ["zeca", "yuri", "yasmin", "vinicius", "teresinha", "rodrigo", 
"rebeca", "marina", "marcio", "marcelo", "luiza", "laís", "isadora",
"isabela", "hugo", "helena", "geraldo", "filipe", "fatima", "emanuel",
"elisa", "claudio", "catarina", "caio", "brenda", "benedita", "anthony"]
