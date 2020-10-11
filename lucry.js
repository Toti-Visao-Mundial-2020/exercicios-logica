 const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 
'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 
'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 
'geraldo', 'yuri', 'marcio'];

function insertionSort(class1) {
    const len1 = class1.length
    
    for (let unsortedIndex = 1; unsortedIndex < len; unsortedIndex++) {
      let sortedIndex = unsortedIndex
      const element =class1[unsortedIndex]
      
      while (sortedIndex > 0 && class1[sortedIndex - 1] > element) {
        class1[sortedIndex] = class1[sortedIndex - 1]
      }

      class1[sortedIndex] = element
      
    }

    return class1
    
  }
const class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 
'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 
'yasmin', 'claudio']

function insertionSort(class2) {
    const len2 = class2.length
    
    for (let unsortedIndex = 1; unsortedIndex < len; unsortedIndex++) {
      let sortedIndex = unsortedIndex
      const element =class2[unsortedIndex]
      
      while (sortedIndex > 0 && class1[sortedIndex - 1] > element) {
        class2[sortedIndex] = class2[sortedIndex - 1]
      
      }

      class2[sortedIndex] = element
      
    }

    return class2
    
  }
const class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 
'teresinha', 'emanuel', 'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 
'marcelo', 'benedita', 'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo']

function insertionSort(class3) {
    const len3 = class3.length
    
    for (let unsortedIndex = 1; unsortedIndex < len; unsortedIndex++) {
      let sortedIndex = unsortedIndex
      const element =class3[unsortedIndex]
      
      while (sortedIndex > 0 && class1[sortedIndex - 1] > element) {
        class3[sortedIndex] = class3[sortedIndex - 1]
       
      }

      class3[sortedIndex] = element
      
    }

    return class3
    
  }

let listOrde1= insertionSort(class1)
let listOrde2= insertionSort(class2)
let listOrde3= insertionSort(class3)
listOrde1.reverser()
listOrde2.reverser()
listOrde3.reverser() 

   
function binarySearh(class1, element){
let start= 0
let end= class1.length-1
while (start<=end){
const mid= math.floor((start+end)/2)
if (class1[mid]===element){
start= mid + 1}
else{
end= mid - 1
}
}
returne false
} 
