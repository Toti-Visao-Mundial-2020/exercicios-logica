

let list =  ["camila", "andrew", "damian", "elizabeth", "christopher", "robin", "hermmione", "alice", "amy", "shelson", "rory", "lorelaine", "jackson", "will", "zen", "yan"]
//lista, en este caso son los nombre de las personas que asisten a clases//


function insertionSort (list) {
  const len = list.length    //para saber el tamaño del array//

  for (let unsortedIndex = 1; unsortedIndex < len; unsortedIndex++) {
    let sortedIndex = unsortedIndex
    const element = list[unsortedIndex]

    while (sortedIndex > 0 && list[sortedIndex - 1] > element) {
      list[sortedIndex] = list[sortedIndex - 1]
      sortedIndex--
    }

    list[sortedIndex] = element
  }

  return list
}

var orderedList = insertionSort(list)
// se uso una variable para llamar el resultado de la funcion y ordenarlo en reversa//

orderedList.reverser()
