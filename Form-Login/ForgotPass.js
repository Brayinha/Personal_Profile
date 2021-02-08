var btn = document.getElementById("btn-login");
const men = document.querySelector("div .mensagem")
const inp = document.querySelectorAll(".login form .btn input");



btn.addEventListener("click", function() {

    const email = document.getElementById('mail').value;
    const mail = document.getElementById('lbemail');



    if (email === "") {
        men.style.display = "block";
        men.innerHTML = "Insira um Email Válido";
        const email = document.getElementById('pswd').style.borderColor = "red";
        const mail = document.getElementById('lbemail').style.color = "#FF4040";

    }

});


function FocusInEmail() {
    const email = document.getElementById('mail').value;
    const mail = document.getElementById('lbemail');


    if (email !== "") {
        men.style.display = "none";
        const email = document.getElementById('mail').style.borderColor = "forestgreen";
        const mail = document.getElementById('lbemail').style.color = "#228B22";
    }

}

function FocusNoEmail() {
    const email = document.getElementById('mail').value;
    const mail = document.getElementById('lbemail')


    if (email == "") {
        const email = document.getElementById('mail').style.borderColor = "lightgrey";
        const mail = document.getElementById('lbemail').style.color = "#999999";
    }
}