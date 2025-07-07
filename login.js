document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Aquí puedes agregar la lógica de autenticación
    if (username === "admin" && password === "password") {
        document.getElementById('message').innerText = "¡Inicio de sesión exitoso!";
    } else {
        document.getElementById('message').innerText = "Usuario o contraseña incorrectos.";
    }
});
