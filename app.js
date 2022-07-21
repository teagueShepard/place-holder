console.log("Hello world")

//declaring variables

    let usernameInput = document.querySelector(".usernameInput")
    const usernameButton = document.querySelector(".usernameButton")
    let usernameOutput = document.querySelector(".usernameOutput")
    

//set username function     

        usernameButton.onclick = function (){
            let message =  usernameInput.value
            if(message.length > 0){
                
                usernameOutput.textContent = "welcome:" + message
            }
        }

//change username
       usernameInput.onkeydown = function(){
        usernameOutput.textContent = "" 
       };

       

    

//screen changer
 
    //screens
const titleScreen = document.querySelector(".titleScreen")
const singlePlayerScreen = document.querySelector(".singlePlayerScreen")
const multiPlayerScreen = document.querySelector(".multiPlayerScreen")

    //screen changing buttons
const singlePlayerButton = document.querySelector(".singlePlayerButton")
const multiPlayerButton = document.querySelector(".multiPlayerButton")

    //screen changing logic

const allScreens = [titleScreen, singlePlayerScreen, multiPlayerScreen]

const showScreen = (screenToShow)=>{
    allScreens.forEach(screen=>{
        if(screen === screenToShow){
            screen.style["display"] = "block"
        }else{
            screen.style["display"] = "none"
        }
    })
}


singlePlayerButton.onclick = ()=>showScreen(singlePlayerScreen)
multiPlayerButton.onclick = ()=>showScreen(multiPlayerScreen)

        