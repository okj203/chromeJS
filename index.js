// # 2.2
// console.log("Hello World! I'm JS.");
// alert("Hello World!");
// console.log(document)
// document

// const title = document.getElementById("title"); // works
const title = document.querySelector("#title"); // works
// const title = document.querySelector(".title"); // does NOT work; returns null, because there is no class called "title"

// document is just another object in JS with lots of methods,
// but it also refers to the HTML document in our project

// console.log(title);

// console.log(document);
// gives us the whole HTML page
// DOM: Document Object Model
// The way a document content is accessed and modified
// JS takes all the elements in the html file and turn them into an obj
// everything in your html file will be an obj. 
// obj has many keys, just like how console has .log, .error, .name, etc.

title.innerHTML = "Hello JavaScript!";
// for example, .innerHTML method reasigns the inner text content of title variable
// such methods allows us to manipulate JS DOM.

// # 2.3

// console.dir(title);
// gives us all the keys/methods that we have access to manipulate title variable(element);
// console.dir(document);
// title.style.color = "rgb(31, 64, 173)";
document.title = 'js dom prac'; // changes the title element's content, which is displayed in the tab;
// .title here is not the variable, but it's the title element

// # 2.4
// JS is made to not only control the html elements, 
// but also to react to and handle events, such as click, resize, submit input change, print, etc.

// addEventListener
// target.addEventListener(type, listener);

// ex)
// function handleResize(){
// console.log("I have been resized")}

// resize
// window.addEventListener("resize", handleResize);

// function handleResize(event){ // <- "event" argument is useful when we create a form or when we click a link
//     // console.log("I have been resized");
//     console.log(event);
// }

// window.addEventListener("resize", handleResize);


// #2.6
// title.addEventListener("click", handleClick);

// const age = prompt("How old are you?");
// // console.log(age);
// if (age >= 18 && age < 21) {
//     console.log("You can drink but you cannot drive.");
// } else if (age >= 21) {
//     console.log("Go ahead!");
// } else {
//     console.log("Nope!");
// }

// const BASE_COLOR = "rgb(52, 73, 94)";  // "#34495e" --> This form of color code (hex) does not work. Must write in "rgb(0, 0, 0)"
// const OTHER_COLOR = "rgb(127, 140, 141)"; // flatuicolors.com     #7f8c8d

// function handleClick(){
//     // console.log(title.style.color);
//     const currentColor = title.style.color;

//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     // title.addEventListener("click", handleClick);
//     title.addEventListener("mouseenter", handleClick);
//     // cf. event reference on MDN for more events
// }

// init();

// function handleOffline(){
//     console.log("You are offline.")
// }

// function handleOnline(){
//     console.log("Welcome back :D")
// }

// window.addEventListener("offline", handleOffline);
// // prints out "You are offline" once you turn off wifi.

// window.addEventListener("online", handleOnline);
// // if your wifi gets re-connected after it's been disconnected, "Welcome back" is printed.

// # 2.7

const CLICKED_CLASS = "clicked";

// solution 1:
// function handleClick(){
//     // const currentClass = title.className;
//     // console.log(currentClass);
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     // if(currentClass !== CLICKED_CLASS)
//     if (!hasClass) {
//         title.classList.add(CLICKED_CLASS);
//     } else {
//         title.classList.remove(CLICKED_CLASS);
//     }
// }

// solution 2:
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    // toggle checks if the item is there or not and add and remove the item accordingly;
}

function init(){
    title.addEventListener("click", handleClick);
}
init();