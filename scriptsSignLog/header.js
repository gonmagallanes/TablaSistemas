
const botonesSesion = document.querySelector("#botonesSesion");

const usernameIndex = localStorage.getItem("nombre de usuario");

if(usernameIndex !== "" && usernameIndex !== null){
    botonesSesion.innerHTML = `<h5>¡Bienvenido/a, ${usernameIndex}!</h5> <input style="margin-left: 2vw;" class="botonesCarro2" id="salirDeSesion" type="button" value="Salir de la cuenta"> `
}

const salirDeSesion = document.querySelector("#salirDeSesion")

salirDeSesion.addEventListener("click", function (e){
  e.preventDefault();
  localStorage.clear();
  window.location.href= "./pages/signin.html"
})