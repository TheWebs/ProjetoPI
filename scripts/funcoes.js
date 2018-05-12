function loadImages()
{
    var element = document.getElementById("imagens");
    for(var a = 1; a <=9; a++)
    {
        element.insertAdjacentHTML("beforeend", "<img class='showcase' src='/images/" + a.toString() + ".jpg' width=480 height=270/>");
    }
}