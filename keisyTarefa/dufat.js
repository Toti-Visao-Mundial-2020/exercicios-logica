function encriptar(args) {
	args = args.replaceAll ("e", "enter"); 
	args = args.replaceAll ("i", "imes");
	args = args.replaceAll ("a", "ai");
	args = args.replaceAll ("o", "ober"); 
	args = args.replaceAll ("u", "ufat"); 
	return args; 
} 

function desencriptar(args) { 
	args = args.replaceAll ("enter", "e"); 
	args = args.replaceAll ("imes", "i"); 
	args = args.replaceAll ("ai", "a"); 
	args = args.replaceAll ("ober", "o"); 
	args = args.replaceAll ("ufat", "u");
	return args; 
	} 

