document.addEventListener("DOMContentLoaded", function() {
    const body = document.getElementById("body");
    var writingsMenu = document.getElementById("menu_writings");

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
    writingsMenu.appendChild(submenu);

    // Mostrar/ocultar submenú al pasar el ratón
    writingsMenu.addEventListener("mouseenter", function() {
        if(window.innerWidth >= 992) {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "contents";
        }
    });

    writingsMenu.addEventListener("mouseleave", function() {
        submenu.style.display = "none";
    });

    /*Burger menu*/
    var burgerMenu = document.getElementsByClassName("burguer_menu")[0];
    const menu = document.getElementById('menu');

    burgerMenu.addEventListener("click", function() {
        if(burgerMenu.classList.contains('open')) {
            body.style.display = "block";
            burgerMenu.classList.remove('open');
            menu.classList.remove('open');
        } else {
            body.style.display = "none";
            burgerMenu.classList.add('open');
            menu.classList.add('open');
        }
    });  
});