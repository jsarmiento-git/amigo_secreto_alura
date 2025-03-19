// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//return Math.floor(Match.random()*10)+1;


let listaCompras = [];

function agregarAmigo()
{
	let nombre = document.getElementById('amigo').value;

	if (nombre.length === 0) //el textbox esta vacio
	  alert('Error: Debe ingresar un nombre');
	else 
		{
		  // El textbox tiene contenido
		  listaCompras.push(nombre);
			let lista = document.getElementById('listaAmigos').innerHTML += '<li>'+nombre+'</li>';
		    document.getElementById('amigo').value = '';
		}

	return;
}

function sortearAmigo()
{
	if (listaCompras.length == 0)
		alert('Debe ingresar al menos un nombre en la lista para el sorteo');
	else
		{
			let i = Math.floor(Math.random()*listaCompras.length);
			document.getElementById('listaAmigos').innerHTML = '';
			document.getElementById('resultado').innerHTML = '<li>El Amigo secreto sorteado es: '+listaCompras[i]+'</li>';	
			listaCompras = [];
		}
	
	return;
}
