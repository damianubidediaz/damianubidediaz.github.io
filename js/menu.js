document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("menu_writings");

    // Crear elementos de submenú
    var submenu = document.createElement("div");
    submenu.classList.add("submenu");

    var option1 = document.createElement("a");
    option1.href = "novels.html";
    option1.textContent = "Novelas";
    submenu.appendChild(option1);

    var option2 = document.createElement("a");
    option2.href = "short_books.html";
    option2.textContent = "Relatos cortos";
    submenu.appendChild(option2);

    submenu.style.width = "150px";
    submenu.style.textAlign = "center";

    // Agregar submenú al menú principal
    menu.appendChild(submenu);

    // Mostrar/ocultar submenú al pasar el ratón
    menu.addEventListener("mouseenter", function() {
        setTimeout(function() {
            submenu.style.display = "block";
        }, 300);
    });

    menu.addEventListener("mouseleave", function() {
        submenu.style.display = "none";
    });
});