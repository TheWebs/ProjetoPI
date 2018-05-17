'use strict';

var timer = 0;
var id = 0;

function loadImages()
{
    var element = document.getElementById("imagens");
    for(var a = 1; a <=9; a++)
    {
        element.insertAdjacentHTML("beforeend", "<img class='showcase' src='images/" + a.toString() + ".jpg' width=480 height=270/>");
    }
    showHome();
}

function showHome()
{
    var registo = document.getElementById("registo");
    var galeria = document.getElementById("galeria");
    var estatisticas = document.getElementById("estatisticas");
    var home = document.getElementById("home");

    home.style.display = "initial";
    registo.style.display = "none";
    galeria.style.display = "none";
    estatisticas.style.display = "none";
    
}

function showRegisto()
{
    var registo = document.getElementById("registo");
    var galeria = document.getElementById("galeria");
    var estatisticas = document.getElementById("estatisticas");
    var home = document.getElementById("home");

    
    galeria.style.display = "none";
    estatisticas.style.display = "none";
    home.style.display = "none";
    registo.style.display = "initial";
}


function showGaleria()
{
    if(document.getElementById("imagens").childElementCount < 1)
    {
        loadImages();
    }
    
    var registo = document.getElementById("registo");
    var galeria = document.getElementById("galeria");
    var estatisticas = document.getElementById("estatisticas");
    var home = document.getElementById("home");
    zeroOpacity(galeria);

    registo.style.display = "none";
    estatisticas.style.display = "none";
    home.style.display = "none";
    galeria.style.display = "initial";
    makeAppear();
}

function makeAppear(){
    if(id != 0)
    return ;
    id = setInterval(function() { changeOpacity(); }, 100);
}



function changeOpacity(){
    if(timer >= 1){
    clearInterval(id);
    timer = 0;
    id = 0;
    return;
    }
    var elem = document.getElementById("galeria");
    timer += 0.25;
    elem.style.opacity = timer;
    elem.childNodes.forEach(element => {
        if(element){
        if(element.nodeName != "#text"){
            console.log(element.nodeName);
        element.style.opacity = timer;
        }
        }
    });
}

function zeroOpacity(elem)
{
    elem.childNodes.forEach(element => {
        if(element){
        if(element.nodeName != "#text"){
             element.style.opacity = "0";
        }
        }
    });
}


function showEstatisticas()
{
    var registo = document.getElementById("registo");
    var galeria = document.getElementById("galeria");
    var estatisticas = document.getElementById("estatisticas");
    var home = document.getElementById("home");

    estatisticas.style.display = "initial";
    registo.style.display = "none";
    galeria.style.display = "none";
    home.style.display = "none";
}
