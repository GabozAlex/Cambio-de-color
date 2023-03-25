let colores = ["red", "blue", "green", "yellow", "orange"] 
let numeroColor = -1

function colorTexto() {
	numeroColor++	
	document.getElementById("texto").style.color = colores[numeroColor]

	if(numeroColor==4){numeroColor=-1}
}

function colorCaja() {
	numeroColor++
	document.getElementById("caja").style.background = colores[numeroColor]
	if(numeroColor==4){numeroColor=-1}
}