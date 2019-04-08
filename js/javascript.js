// Written by: Suzy Barajas
// Date: 25/03/2019

console.log("file loaded");

$(document).ready(function() {
    console.log(document.getElementById("#menu"));

    $("#menu").click(function() {
        // alert("Handler for .click() called.");

        $("#navigation-bar").toggleClass("navigation-bar--hidden");
        $("#content").toggleClass("content--no-navigation");
    });

    // When the FAB is clicked
    $("#button-card-transition").click(function() {

        // Animate button when clicked
        $("#button-card-transition")
        .addClass("button-click");

        // Remove the button click class after the animation ends
        setTimeout(function() {
            $("#button-card-transition")
            .removeClass("button-click");
        }, 300);

        // Fade in red, fade out blue
        if ($(".card__red").hasClass("fade-through-out")) {
            fadeThrough(
                $(".card__blue"),
                $(".card__red")
            );

            rotateToggle(
                $("#icon-anchor"),
                $("#icon-switch")
            );
        }

        // Fade in blue, fade out red
        else {
            fadeThrough(
                $(".card__red"),
                $(".card__blue")
            );

            rotateToggle(
                $("#icon-switch"),
                $("#icon-anchor")
            );
        }
    });

    function fadeThrough(elementFadeOut, elementFadeIn) {
        // Remove the fade in class
        elementFadeOut.removeClass("fade-through-in");
            
        // Add the fade out class
        elementFadeOut.addClass("fade-through-out");

        // Remove the fade out class
        elementFadeIn.removeClass("fade-through-out");

        // Add the fade in class
        elementFadeIn.addClass("fade-through-in");
    }

    function rotateToggle(elementRotateOut, elementRotateIn) {
        // Remove the rotate in class
        elementRotateOut.removeClass("rotate-in");
            
        // Add the rotate out class
        elementRotateOut.addClass("rotate-out");

        // Remove the rotate out class
        elementRotateIn.removeClass("rotate-out");

        // Add the rotate in class
        elementRotateIn.addClass("rotate-in");
    }
});