document.query

document.getElementById("#h1").style.textAlign = "center"; 
document.getElementsByTagName("li")[0].style.color = "blue"; 
document.querySelector("#undordered").style.color = "blue"; 
document.querySelectorAll(".list")[2].style.fontSize = "2rem"; // For specific items in the list you should use [0], [1], etc.
document.getElementsByClassName("list")[1].style.backgroundColor = "yellow";
document.querySelector("h1").innerHTML = "<em>Good Bye</em>"; // This is how you change the text of an element

document.querySelector("button").classList.add("invisible"); // This is how you add a class to an element
document.querySelector("button").classList.remove("invisible"); // This is how you remove a class from an element
document.querySelector("button").classList.toggle("invisible"); // This is how you toggle a class on and off an element like an on/off switch

document.querySelector("h1").classList.add("huge"); // This is how you add a class to an element

document.querySelector("a").getAttribute("href"); // This is how you get the attribute of an element
document.querySelector("a").setAttribute("href", "https://www.bing.com"); // This is how you change the attribute of an element