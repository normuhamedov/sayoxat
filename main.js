let elForm = document.querySelector(".vaqt__form")
let elInput = document.querySelector(".vaqt__input")
let elWalk = document.querySelector(".vaqt__items-walk")
let elBike = document.querySelector(".vaqt__items-bike")
let elCar = document.querySelector(".vaqt__items-car")
let elPlane = document.querySelector(".vaqt__items-plane")

elForm.addEventListener("submit", function (evt){
    evt.preventDefault()

    let wSpeed = 3.6;  
    elWalk.textContent = Math.round(elInput.value / wSpeed) + "hours";

    let bSpeed = 20.1;
    elBike.textContent = Math.round(elInput.value / bSpeed) + "hours";


    let cSpeed = 70;
    elCar.textContent = Math.round(elInput.value / cSpeed) + "hours";


    let pSpeed = 800;
    elPlane.textContent = Math.round(elInput.value / pSpeed) + "hours";
});
 