alert("Hola, estás en una habitación oscura. Puedo darte pistas para salir, debes elegir correctamente.");

function avanzar() {
  let respuestaUno = prompt("Tienes tres opciones:\n1 - Dar la vuelta hacia atrás\n2 - Avanzar un metro\n3 - Retroceder un metro\nElige con uno de estos números:");

  if (respuestaUno == 1) {
    alert("Ok, diste la vuelta. ¿Será una buena opción?");
    let resVuelta = prompt("¿Quieres seguir retrocediendo o volver a como estabas?\n1 - Volver\n2 - Avanzar un metro");

    if (resVuelta == 1) {
      alert("Volver... buena decisión.");
      avanzar();
    } else {
      alert("Avanzaste un metro. Estás chocando contra la pared.");
      let resPared = prompt("¿Quieres volver a como estabas?\n1 - Volver\n2 - Girar 360 grados y mirar hacia adelante");

      if (resPared == 1) {
        alert("Volviste a empezar.");
        avanzar();
      } else {
        alert("Giraste 360°.");
        let resCama = prompt("Puedes:\n1 - Avanzar un metro\n2 - Subir a la cama");

        if (resCama == 2) {
          alert("Buena decisión, subiste a la cama.");
          let resArriba = prompt("Estás arriba de la cama. ¿Por dónde bajas?\n1 - Por el otro lado\n2 - Por donde subiste");

          if (resArriba == 1) {
            alert("Perfecto, estás atento.");
            let resBajando = prompt("Ahora puedes:\n1 - Avanzar un metro\n2 - Subir a la cama otra vez");

            if (resBajando == 1) {
              alert("¡Ganaste! Estás tocando la puerta, puedes salir 🚪✨");
            } else {
              alert("Otra vez en la cama... ¿qué estás haciendo? 😅");
            }
          } else {
            alert("Otra vez en la cama... bucle eterno 😬");
          }
        } else {
          alert("Avanzaste, pero te golpeaste con algo. Tal vez subir a la cama era mejor.");
        }
      }
    }
  } else if (respuestaUno == 2 || respuestaUno == 3) {
    alert("Oops, opción incorrecta. Tal vez deberías haber dado la vuelta primero...");
    avanzar(); // Reintentar
  } else {
    alert("No entiendo esa opción, intentá de nuevo.");
    avanzar(); // Reintentar
  }
}

avanzar();

