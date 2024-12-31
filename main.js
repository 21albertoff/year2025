const fechaLimite = new Date("2025-01-01T00:00:00"); // Establece tu fecha y hora límite aquí
        const boton = document.getElementById("boton1");

        const mensajesNoDisponible = [
            "¡Aún no es el momento! El botón estará disponible el " + fechaLimite.toLocaleString(),
            "Este botón está bloqueado hasta " + fechaLimite.toLocaleString() + ". ¡Pronto podrás usarlo!",
            "¡No puedes pulsar ahora! El botón se activará el " + fechaLimite.toLocaleString() + "."
        ];
        mensaje = mensajesNoDisponible[Math.floor(Math.random() * mensajesNoDisponible.length)];

        // Función para manejar el clic en el botón
        boton.addEventListener('click', function(event) {
            const ahora = new Date();
            
            // Verifica si la fecha y hora actuales son anteriores a la fecha límite
            if (ahora < fechaLimite) {
                // Si es antes de la fecha límite, muestra una alerta
                alert(mensaje);
                event.preventDefault();
                window.location.reload();
            }
        });

        
         // Array de mensajes de trampas que se elegirán aleatoriamente
         const mensajesTrampas = [
            "El 2025 no pinta bien para ti. Una banda de monos ninja podría asaltarte en pleno supermercado, y encima, no para robarte el dinero, sino tu dignidad. Eso sí, al menos tendrás salud para correr más rápido que ellos. ¡Buena suerte, la vas a necesitar y Feliz Año!",
            "Este año perderás más cosas que un mago sin sombrero: llaves, dinero, dignidad y hasta la noción del tiempo. Pero no te preocupes, al final del 2025 encontrarás algo valioso... probablemente un calcetín perdido desde el 2007.",
            "En 2025 ahorrarás dinero, pero solo porque te quedarás atrapado en un ascensor durante las rebajas. Eso sí, saldrás con un trauma y sin batería en el móvil, pero oye, ¡menos gastos y más historias raras para contar!",
            "Este año el amor no será tu fuerte. Es más, el único que te va a mirar con deseo será un loro en un zoológico... y puede que hasta te robe un beso. Pero tranquilo/a, al menos no habrá discusiones. 🦜",
            "Amig@, 2025 será el año en el que aprenderás que cocinar puede ser peligroso. Probablemente quemes algo, actives la alarma de incendios y termines pidiendo comida para llevar... solo para que el repartidor llegue con el pedido equivocado.",
            "Prepárate, porque este año tendrás tantas caídas inesperadas que la gente pensará que entrenas parkour. Eso sí, lo peor será cuando tropieces frente a tu crush y termines con una pizza en la cara. 🍕 ¡Ánimo!",
            "Este año te verás envuelto en un triángulo amoroso… con Netflix y tu nevera vacía. Y por si fuera poco, puede que tu vecino se alíe con los monos del parque para sabotearte. ¡Ojo con las traiciones inesperadas!",
            "El 2025 será el año en el que, por no mirar el móvil, te perderás una fiesta épica y te presentarás al día siguiente… ¡en la dirección equivocada! Pero no te preocupes, al menos conocerás a un mapache simpático que te hará compañía. 🦝",
            "En 2025, tus ganas de aventura te llevarán a situaciones raras: como quedarte atrapado en una isla con un grupo de gaviotas revolucionarias que exigen tu bocadillo. Consejo: no subestimes su poder de organización. ¡Cuidado! ",
        ];

        // Función para seleccionar un mensaje de trampas aleatorio
        function obtenerMensajeTrampas() {
            return mensajesTrampas[obtenerValorTarjeta()-1];
        }


        // Función para almacenar el número de la tarjeta seleccionada
        function almacenarTarjetaSeleccionada() {
            if (!localStorage.getItem("numeroTarjetaAbierta")) { // Solo lo guarda la primera vez
                const inputs = document.querySelectorAll('input[name="gift"]'); // Seleccionamos todos los botones con name="gift"
                
                // Iteramos sobre todos los inputs para ver cuál está seleccionado
                inputs.forEach(input => {
                    if (input.checked && input.id.startsWith("small-gift-message-")) { // Si está seleccionado y es uno de los mensajes pequeños
                        const tarjetaId = input.id.split("-").pop(); // Extraemos el número de la tarjeta
                        localStorage.setItem("numeroTarjetaAbierta", tarjetaId); // Guardamos el número en el localStorage
                    }
                });
            }
        }

        function obtenerValorTarjeta(){
            const inputs = document.querySelectorAll('input[name="gift"]'); // Seleccionamos todos los botones con name="gift"
            let valor = 0;
            // Iteramos sobre todos los inputs para ver cuál está seleccionado
            inputs.forEach(input => {
                if (input.checked && input.id.startsWith("small-gift-message-")) { // Si está seleccionado y es uno de los mensajes pequeños
                    valor = input.id.split("-").pop(); // Extraemos el número de la tarjeta
                }
            });

            return valor;
        }

        // Función para mostrar el número de la tarjeta seleccionada
        function mostrarNumeroTarjeta() {
            const numeroTarjeta = localStorage.getItem("numeroTarjetaAbierta"); // Recuperamos el número de la tarjeta
            const numeroTarjetaDiv = document.getElementById("numeroTarjeta");

            if (numeroTarjeta) {
                if (numeroTarjeta == 1) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! 🤫`;
                }
                if (numeroTarjeta == 2) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! ✌️`;
                }
                if (numeroTarjeta == 3) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! 🤟`;
                }
                if (numeroTarjeta == 4) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! 🖖`;
                }
                if (numeroTarjeta == 5) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! 🖐️`;
                }
                if (numeroTarjeta == 6) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! 🍷`;
                }
                if (numeroTarjeta == 7) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! ☕`;
                }
                if (numeroTarjeta == 8) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! 💐`;
                }
                if (numeroTarjeta == 9) {
                    numeroTarjetaDiv.textContent = `¡Haz la captura y comparte! 🍾`;
                }
            } else {
                numeroTarjetaDiv.textContent = "¡Haz una captura y compartela por el grupo para que se cumpla!";
            }
        }

        // Función para mostrar el mensaje de "no hagas trampas"
        function mostrarMensajeTrampas(tarjetaId) {
            const tarjeta = document.getElementById(`mensajeFinal-${tarjetaId}`);
            const mensajeAleatorio = obtenerMensajeTrampas(); // Obtenemos un mensaje aleatorio
            tarjeta.innerHTML = `<span class="tituloCarta">¿¡Suerte!?</span>
                                 <span class="textoCarta"> ${mensajeAleatorio}</span>`;
        }

        // Función para evitar recarga al seleccionar tarjeta
        function manejarSeleccionTarjeta(event) {
            console.log(obtenerValorTarjeta());

            if (localStorage.getItem("numeroTarjetaAbierta") && localStorage.getItem("numeroTarjetaAbierta") != obtenerValorTarjeta()) {
                // Si ya hay un regalo abierto, mostramos un mensaje de advertencia en la tarjeta seleccionada
                mostrarMensajeTrampas(obtenerValorTarjeta()); // Reemplaza el contenido de la tarjeta con el mensaje de trampas
                event.preventDefault(); // Evita que se seleccione la nueva tarjeta
                return; // Salir sin almacenar la tarjeta seleccionada
            } else {
                // Si no hay tarjeta seleccionada previamente, almacenamos la nueva
                almacenarTarjetaSeleccionada();
                mostrarNumeroTarjeta(); // Mostrar el número de la tarjeta seleccionada
            }
        }

        // Escuchamos el cambio en los radio buttons para almacenar la tarjeta seleccionada
        document.querySelectorAll('input[name="gift"]').forEach(input => {
            input.addEventListener('change', manejarSeleccionTarjeta); // Llamar la función con control de recarga
        });

        // Cargar el número de la tarjeta seleccionada al cargar la página
        window.onload = mostrarNumeroTarjeta;
