document.addEventListener("DOMContentLoaded", function() {

    const elementos = document.querySelectorAll('.book');

    elementos.forEach(elemento => {

        if (elemento.classList.contains('unaviable')) {
            const li = elemento.querySelector('li');

            if (li) {

                const a = li.querySelector('a');
                if (a) {

                    const nuevoP = document.createElement('p');
                    nuevoP.textContent = 'AGOTADO';
                    nuevoP.style.color = 'red';
                    nuevoP.style.fontWeight = 'bold'
                    li.insertBefore(nuevoP, a);

                }
                
            }
        }
    });

});