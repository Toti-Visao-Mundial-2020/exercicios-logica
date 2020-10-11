
function vowelEncoder(vowel) {
    vowel = vowel.replaceAll("e", "enter");
    vowel = vowel.replaceAll("i", "imes");
    vowel = vowel.replaceAll("a", "ai");
    vowel = vowel.replaceAll("o", "ober");
    vowel = vowel.replaceAll("u", "ufat");
                 return vowel; 
  }
  
  function vowelDecoder(vowel) {
    vowel = vowel.replaceAll("enter", "e");
    vowel = vowel.replaceAll("imes", "i");
    vowel = vowel.replaceAll("ai", "a");
    vowel = vowel.replaceAll("ober", "o");
    vowel = vowel.replaceAll("ufat", "u");
                 return vowel;
  }
  
  //Usamos "console.log" para codificar e decodificar a modo de teste.
   
  console.log(vowelEncoder("ola tudo bem")); //oberlai tufatdober benterm.
  
  console.log(vowelDecoder("oberlai tufatdober benterm")); //ola tudo bem.