/**
 * @author: Noé Vásquez Godínez
 * @class: Esta clase mantiene el estado de cada div,
 * sirve para volcar los datos en el render.
 */
export class ContentDiv{
    // Texto a mostrar
    content = "";
    // Agregamos la infromación
    setContent(contentText){
        this.content = contentText;
    }
    // Obtenemos la información
    getContent(){
        return this.content;
    }
}
