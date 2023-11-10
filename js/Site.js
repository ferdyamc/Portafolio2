var verProyectoButtons = $(".ver-mas"); // Obtener arreglo con todos los botones "ver-mas"
var lbx = $("#lightbox"); // Capturar de lightbox
var imgLbxv = $("#imgLbx"); //Captura de Imagen Lightbox
var imgPry = $(".img-proyect"); //Captura arreglo con todas la imagenes de proyectos
var cerrarlbx = document.getElementById("btn-out-lbx");//Captura del botón cerrar
lbx.hide();//Inicializar lighbox oculto


// Agregar evento de clic a cada botón del arreglo-----------------------------------------------------------------
verProyectoButtons.click(function () {   
    var buttonIndex = verProyectoButtons.index(this);// Obtener el índice del botón "ver-mas" dentro del arreglo
    imgLbxv.attr("src", imgPry.eq(buttonIndex).attr("src"));// Asignar la imagen del proyecto seleccionado a la imagen del lighbox
    lbx.fadeIn(100);//Mostar lighbox
});


//Agregar evento para el cierre del lightbox
cerrarlbx.addEventListener("click", function () {
    lbx.fadeOut(100);
});


//Agregar evento para el botón ver más (sección proyectos)-------------------------------------------------------
var boxproyectos = $(".box-section-proyectos");//Captuarar contenedor de proyectos
var verMasProyectos = $("#btnVermasProyectos");//Captuarar botón ver más
var estadoboxproyectos = 0;//Variable de estado

//evento
verMasProyectos.click(function () {
    if (estadoboxproyectos === 0) {
        boxproyectos.css("height", "auto");
        estadoboxproyectos += 1;
    } else {
        boxproyectos.css("height", "460px");
        estadoboxproyectos = 0;
    }
});


//Agregar evento para el botón leer más (sección sobre mí)----------------------------------------------------
var boxParrafoSobremi = $("#parrafo-sobreMi");//Captuarar contenedor del parrafo
var btnLeerMasSobreMi = $("#leerMasDesc");//Captuarar botón leer más
var estadoParrfoSobreMi = 0;//Variable de estado

//evento
btnLeerMasSobreMi.click(function () {
    if (estadoParrfoSobreMi === 0) {
        boxParrafoSobremi.css("height", "auto");
        estadoParrfoSobreMi += 1;
    } else{
        boxParrafoSobremi.css("height", "42px");
        estadoParrfoSobreMi  = 0;
    }
});