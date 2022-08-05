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
            let usernameInfo = {type: "username-info", hollerName: myHollerUsername, screenName: currentScreenUsername}
            let userList = []  
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
                    usernameInfo = {type: "username-info", hollerName: myHollerUsername, screenName: currentScreenUsername}
                    console.log ("username info: " + JSON.stringify (usernameInfo))
                    updateUsername()
                    // addUserToUserList (usernameInfo)
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
            holler.onClientEvent((stringFromOtherClient)=>{
                
                console.log ("raw: "+stringFromOtherClient)

                const parsedDataFromOtherClient = JSON.parse(stringFromOtherClient)
               
                if (parsedDataFromOtherClient.type == "username-info") {
                    console.log ("parsed: ", parsedDataFromOtherClient)
                   if (undefined === listContainsUser(userList, parsedDataFromOtherClient)){
                        userList.push(parsedDataFromOtherClient)  
                        console.log ("user list: ", userList)  
                        respondToUserListUpdate()
                    } 
                }
                
            })

            function listContainsUser(list, user) {
                return list.find((user)=>{return user.hollerName === user.hollerName && user.screenName ===user.screenName})
            }
            function updateUsername (){
                holler.appInstance.notifyClients(JSON.stringify(usernameInfo))
                setTimeout (updateUsername, 1000)
            }
            
            function respondToUserListUpdate(){
                let lobbyUserList = document.querySelector (".lobby-user-list")
                lobbyUserList.textContent = "player list: " + userList.map((userList)=>{return userList.screenName})

                //TODO:  make pairings & start matches, etc
            }
        
            // if (screen === multiPlayerScreen != titleScreen, lobbyScreen) {
            //     loadBong()
            // }
    }
    
})

