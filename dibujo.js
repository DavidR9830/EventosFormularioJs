var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener ("click", dibujoPorClick); // sirve para saber cuando se da el evento en el objeto
                                                // la funciónse pasa sin parametros porque solo se referencia y no se ejecuta de inmediato.

var d = document.getElementById("dibujito"); //traer un elemento por su Id
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea (color, xinicial, yinicial,xfinal,yfinal)
{
lienzo.beginPath(); 
lienzo.strokeStyle = color; 
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke(); 
lienzo.closePath()
}

function dibujoPorClick () // las variables declaradas dentro de una función solo se pueden usar en ella y no en otas partes, son de ambito privado
{
   var lineas = parseInt (texto.value); // para traer el valor de la caja de texto a lineas
   var l = 0;
   var yi,xf;
   var colorcito = "#FAA";
   var espacio = ancho/lineas;
   for (l = 0; l <lineas; l++)
   {
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea(colorcito,0,yi,xf,300);
    console.log ("Linea" +1);
   }
   dibujarLinea(colorcito,1,1,1,299);
   dibujarLinea(colorcito,1,299,299,299);
  
}