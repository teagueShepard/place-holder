holler.onLoad(()=>{
//console.log("Hello world")


// holler/user info
let myHollerUsername = ""
let currentScreenUsername = ""
let usernameInfo = {hollerName: myHollerUsername, screenName: currentScreenUsername}

    holler.me((user)=>{
        myHollerUsername=user.name
        console.log ("my holler username is: " + user.name)
       setTimeout (showScreen(titleScreen), 100) 

})

let allUsernames = []

holler.onClientEvent((stringFromOtherClient)=>{
   
    console.log ("raw: "+stringFromOtherClient)

    const parsedDataFromOtherClient = JSON.parse(stringFromOtherClient)

//If parsedDataFromClient === usernameInfo then allUsernames.push(parsedDataFromOtherClient) else if parsedDataFromClient is a pairing then call prepareMatch
    if(parsedDataFromOtherClient.type === "user-list-update"){
        
    allUsernames = parsedDataFromOtherClient.userList
    // allUsernames.push(parsedDataFromOtherClient)
    console.log ("parsed: ", parsedDataFromOtherClient)
    console.log ("allUsernames", allUsernames)  
    console.log ("the matched pair is: ", parsedDataFromOtherClient)
    respondToUserListUpdate()
    }
})

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
    holler.appInstance.notifyClients(JSON.stringify(userListUpdate))
}
    
const userList = document.querySelector(".user-list")
//screen changing buttons
    const P1Button = document.querySelector(".P1Button")
    const P2Button = document.querySelector(".P2Button")
    const lobbyButton = document.querySelector(".lobbyButton")
    const titleScreenButton = document.querySelector(".titleScreenButton")

//username-related variables

    const usernameInput = document.querySelector(".usernameInput")
    const usernameButton = document.querySelector(".usernameButton")
    let usernameOutput = document.querySelector(".usernameOutput")
    let screenUsername = document.querySelector(".screenUsername")
    


//set username    
let usernameButtonIsClicked = false
usernameButton.onclick = function (){ 
            
    if (usernameInput.value.length != 0){
        currentScreenUsername=  usernameInput.value
        usernameButtonIsClicked = true
    }

    if (usernameButtonIsClicked === true){
        console.log (usernameInput.length) 
        usernameInfo = {hollerName: myHollerUsername, screenName: currentScreenUsername}
        
        addUserToUserList (usernameInfo)
    } 
            
    if (currentScreenUsername.length > 0) {
        currentScreenUsername=  usernameInput.value
        usernameOutput.textContent = "username:" + currentScreenUsername
        usernameButton.style["display"] = "none"
        usernameInput.style["display"] = "none"
        lobbyButton.style["display"] = "block"
        screenUsername.textContent = "P1:" + currentScreenUsername
    } else {
        P1Button.style["display"] = "none"
        P2Button.style["display"] = "none"
    }
}


//screen changer
 
    //screens
const loadingScreen = document.querySelector(".loadingScreen")
const titleScreen = document.querySelector(".titleScreen")
const multiPlayerScreen = document.querySelector(".multiPlayerScreen")
const lobbyScreen = document.querySelector(".lobbyScreen")

    
    //screen changing logic

const allScreens = [loadingScreen, titleScreen, lobbyScreen, multiPlayerScreen]

const showScreen = (screenToShow)=>{
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

    //screen changing button events

P1Button.onclick = ()=>showScreen(multiPlayerScreen)
P2Button.onclick = ()=>showScreen(multiPlayerScreen)
lobbyButton.onclick = ()=>{ console.log (currentScreenUsername + " pressed the lobby screen button")
    showScreen(lobbyScreen)
    P1Button.style["display"] = "block"
    P2Button.style["display"] = "block"
   console.log (allUsernames)
   
}
titleScreenButton.onclick = ()=>{ console.log (currentScreenUsername + " pressed the title screen button")
showScreen(titleScreen) 
}

if (screen === multiPlayerScreen != titleScreen, lobbyScreen) {
    loadBong()
}})
