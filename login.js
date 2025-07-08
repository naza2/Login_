// Agregar un evento al botón de inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('button[type="button"]');
    
    loginButton.addEventListener('click', function() {
        // Obtener los valores de los campos de entrada
        const email = document.getElementById('form2Example17').value;
        const password = document.getElementById('form2Example27').value;

        // Obtener los datos del usuario del localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));

        // Validar las credenciales
        if (userData && userData.email === email && userData.password === password) {
            // Si las credenciales son correctas
            Swal.fire({
                title: 'Éxito!',
                text: '¡Inicio de sesión exitoso!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                // Aquí puedes redirigir al usuario a otra página, por ejemplo:
                window.location.href = "tarea.html"; // Cambia a la URL deseada
            });
        } else {
            // Si las credenciales son incorrectas
            Swal.fire({
                title: 'Error!',
                text: 'Usuario o contraseña incorrectos. Inténtalo de nuevo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});


// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.querySelector('button[type="button"]');

    registerButton.addEventListener('click', function() {
        // Obtener los valores de los campos de entrada
        const nombre = document.getElementById('form3Example1').value;
        const apellido = document.getElementById('form3Example2').value;
        const email = document.getElementById('form2Example17').value;
        const password = document.getElementById('form2Example27').value;

        // Validar que todos los campos estén llenos
        if (nombre && apellido && email && password) {
            // Guardar los datos en localStorage
            const userData = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                password: password
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            // Mostrar mensaje de éxito con SweetAlert2
            Swal.fire({
                title: '¡Registro exitoso!',
                text: 'Te has registrado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                // Redirigir a la página de inicio de sesión o a otra página
                window.location.href = "index.html"; // Descomentar y cambiar a la URL deseada
            });
        } else {
            // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});
