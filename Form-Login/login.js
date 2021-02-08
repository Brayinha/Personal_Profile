var show_btn = document.getElementById('remember');
var btn = document.getElementById("btn-login");
const men = document.querySelector("div .mensagem")
const inp = document.querySelectorAll(".login form .btn input");





show_btn.addEventListener("click", function() {
    const psw = document.getElementById('pswd');

    if (psw.type === "password") {
        psw.type = "text";
        show_btn.classList.add("hide");

    } else {
        psw.type = "password";
        show_btn.classList.remove("hide");
    }
});


btn.addEventListener("click", function() {

    const user = document.getElementById('user').value;
    const psw = document.getElementById('pswd').value;
    const labelU = document.getElementById('lbuser');
    const labelP = document.getElementById('lbsenha');

    if (user === "" && psw === "") {
        men.style.display = "block";
        const user = document.getElementById('user').style.borderColor = "red";
        const psw = document.getElementById('pswd').style.borderColor = "red";
        const labelU = document.getElementById('lbuser').style.color = "#FF4040";
        const labelP = document.getElementById('lbsenha').style.color = "#FF4040";
        men.innerHTML = "Insira um nome do usuario, ou Senha Válidos";



    } else if (user === "") {
        men.style.display = "block";
        men.innerHTML = "Insira um nome do usuario Válido";
        const user = document.getElementById('user').style.borderColor = "red";
        const labelU = document.getElementById('lbuser').style.color = "#FF4040";



    } else if (psw === "") {
        men.style.display = "block";
        men.innerHTML = "Insira uma senha Válida";
        const psw = document.getElementById('pswd').style.borderColor = "red";
        const labelP = document.getElementById('lbsenha').style.color = "#FF4040";


    }

});




function FocusInSenha() {

    const psw = document.getElementById('pswd').value;
    const labelP = document.getElementById('lbsenha');


    if (psw !== "") {
        men.style.display = "none";
        const psw = document.getElementById('pswd').style.borderColor = "forestgreen";
        const labelP = document.getElementById('lbsenha').style.color = "#228B22";

    }
}



function FocusInUser() {
    const user = document.getElementById('user').value;
    const labelU = document.getElementById('lbuser');


    if (user !== "") {
        men.style.display = "none";
        const user = document.getElementById('user').style.borderColor = "forestgreen";
        const labelU = document.getElementById('lbuser').style.color = "#228B22";
    }

}

function FocusNoUser() {
    const user = document.getElementById('user').value;
    const labelU = document.getElementById('lbuser');


    if (user == "") {
        const user = document.getElementById('user').style.borderColor = "lightgrey";
        const labelU = document.getElementById('lbuser').style.color = "#999999";
    }
}

function FocusNoSenha() {
    const psw = document.getElementById('pswd').value;
    const labelP = document.getElementById('lbsenha');

    if (psw == "") {
        const psw = document.getElementById('pswd').style.borderColor = "lightgrey";
        const labelP = document.getElementById('lbsenha').style.color = "#999999";
    }

}