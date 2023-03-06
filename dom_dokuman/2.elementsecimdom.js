////ELEMENT SEÇİLMESİ

/////______Tek element seçimi______//////

////// document.gelElementById() metodu

// let veri;

// veri = document.getElementById("header");
// veri = document.getElementById("header").id;
// veri = document.getElementById("header").className;
// //--Tek halde de çağrılabilir
// veri = document.getElementById("header");
// // veri = veri.id;

// veri.style.color = "blue";
// veri.style.fontSize = "50px";
// veri.style.fontWeight = "bold";
// // veri.style.display = "none";

// document.getElementById("header").innerText = "Yapılacaklar"
// document.getElementById("header").innerText = " <b> To Do List </b>"
// document.getElementById("header").innerHTML = "<b> To Do List </b>"


// console.log(veri);

//document.querySelector() metodu

//console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));

// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "purple";
// document.querySelector("li:nth-child(3)").style.color = "yellow";


document.querySelector("li").className = "list-group-item list-group-item-danger";

document.querySelector("li").classList.add("active");