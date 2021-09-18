/**
 * @author: Noé Vásquez Godínez
 * Script en JavasScript para iniciar el módulo.
 */

// Importamos la clase de ContentDiv
import { ContentDiv } from "./ContentDiv.js";

// Función principal
function main(){
    // Contenido de cada div 
    var divA = new ContentDiv();
    var divB = new ContentDiv();
    var divC = new ContentDiv();
    
    // Agregamos los datos a mostrar
    divA.setContent("Este texto corresponde al Div A");    
    divB.setContent("Estamos en el Div B");
    divC.setContent("Los vegetales son más ricos !");

    // Agregamos eventos
    document.getElementById("div-A").addEventListener('click', function (event) {      
        document.getElementById("div-content").innerHTML = divA.getContent();    
    });
    document.getElementById("div-B").addEventListener('click', function (event) {      
        document.getElementById("div-content").innerHTML = divB.getContent();    
    });
    document.getElementById("div-C").addEventListener('click', function (event) {      
        document.getElementById("div-content").innerHTML = divC.getContent();    
    });
}
// Se carga el script despues de haber cargado por compleot el HTML
window.onload = function() {
    main();
};