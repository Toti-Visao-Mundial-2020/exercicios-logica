function encriptar(palabra){
  palabra= palabra.replaceAll (e, enter);
  palabra= palabra.replaceAll (i, imes);
  palabra= palabra.replaceAll (a, ai);
  palabra= palabra.replaceAll (o, ober);
  palabra= palabra.replaceAll (u, ufat);
  return palabra;
  }
function desencriptar(palabra){
  palabra= palabra.replaceAll (enter, e);
  palabra= palabra.replaceAll (imes, i);
  palabra= palabra.replaceAll (ai, a);
  palabra= palabra.replaceAll (ober, o);
  palabra= palabra.replaceAll (ufat, u);
  return palabra;
  }
