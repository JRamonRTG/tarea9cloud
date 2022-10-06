  function calc(){
      let base = parseInt(document.getElementById("base").value);
      let exponente = parseInt(document.getElementById("exponente").value);

      let result = Math.pow(base,exponente);

      document.getElementById("respuesta").innerHTML = "El valor es: " + result;
  }  
  
  function grad(){
      let grados = parseInt(document.getElementById("grados").value);
      let grad = (grados * 1.8) +32;

      document.getElementById("grades").innerHTML = "Los grados en Farenheit son: " + grad;
  }

function nombres(){
    let persona = document.getElementById("txt").value;
    
    document.getElementById("lista").innerHTML = document.getElementById("lista").innerHTML + "<li>"
    +persona + "</li>";
    document.getElementById("txt").value = "";
}

function fecha(){
    let edad = document.getElementById("fechacum").value;
    let edad2 = document.getElementById("fechacum2").value;
    
    cum1 = edad.split("-");
    cum2 = edad2.split("-");
    
    var separado = cum1[0]- cum2[0];
    document.getElementById("fecha").innerHTML = "La fecha seria: " + cum;
}



function contador(){

    var cadena = document.getElementById("contador").value;
    var indices = [];
    var cont = 1;

    for(var i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() == " "){
            cont = cont + 1;
        } 
    }
    document.getElementById("caracteres").innerHTML = "Los caracteres son: " + cont;
}

let prom = []; 
function promedio(){
    let numerito = document.getElementById("numeritos").value;

    prom.push(numerito);

    document.getElementById("listado").innerHTML = document.getElementById("listado").innerHTML + "<li>"
    + numerito + "</li>";
    document.getElementById("numeritos").value = "";

    let suma = 0;
    for(let numerito = 0; numerito< prom.length;numerito++){
        suma= suma + prom[numerito];
    }
    document.getElementById("proma").innerHTML = "El promedio es: " +(suma/prom.length);
}


function color(){
    let color = document.getElementById("colores").value;
    document = getComputedStyle('coloreantes').fontStyle.backgroundcolor = color;
}