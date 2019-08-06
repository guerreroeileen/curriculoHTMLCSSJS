




function MostrarOcultar( ref ) 
{  
  // Nodo del documento que se [muestra /oculta]
  // Tiene que tener un ID unico
  var nodoContraible  = document.getElementById(ref); 

  // Nodo que contiene el [enlace] que maneja el que se [muestra /oculta]
  // DEBE tener el mismo ID que el nodo [nodoContraible] pero precedido por una x
  var xNodoDelEnlace = document.getElementById("x" + ref); 
  
  if (nodoContraible.style.display =='none') 
  { 
     xNodoDelEnlace.innerHTML = ' - Ocultar' ;
     nodoContraible.style.display ="block";
  } 
  else 
  { 
    xNodoDelEnlace.innerHTML = ' + Mostrar '; 
    nodoContraible.style.display ='none'; 
  } 
} 
