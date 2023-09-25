
const usuarios = [
    { usuario: "Richy", contrasena: "1234" },
    { usuario: "Diego", contrasena: "1234" },
    { usuario: "Camilo", contrasena: "1234" },
    { usuario: "Yahir", contrasena: "1234" },
    
  ];

function ir() {
    var usuarioIngresado = document.form.login.value;
    var contrasenaIngresada = document.form.password.value;

    var usuarioEncontrado = usuarios.find(function(user) {
        return user.usuario === usuarioIngresado && user.contrasena === contrasenaIngresada;
    });

    if (usuarioEncontrado) {
        alert("Bienvenido a tu ATM");
        window.location.href = "index.html";
    } else {
        alert("El usuario o contraseña son incorrectos.");
    }



}