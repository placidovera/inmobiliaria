
  let textos = ["Puerta 1", "Puerta 2", "Puerta 3"];
  let botones = document.querySelectorAll(".puerta");
  const premio = textos[Math.floor(Math.random() * textos.length)];
  alert(`(DEBUG) El premio está en: ${premio}`); // solo para pruebas

  let juegoActivo = true; // bandera para permitir o bloquear el juego

  // Botón de salida
  let botonSalir = document.querySelector(".salir");
  botonSalir.textContent = "Salir del juego";

  botonSalir.addEventListener("click", () => {
    alert("¡Saliendo del juego!");
    juegoActivo = false; // desactiva el juego
  });

  botones.forEach((boton, index) => {
    boton.textContent = textos[index];

    boton.addEventListener("click", () => {
      if (!juegoActivo) {
        alert("El juego fue terminado. Recargá la página para volver a jugar.");
        return;
      }

      let respuesta = textos[index];
      alert(`Elegiste ${respuesta}.`);

      // Filtramos las puertas que no son ni el premio ni la elegida
      let puertasParaAbrir = textos.filter(p => p !== respuesta && p !== premio);
      let puertaAbierta = puertasParaAbrir[Math.floor(Math.random() * puertasParaAbrir.length)];

      alert(`Yo abro ${puertaAbierta}. No hay premio.`);

      let cambiar = confirm("¿Querés cambiar tu elección?");
      let eleccionFinal = respuesta;

      if (cambiar) {
        eleccionFinal = textos.find(p => p !== respuesta && p !== puertaAbierta);
      }

      if (eleccionFinal === premio) {
        alert(`¡Ganaste! El premio estaba en ${premio}.`);
      } else {
        alert(`Perdiste. El premio estaba en ${premio}.`);
      }

      juegoActivo = false; // termina el juego después de jugar una vez
    });
  });
