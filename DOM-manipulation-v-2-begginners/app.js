/* const text = document.querySelector('h1') */
/* const text = document.querySelector(".title")
const changeColor = document.querySelector(".changeColor") */

/* text.style.color = "red"
text.style.backgroundColor = "green" */

/* text.classList.add("change") */
/* text.classList.remove("change") */

/* changeColor.addEventListener('click', function(){
  text.classList.add()
})
changeColor.addEventListener('click', function(){
  text.classList.toggle()
}) */
//callback function

/* const userList = document.querySelectorAll(".name-list li") */
const userList = document.querySelector(".name-list") 
const listInput = document.querySelector(".list-input")
const addListBtn = document.querySelector(".addListBtn")

/* console.log(userList) */
for(user of userList){
  user.addEventListener("click", function() {
    /* console.log(this); */
    this.style.color = "red";
  })
}

addListBtn.addEventListener('click', function(){
  // create an lie out of thin air
  const newli = document.createElement('li')
  const liContent = document.createTextNode(listInput.value)
  console.log(listInput.value)
  // add the input value inside that new li
  newli.appendChild(liContent)
  // attaching the li to the user list
  userList.appendChild(newLi)
})

