document.getElementById("ingtext")
function codificar() {
    var ingtex= document.getElementById("ingtext").value;
    
    ingtex = ingtex.replace("e","enter")
    ingtex = ingtex.replace("i","imen")
    ingtex = ingtex.replace("a","ops")
    ingtex = ingtex.replace("o","ober")
    ingtex = ingtex.replace("u","ufat")
    
    return document.getElementById("result").innerHTML = ingtex

}

document.getElementById("boton").onclick=function(){codificar();}



