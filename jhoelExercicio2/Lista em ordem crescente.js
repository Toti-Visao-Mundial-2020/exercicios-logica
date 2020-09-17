const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 
'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 
'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 
'geraldo', 'yuri', 'marcio'];

function listaEmOrdemCrescente(class1) {
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
  
    return class1
  }

/* Utilizamos o algoritmo de ordenacão "insertion sort", 
para assim coseguirmos ordenar a nossa lista de chamada por ordem alfabetica\*

\* Chamando o nome da funcão ("listaEmOrdemCrescente") no 
console do navegador podemos vizualizar o resultado.\*

\* insertionSort(class1)
(27) ["anthony", "benedita", "brenda", "caio", "catarina", "claudio", "elisa", "emanuel", "fatima", 
"filipe", "geraldo", "helena", "hugo", "isabela", "isadora", "laís", "luiza", "marcelo", 
"marcio", "marina", "rebeca", "rodrigo", "teresinha", "vinicius", "yasmin", "yuri", "zeca"]\* 