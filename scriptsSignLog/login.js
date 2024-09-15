// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LOGIN ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const usernameLS = localStorage.getItem("nombre de usuario");
const passwordLS = localStorage.getItem("contraseña");
const formLogin = document.querySelector("#loginFormID");
const usernameLogin = document.querySelector("#loginUsername");
const passwordLogin = document.querySelector("#loginPassword");
const errorText = document.querySelector("#error-text")


formLogin.addEventListener("submit", function(e) {

    if(usernameLogin.value !== usernameLS || passwordLogin.value !== passwordLS){
        e.preventDefault();
        window.location.href = "#"
        errorText.innerHTML = "<p>Datos invalidos. Por favor volver a introducirlos.</p>"
    } else {
        e.preventDefault();
        window.location.href = "../index.html"
    }

})