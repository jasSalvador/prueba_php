//desplazamiento secciones
/* $(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
}); */



//animaciones pagina
function isVisible(elm) {
    let rect = elm.getBoundingClientRect(); //método js que se usa para obtener tamaño y posición de un elemento en el DOM en relación con la ventana del navegador
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// cuando se carga la página...
window.addEventListener('DOMContentLoaded', () => {
    // y a todos los elementos con la clase paused...
    document.querySelectorAll(".paused").forEach(elm => {
        if (isVisible(elm)) {
            // Si son visibles inicialmente, quita la clase paused para que las animaciones se reproduzcan
            elm.classList.remove("paused");
        }
    });

    // asignamos un evento scroll...
    window.addEventListener('scroll', () => {
        document.querySelectorAll(".paused").forEach(elm => {
            if (isVisible(elm)) {
                // Si se vuelven a ver, quita la clase paused nuevamente para repetir las animaciones
                elm.classList.remove("paused");
            }
        });
    });
});





//ABRIR MODAL FORM
const btnCotizar = document.querySelector('#btnCotizar');
const modalForm = document.querySelector('#modalForm');
//const btnEnviar = document.querySelector('#btnEnviar');

btnCotizar.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log("boton clickeado");
    modalForm.classList.add("active");
});

//FORMULARIO
async function handleSubmit(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const comuna = document.getElementById('comuna').value;
    const fecha = document.getElementById('fecha').value;
    const asistentes = document.getElementById('asistentes').value;
    const inicio = document.getElementById('inicio').value;
    const termino = document.getElementById('termino').value;
    const pack = document.getElementById('pack').value;
    const mensaje = document.getElementById('mensaje').value;

    const formData = {
        nombre,
        apellido,
        email,
        comuna,
        fecha,
        asistentes,
        inicio,
        termino,
        pack,
        mensaje
    };

    try {
        const response = await fetch('https://www.rqsproducciones.cl/send-email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log(result);

        if (result.status === 'success') {
            alert('Mensaje enviado con éxito.');
        } else {
            alert('Hubo un error al enviar el mensaje.');
        }
    } catch (error) {
        console.error('Error general:', error);
        alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
}













/* function handleSubmit(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const comuna = document.getElementById('comuna').value;
    const fecha = document.getElementById('fecha').value;
    const asistentes = document.getElementById('asistetes').value;
    const inicio = document.getElementById('inicio').value;
    const termino = document.getElementById('termino').value;
    const pack = document.getElementById('pack').value;
    const mensaje = document.getElementById('mensaje').value;

    const formData = {
        nombre,
        apellido,
        email,
        comuna,
        fecha,
        asistentes,
        inicio,
        termino,
        pack,
        mensaje
    };

    try {
        fetch('https://www.rqsproducciones.cl/send-email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    alert('Mensaje enviado con éxito.');
                    document.getElementById('nombre').value = '';
                    document.getElementById('apellido').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('comuna').value = '';
                    document.getElementById('fecha').value = '';
                    document.getElementById('asistentes').value = '';
                    document.getElementById('inicio').value = '';
                    document.getElementById('termino').value = '';
                    document.getElementById('pack').value = '';
                    document.getElementById('mensaje').value = '';
                } else {
                    alert('Hubo un error al enviar el mensaje.');
                }
            });
    } catch (error) {
        console.error('Error general:', error);
        alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
}
 */






//carrusel
const carrusel = document.querySelector(".carrusel-imagenes");
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1.5;

const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft += step;

        if (carrusel.scrollLeft >= maxScrollLeft) {
            carrusel.scrollLeft = 0;
        }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
};

const prevButton = document.querySelector(".carrusel-prev");
const nextButton = document.querySelector(".carrusel-next");

prevButton.addEventListener("click", () => {
    stop();
    carrusel.scrollLeft -= 400;
});

nextButton.addEventListener("click", () => {
    stop();
    carrusel.scrollLeft += 400;
});

carrusel.addEventListener("mouseover", () => {
    stop();
});

carrusel.addEventListener("mouseout", () => {
    start();
});

document.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        stop();
    });
});

start();



//ANiMACIONES PAGiNA
//comprobar si un elemento esta visible en pantalla
/*function isVisible(elm) {
    let rect = elm.getBoundingClientRect(); //método js que se usa para obtener tamaño y posición de un elemento en el DOM en relación con la ventana del navegador
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// cuando se carga la página...
window.addEventListener('DOMContentLoaded', (ev0) => {
        // asignamos un evento scroll...
    window.addEventListener('scroll', (ev1) => {
                // y a todos los elementos con la clase paused...
        document.querySelectorAll(".paused").forEach(elm => {
            if (isVisible(elm)) // que sean visibles...
                elm.classList.remove("paused"); // les quitamos la clase paused
        })
    });
});*/


