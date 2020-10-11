function Codificar(codi) {
    codi = codi.replaceAll("e", "enter");
    codi = codi.replaceAll("i", "imes");
    codi = codi.replaceAll("a", "ai");
    codi = codi.replaceAll("o", "ober");
    codi = codi.replaceAll("u", "ufat");
    return codi;
}

function Decodificar(deco) {
    deco = deco.replaceAll("enter", "e");
    deco = deco.replaceAll("imes", "i");
    deco = deco.replaceAll("ai", "a");
    deco = deco.replaceAll("ober", "o");
    deco = deco.replaceAll("ufat", "u");
    return deco;
}

 // Para codificar alguma palavra é só digitar no console -> console.log(Codificar("ola"));

 // Para decodiicar alguma palavra é só digitar no console -> console.log(Decodificar("ola"));