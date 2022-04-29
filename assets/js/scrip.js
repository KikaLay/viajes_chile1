$(document).ready(function () {
    //  Inicio Smooth scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // fin  Smooth Scroll
    //inicio alert enviar correo

       $(function(){
      $("#enviarCorreo").click(function(_event)
      { alert("El correo fue enviado correctamente") }); });
    //fin alert enviar correo

    
    // Activacion de Pop Over
    $('[data-toggle="popover"]').popover()
});
