document.addEventListener("DOMContentLoaded", function() {
    const spinnerOverlay = document.getElementById("spinner-overlay");

    spinnerOverlay.style.display = "flex";


    window.addEventListener("load", function() {
        spinnerOverlay.style.display = "none";
    });
});