 document.getElementById('miFormulario').addEventListener('submit', function (evento) {
        evento.preventDefault();

        const formulario = evento.target;
        const datosFormulario = new FormData(formulario);

        let datosHTML = '';
        for (let [campo, valor] of datosFormulario.entries()) {
          let nombreCampo = campo;
          switch (campo) {
            case 'evento':
              nombreCampo = 'Nombre del evento';
              break;
            case 'organizador':
              nombreCampo = 'Organizador';
              break;
            case 'fecha':
              nombreCampo = 'Fecha';
              break;
            case 'tipo':
              nombreCampo = 'Tipo de evento';
              break;
            case 'asistentes':
              nombreCampo = 'Cantidad de asistentes';
              break;
            case 'plataforma':
              nombreCampo = 'Plataforma preferida';
              break;
            case 'descripcion':
              nombreCampo = 'Descripción';
              break;
            case 'acepto':
              nombreCampo = 'Términos aceptados';
              break;
          }

          if (valor && valor.trim() !== '') {
            datosHTML += `
              <div class="dato">
                <span class="etiqueta">${nombreCampo}:</span> ${valor}
              </div>
            `;
          }
        }

        document.getElementById('datosEnviados').innerHTML = datosHTML;
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });

        alert('¡Tu solicitud fue enviada correctamente! ✅');
      });

      function limpiarFormulario() {
        document.getElementById('miFormulario').reset();
        document.getElementById('resultado').style.display = 'none';
      }

      document.addEventListener('DOMContentLoaded', function () {
        const contenedor = document.querySelector('.container');
        const botonLimpiar = document.createElement('button');
        botonLimpiar.innerHTML = '🧹 Limpiar Solicitud';
        botonLimpiar.style.backgroundColor = '#ff9800';
        botonLimpiar.style.marginTop = '10px';
        botonLimpiar.onclick = limpiarFormulario;
        contenedor.appendChild(botonLimpiar);
      });
      document.getElementById('edad').addEventListener('input', function () {
  document.getElementById('valorEdad').textContent = this.value;
});
