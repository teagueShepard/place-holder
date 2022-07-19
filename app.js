console.log("Hello world")

let introField = document.querySelector(".intro-field")
let button = document.querySelector("button")

button.onclick = function(){
    let intro = introField.value
    let message = "the solution to all your probems is " + intro
    console.log(message)
    document.write(message)
}