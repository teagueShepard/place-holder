holler.onLoad(()=>{
    //console.log("Hello world")

    let myHollerUsername = ""

    holler.me((user)=>{
        myHollerUsername=user.name 
        console.log ("my holler username is: " + myHollerUsername)
        loadGame ()
    })

    function loadGame (){
        
        //screen changer
            
            //screens
        const loadingScreen = document.querySelector(".loadingScreen")
        const titleScreen = document.querySelector(".titleScreen")
        const multiPlayerScreen = document.querySelector(".multiPlayerScreen")
        const lobbyScreen = document.querySelector(".lobbyScreen")
    
            //screen changing buttons
        const usernameButton = document.querySelector(".usernameButton")

            //screen changing button events
        usernameButton.onclick = ()=>{ 
            console.log (currentScreenUsername + " pressed the usernam button")
            showScreen(lobbyScreen)
            console.log ("showing lobby screen")
            console.log (allUsernames)
        }
            
            //screen changing logic

        const allScreens = [loadingScreen, titleScreen, lobbyScreen, multiPlayerScreen]

            function showScreen(screenToShow){
                allScreens.forEach(screen=>{
                    if(screen === screenToShow){
                        let currentScreen = screen
                        console.log ("screen is switched")
                        screen.style["display"] = "block"
                    }else{
                        screen.style["display"] = "none"
                    }
                })
            }
        showScreen(titleScreen)
          
        // setting username

            let currentScreenUsername = ""
            let usernameInfo = {id: "usernameInfo", hollerName: myHollerUsername, screenName: currentScreenUsername}
            let allUsernames = []  
        //username-related variables

            const usernameInput = document.querySelector(".usernameInput")
            let usernameOutput = document.querySelector(".usernameOutput")
            let screenUsername = document.querySelector(".screenUsername")
        //set username  

            usernameButton.onclick = function setUsername(){ 
                        
                if (usernameInput.value.length != 0){
                    currentScreenUsername=  usernameInput.value
                    console.log ("my current username is: " + currentScreenUsername)
                    console.log ("user name length: " + usernameInput.value.length) 
                    usernameInfo = {hollerName: myHollerUsername, screenName: currentScreenUsername}
                    console.log ("username info: " + JSON.stringify (usernameInfo))
                    addUserToUserList (usernameInfo)
                } 
                        
                if (currentScreenUsername.length > 0) {
                    usernameOutput.textContent = "username:" + currentScreenUsername
                    usernameButton.style["display"] = "none"
                    usernameInput.style["display"] = "none"
                    showScreen(lobbyScreen)
                    screenUsername.textContent = "P1:" + currentScreenUsername
                }
            }
        // holler/user info
            
        

            // holler.onClientEvent((stringFromOtherClient)=>{
            
            //     console.log ("raw: "+stringFromOtherClient)

            //     const parsedDataFromOtherClient = JSON.parse(stringFromOtherClient)

            // //If parsedDataFromClient === usernameInfo then allUsernames.push(parsedDataFromOtherClient) else if parsedDataFromClient is a pairing then call prepareMatch
            //     if(parsedDataFromOtherClient.type === "user-list-update"){
                    
            //         // allUsernames = parsedDataFromOtherClient.userList
            //         allUsernames.push(parsedDataFromOtherClient.userList)
            //         console.log ("parsed: ", parsedDataFromOtherClient)
            //         console.log ("allUsernames", allUsernames)  
            //         // console.log ("the matched pair is: ", parsedDataFromOtherClient)
            //         respondToUserListUpdate()
            //     }
            // })

            function respondToUserListUpdate(){

                userList.textContent = "player list: " + allUsernames.map((allUsernames)=>{return allUsernames.screenName})

                //TODO:  make pairings & start matches, etc
            }

            //update user list
            // let matchedPair = []
            function addUserToUserList (newUser){
                allUsernames.push(newUser)
                respondToUserListUpdate()
                console.log ("updated player list", allUsernames)
                // if (allUsernames.length > 1){
                //     matchedPair.push(allUsernames[0],allUsernames[1])
                //     allUsernames.splice(0,2) 
                //     console.log("about to send" + matchedPair)
                //     holler.appInstance.notifyClients(JSON.stringify(matchedPair))
                // }
                let userListUpdate = {
                    type:"user-list-update",
                    userList:allUsernames
                }
                // holler.appInstance.notifyClients(JSON.stringify(userListUpdate))
            }
                
            const userList = document.querySelector(".user-list")
          
         
        
            if (screen === multiPlayerScreen != titleScreen, lobbyScreen) {
                loadBong()
            }
    }
    
})
