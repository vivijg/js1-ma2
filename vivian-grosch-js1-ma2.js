//task 1
const myFunctionExpression = function() {
    console.log("Vivian Grosch");
};
myFunctionExpression()


//Task 2
function clickMe() {
    console.log("I was clicked");
}
clickMe()


//task 3

const textInput = document.querySelector("input")

function anyKeyPressed() {
    console.log("First Name");
};


textInput.addEventListener("keydown", anyKeyPressed)

//Task 4

const button = document.querySelector(".btn");


function hoverButton() {
    console.log("Hover");
};

button.addEventListener("mouseover", hoverButton);

//task 5

const button2 = document.querySelector("[data-animal=dog]");

function dogAnimal(event) {
    event.target.classList.remove("hover");
}

button2.addEventListener("mouseout", dogAnimal);


//task 6

const listObjects = document.querySelectorAll("li");

for(let i = 0; i < listObjects.length; i++) {
    listObjects[i].addEventListener("mouseover", handleActiveClass);
}

function handleActiveClass(event) {
    console.log(event.target.dataset.animal);
}




//tast 7

const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}


//task 8

const sheep = ["Malcolm", "Anders", "Marie"];


sheep.forEach(function(sheep) {
    console.log(sheep);
});

function handleEachSheep(item) {
    console.log(item);
}




//task 9

function logWord() {
   
    console.log(("Hello"));

    if(counter === 5) {
        clearInterval(intervalId);
    }

    counter++;
}

let counter = 0;

const intervalId = setInterval(logWord, 1000);




//task 10

const counterContainer = document.querySelector(".container");

function updateDiv() {
    counterContainer.innerHTML = "text update";
    
  
    if(startToEnd === 4) {
        clearInterval(intervalId);
    }

    startToEnd++;
}

let startToEnd = 1;

const intervalclass = setInterval(updateDiv, 2000);

