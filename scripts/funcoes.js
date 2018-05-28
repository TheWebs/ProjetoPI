'use strict';

//variaveis globais para nao ter de fazer sempre getelementbyid
var registo, galeria, estatisticas, home, home_botao, registar_botao, galeria_botao, estatisticas_botao;

function loadImages()
{
    var element = document.getElementById("imagens");
    for(var a = 1; a <=9; a++)
    {
        element.insertAdjacentHTML("beforeend", "<img class='showcase' src='images/" + a.toString() + ".jpg' width=480 height=270/>");
    }
    showHome();
}

function changeMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Chamada no onLoad()
function showHome()
{
    registo = document.getElementById("registo");
    galeria = document.getElementById("galeria");
    estatisticas = document.getElementById("estatisticas");
    home = document.getElementById("home");
    home_botao = document.getElementById("home_botao");
    registar_botao = document.getElementById("registar_botao");
    galeria_botao = document.getElementById("galeria_botao");
    estatisticas_botao = document.getElementById("estatisticas_botao");

    home.style.display = "block";
    registo.style.display = "none";
    galeria.style.display = "none";
    estatisticas.style.display = "none";
    home_botao.className = "active";
    registar_botao.className = "";
    galeria_botao.className = "";
    estatisticas_botao.className = "";
        
}


function showRegisto()
{    
    galeria.style.display = "none";
    estatisticas.style.display = "none";
    home.style.display = "none";
    registo.style.display = "block";
    home_botao.className = "";
    registar_botao.className = "active";
    galeria_botao.className = "";
    estatisticas_botao.className = "";
}


function showGaleria()
{
    if(document.getElementById("imagens").childElementCount < 1)
    {
        loadImages();
    }
    registo.style.display = "none";
    estatisticas.style.display = "none";
    home.style.display = "none";
    galeria.style.display = "block";
    home_botao.className = "";
    registar_botao.className = "";
    galeria_botao.className = "active";
    estatisticas_botao.className = "";
}


function showEstatisticas()
{
    estatisticas.style.display = "block";
    registo.style.display = "none";
    galeria.style.display = "none";
    home.style.display = "none";
    home_botao.className = "";
    registar_botao.className = "";
    galeria_botao.className = "";
    estatisticas_botao.className = "active";
}
