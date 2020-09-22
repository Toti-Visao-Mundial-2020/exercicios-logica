
//invertir lista con nativos//

function NativeRecursive(){
    const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio'];
    const class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']

    const recursiva =class1.reverse();
    const ultimo = recursiva[0];
    const decreciente = recursiva;
    
    
    console.log("el ultimo alumno",[0],ultimo);
    console.log("lista recursiva",recursiva);
}
    

// invertir lista sem nativos//

const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio'];
const class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']

const clase= class1

function invertirManual (clase){
  
  let longitudDeclase = clase.length;
  
  for (let x = 0; x < longitudDeclase / 2; x++) {
  
    let temporal = clase[x]; 
    let recursiva = longitudDeclase - x - 1;
    
    clase[x] = clase[recursiva]; 
    
    clase[recursiva]=temporal;
  
  }    
}
  invertirManual(clase);
console.log("Invertido manualmente: ",clase);
console.log("ultimo alumno" ,clase[0] );


// lista de asistencia , falta a variabel para determinar o lugar do nomi //

var class1 =['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio']
var class2 =[ 'benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']
var class3 = ['yasmin']
var contador=[]
function llamar( class1, class2, class3,contador,){
  var pos1 = class1.indexOf('elisa');
  var pos2 = class2.indexOf('elisa');
  var pos3 = class3.indexOf('elisa');
  
  var pegarnomi1= class1.splice(pos1);
  var pegarnomi2= class2.splice(pos2);
  var pegarnomi3= class3.splice(pos3);

  contador.push(pegarnomi1,pegarnomi2,pegarnomi3)

  console.log(contador);
  console.log(pos1)

}
console.log(llamar(class1,class2,class3,contador,));
