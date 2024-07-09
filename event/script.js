var popupover = document.querySelector(".popup-over")
var popupbox = document.querySelector(".popup-box")
var addpopup = document.getElementById("add-popup")

addpopup.addEventListener("click",function(){
    popupover.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton = document.getElementById("cancel")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    popupover.style.display="none"
    popupbox.style.display="none"
})

var con = document.querySelector(".container")
var book = document.getElementById("add-book")
var eventtitle = document.getElementById("event-title")
var eventtime = document.getElementById("event-time")
var eventdes = document.getElementById("event-des")

book.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${eventtitle.value}</h2>
    <h5>${eventtime.value}</h5>
    <p>${eventdes.value}<p>
    <button onclick="deleteevent(event)">delete</button>`
    con.append(div)
    popupover.style.display="none"
    popupbox.style.display="none"
})

function deleteevent(event)
{
    event.target.parentElement.remove()
}