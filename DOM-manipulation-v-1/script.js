// const body = document.body
// const div = document.createElement('div')
// div.innerText = "Hello World"
// div.textContent = "Hello World 2"

// body.append(div)

// const strong = document.createElement("strong")
// strong.innerText = "Hello Wolrd 2"
// div.append(strong)
// //div.innerHTML = "<strong>Hello world2!<strong>"

// body.append(div)

// const div = document.querySelector("div")
// console.log(div.textContent)  // displays the text with all the extra spaces and invisible elements
// console.log(div.innerText)   // displays the text like html would



const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// spanBye.remove() -> completly gone
// div.append(spanBye) -> add it back

//1. div.removeChild(spanHi) 
//2. spanHi.remove() 
// 1 and 2 does the same things,removes the element


console.log(spanHi.id ) // prints hi
console.log(spanHi.title ) // prints hello

console.log(spanHi.setAttribute("title", "sdfsdfsdf")) // it's really explicit

spanHi.id = "sdfsdfsdf"

spanHi.removeAttribute("id")

console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)

spanHi.dataset.newName = "hi"

/* spanHi.classList.remove("hi1") */
spanHi.classList.toggle("hi3") 
//spanHi.classList.toggle("hi3",true)
 // it removes it if it already exists, or is adding it if it doesn't exist, we can pass a boolean, false or true for doing adding or removing. 


/* spanHi.style.color = "red" */
spanHi.style.backgroundColor = "red" 