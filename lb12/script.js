function clickHandler()
{
    let div = document.getElementById("div1");
    div.style.background = "red";
    let lastItem = document.querySelector("ul li:last-child");
    lastItem.style.color = "blue";
}
