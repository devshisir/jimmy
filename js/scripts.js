$(document).ready(function () {
    $("#venues-nav-bar").click(function() {
        const requestPath = location.pathname.substring(1);
        if (requestPath != "") {
            window.location = "/#venues";
        } else {
            $('html,body').animate({scrollTop: $(".tp-select-school").offset().top - 60}, 'slow');
        }
    });

    $("#venues-footer").click(function() {
        const requestPath = location.pathname.substring(1);
        if (requestPath != "") {
            window.location = "/#venues";
        } else {
            $('html,body').animate({scrollTop: $(".tp-select-school").offset().top - 60}, 'slow');
        }
    });

    $("#login-button").click(function() {
        window.location = "/login";
    });

    $("#account-button").click(function() {
        window.location = "/profile";
    });
});