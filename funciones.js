let productos=[[0,"coca",12],
			   [1,"panditas",7],
			   [2,"agua",6],
			   [3,"galletas",8],
			   [4,"cafe",15]];

window.addEventListener("load",cargar);

function cargar(){
	for(i=0; i<productos.length;i++){
		document.querySelector('section').innerHTML+="<div id='"+productos[i][0]+"'>"+
														"<h1>"+productos[i][1]+"</h1>"+
														"<p>$"+productos[i][2]+"</p>"+
														"<button onclick='agregar("+productos[i][0]+")'>+</button>"+
														"</div>"
	}
}

let carrito=[];
function agregar(id){
	carrito.push(id);
	document.querySelector('s').innerHTML=carrito.length;
}

function mostrarCarrito(){
	let listaProductos="";
	for(i=0; i<carrito.length; i++){
		for(j=0; j<productos.length; j++){
			if(productos[j][0]==carrito[i]){
				listaProductos+="-"+productos[j][1]+"    $"+productos[j][2]+"\n";
			}
		}
	}
	alert("LISTA DE PRODUCTOS: \n"+listaProductos);
}

function visibilidad(){
	mostrarCarrito();
}