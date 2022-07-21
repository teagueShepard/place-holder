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

       

    const singlePlayerButton = document.querySelector(".singlePlayerButton")
    const multiPlayerButton = document.querySelector(".multiPlayerButton")

//screen changer

        singlePlayerButton.onclick = function (){
            const screen1 = document.querySelector(".screen1")
                screen1.style["display"] = "none"        
            const screen2 = document.querySelector(".screen2")
                screen2.style["display"] = "block"
        }