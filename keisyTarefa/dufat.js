function encriptar(words) {
	words = words.replaceAll ("e", "enter"); 
	words = words.replaceAll ("i", "imes");
	words = words.replaceAll ("a", "ai");
	words = words.replaceAll ("o", "ober"); 
	words = words.replaceAll ("u", "ufat"); 
	return words; 
} 

function desencriptar(words) { 
	words = words.replaceAll ("enter", "e"); 
	words = words.replaceAll ("imes", "i"); 
	words = words.replaceAll ("ai", "a"); 
	words = words.replaceAll ("ober", "o"); 
	words = words.replaceAll ("ufat", "u");
	return words; 
	} 

