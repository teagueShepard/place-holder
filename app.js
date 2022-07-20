console.log("Hello world")

//declaring variables

    let usernameInput = document.querySelector(".usernameInput")
    let usernameButton = document.querySelector(".usernameButton")
    let usernameOutput = document.querySelector(".usernameOutput")
    

//set username function     

        usernameButton.onclick = function (){
            usernameOutput.textContent = "welcome:" + usernameInput.value
        }

//change username
       usernameInput.onchange = function(){myScript};

       

    // let singlePlayerButton = document.querySelector(".singlePlayerButton")
    // let multiPlayerButton = document.querySelector(".multiPlayerButton")

    //     onclick
