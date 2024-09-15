
const nombreSignIn = document.querySelector("#signInNombre");
const apellidoSignIn = document.querySelector("#signInApellido");
const passwordSignIn = document.querySelector("#signInPassword");
const formSignIn = document.querySelector("#IDform-SignIn");
const headerSignIn = document.querySelector("#signInHeader");
const errorText = document.querySelector("#error-text");

formSignIn.addEventListener("submit", function(e) {
    e.preventDefault();

    if(nombreSignIn.value == "" || apellidoSignIn.value == "" || passwordSignIn == "") {
        errorText.innerHTML = `<p>Datos invalidos. Por favor volver a introducirlos.</p>`
    } else {
        localStorage.setItem("nombre de usuario", nombreSignIn.value);
        localStorage.setItem("apellido de usuario", apellidoSignIn.value);
        localStorage.setItem("contraseña", passwordSignIn.value);
        window.location.href= "../pages/login.html"
    }
})

