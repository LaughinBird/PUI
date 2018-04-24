$(document).ready(function() {
    window.sr = ScrollReveal();
    sr.reveal('#home');
    sr.reveal('#bio');
    sr.reveal('#work');
    sr.reveal('#play');
    sr.reveal('#contact');

    $(".project-box").mouseover(function () {
        $(this).css("background-color", "#D7D7D7");
    });

    $(".project-box").mouseout(function () {
        $(this).css("background-color", "white");
    });
})
