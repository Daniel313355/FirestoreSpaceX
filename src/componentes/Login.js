import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig.js'; // Asegúrate de que esta ruta sea correcta
import mostrarRegistro from './registro.js';

export default function mostrarLogin() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div style="max-width: 400px; margin: auto; padding: 20px;">
      <h2>Iniciar Sesión</h2>
      <input type="email" id="correo" placeholder="Correo electrónico"
        style="width: 100%; padding: 10px; margin-bottom: 10px;" />
      <input type="password" id="contrasena" placeholder="Contraseña"
        style="width: 100%; padding: 10px; margin-bottom: 10px;" />
      <button id="btnLogin" style="width: 100%; padding: 10px;">Ingresar</button>
      <p style="margin-top: 10px; text-align: center;">
        ¿No tienes cuenta?
        <a href="#" id="irRegistro">Regístrate</a>
      </p>
    </div>
  `;

  document.getElementById("btnLogin").addEventListener("click", async () => {
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;

    if (!correo || !contrasena) {
      alert("Por favor, completa ambos campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, correo, contrasena);
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario o mostrar la pantalla principal de tu app
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  });

  document.getElementById("irRegistro").addEventListener("click", (e) => {
    e.preventDefault();
    mostrarRegistro();
  });
}
