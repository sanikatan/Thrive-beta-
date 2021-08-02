//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const card2 = document.querySelector(".card2");
const container2 = document.querySelector(".container2");

const character = document.querySelector('.image img');
const name = document.querySelector('.name');

const character2 = document.querySelector('.image2 img');
const name2 = document.querySelector('.name2');

//Moving Animation Event
container.addEventListener("mousemove", (e) =>{
    let xAxis = (window.innerWidth / 3 + e.pageX) /70;
    let yAxis = (window.innerHeight / 3 - e.pageY) /40;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container2.addEventListener("mousemove", (e) =>{
    let xAxis = (window.innerWidth / 3 + (e.pageX-3800)) /70;
    let yAxis = (window.innerHeight / 3 - e.pageY) /40;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) =>{
    card.style.transition = "none";
    //Popout

    character.style.transform = "translateZ(100px)";
    name.style.transform = "translateZ(60px)";
});
container2.addEventListener("mouseenter", (e) =>{
    card2.style.transition = "none";

    //Popout
    character2.style.transform = "translateZ(100px)";
    name2.style.transform = "translateZ(40px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    //Popback
    character.style.transform = "translateZ(0px)";
    name.style.transform = "translateZ(0px)";
});
container2.addEventListener("mouseleave", (e) => {
    card2.style.transition = "all 0.5s ease";
    card2.style.transform =`rotateY(0deg) rotateX(0deg)`;

    character2.style.transform = "translateZ(0px)";
    name2.style.transform = "translateZ(0px)";
});