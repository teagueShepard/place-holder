console.log("Hello world")

//username-related variables

    let usernameInput = document.querySelector(".usernameInput")
    const usernameButton = document.querySelector(".usernameButton")
    let usernameOutput = document.querySelector(".usernameOutput")
    let screenUsername = document.querySelector(".screenUsername")
   
    

//set username function     

        

        usernameButton.onclick = function (){
            let currentUsername =  usernameInput.value
            if (currentUsername.length > 0) {


                usernameOutput.textContent = "welcome:" + currentUsername

                setTimeout(() => {
                singlePlayerButton.style["display"] = "block"
                multiPlayerButton.style["display"] = "block"
                }, 1000);

                screenUsername.textContent = "P1:" + currentUsername

            } else {
                singlePlayerButton.style["display"] = "none"
                multiPlayerButton.style["display"] = "none"
            }
        }

            //setTimeout syntax  ---->  setTimeout(function() {
            //   stuff to do after time of 200ms has elapsed
            // }, 200)

//change username
       usernameInput.onkeydown = function(){
        usernameOutput.textContent = "" 
        singlePlayerButton.style["display"] = "none"
        multiPlayerButton.style["display"] = "none"
       };

  

    

//screen changer
 
    //screens
const titleScreen = document.querySelector(".titleScreen")
const singlePlayerScreen = document.querySelector(".singlePlayerScreen")
const multiPlayerScreen = document.querySelector(".multiPlayerScreen")

    //screen changing buttons
const singlePlayerButton = document.querySelector(".singlePlayerButton")
const multiPlayerButton = document.querySelector(".multiPlayerButton")
const titleScreenButton = document.querySelector(".titleScreenButton")


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
titleScreenButton.onclick = ()=>showScreen(titleScreen)

if (screen === singlePlayerScreen) {
    console.log("single player screen")
    screen.style["display"] = "block"
    titleScreenButton.style["display"] = "block"
//  loadBong()
}else if(screen === multiPlayerScreen) {
    console.log("multi player screen")
    titleScreenButton.style["display"] = "block"
    
}else{
    titleScreenButton.style["display"] = "none"
}

//Game Code
// function loadBong(){
// let paddleOfPlayer = document.querySelector('.paddleOne')

// }