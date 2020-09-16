
function codificar(encod){
encod= encod.replace( "e","enter")
encod= encod.replace( "i","imen")
encod= encod.replace( "a","ops")
encod= encod.replace( "o","ober")
encod= encod.replace( "u","ufat")
  return encod

} 

function decodificar(decod){
decod= decod.replace( "enter","e")
decod= decod.replace( "imen","")
decod= decod.replace( "ops","a")
decod= decod.replace( "ober","o")
decod= decod.replace( "ufat","u")
    return decod
}