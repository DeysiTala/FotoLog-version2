function agregaPosteo() {
    var contenedorPosteos = document.getElementById("contenedor-posteos");
    var nombreS = document.getElementById("nombre").value;
    var contenidoPosteos = document.getElementById("cajaposteos").value;

    var nuevoPost = document.createElement("div");
    var contenedorNombre = document.createElement("strong");
    var contenedorPost = document.createElement("p");
    var separacion = document.createElement("hr");


    var i = document.createElement("i");
    contenedorPost.appendChild(i);
    i.setAttribute("class", "icono");
    i.setAttribute("class", "fa fa-bell");
    i.setAttribute("arial-hidden", "true");

    var nodoNombre = document.createTextNode(nombreS + " escribió");
    var nodoPosteo = document.createTextNode(contenidoPosteos);

    contenedorNombre.appendChild(nodoNombre);
    contenedorPost.appendChild(nodoPosteo);

    nuevoPost.appendChild(contenedorNombre);
    nuevoPost.appendChild(contenedorPost);
    nuevoPost.appendChild(separacion);

    //Pintando de color icono
    i.addEventListener("click", function() {
        i.classList.toggle("rojo");
    });

    nuevoPost.setAttribute("class", "posteo");
    contenedorPosteos.appendChild(nuevoPost);

    document.getElementById("nombre").value = "";
    document.getElementById("cajaposteos").value = "";

}

function limpiar() {

    //document.getElementById("toDoList").innerHTML="";
    var posteoFinal = document.getElementById("contenedor-posteos");
    posteoFinal.parentNode.removeChild(posteoFinal);


}