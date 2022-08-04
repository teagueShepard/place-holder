holler.onLoad(()=>{
//console.log("Hello world")


// holler/user info
let myHollerUsername = ""
let currentScreenUsername = ""
let usernameInfo = {hollerName: myHollerUsername, screenName: currentScreenUsername}

    holler.me((user)=>{
        myHollerUsername=user.name
        console.log ("my holler username is: " + user.name)
})

setTimeout (holler.appInstance.notifyClients(JSON.stringify (usernameInfo)), 100)
let allUsernames = []

holler.onClientEvent((event)=>{
   
    const parsed = JSON.parse(event)
    allUsernames.push(parsed)
    console.log ("parsed: "+ parsed)
    console.log ("raw: "+event)
    console.log (allUsernames)
})

// 
// function checkForMatchingCredentials (credentials){
// credentials == usernameInfo
// return credentials.hollerUsername
// }
// if {allUsernames.find(checkForMatchingCredentials) = false}{
//     allUsernames.push(parsed)
// }

// let stuff = [1, 3, 4]
// undefined
// stuff.filter(n=>n > 2)
// (2) [3, 4]0: 31: 4length: 2[[Prototype]]: Array(0)
// function isGreaterThan2(n){
//     return n > 2
// }
// undefined
// stuff.filter(isGreaterThan2)
// (2) [3, 4]
// function isGreaterThan2(rabbit){
//     return rabbit > 2
// }
// undefined
// stuff.filter(isGreaterThan2)
// (2) [3, 4]
// let books = [{title:"p&P", length:44}, {title:"W&P", length:40000}]
// undefined
// books.map((book)=>{return book.length})
// (2) [44, 40000]
// books.map((book)=>{return book.title})
// (2) ['p&P', 'W&P']
// books.map((book)=>{return book.title + " is " + book.length + " pages long"})
// (2) ['p&P is 44 pages long', 'W&P is 40000 pages long']
// function describeBook(book){
//     return  book.title + " is " + book.length + " pages long"
// }
// undefined
// books.map(describeBook)
// (2) ['p&P is 44 pages long', 'W&P is 40000 pages long']
// let bookDescriptions = books.map(describeBook)
// undefined
// bookDescriptions
// (2) ['p&P is 44 pages long', 'W&P is 40000 pages long']
// bookDescriptions.join(", and ")
// 'p&P is 44 pages long, and W&P is 40000 pages long'

//username-related variables

    const usernameInput = document.querySelector(".usernameInput")
    const usernameButton = document.querySelector(".usernameButton")
    let usernameOutput = document.querySelector(".usernameOutput")
    let screenUsername = document.querySelector(".screenUsername")
    

//set username function     

        usernameButton.onclick = function (){ 
            currentScreenUsername=  usernameInput.value
            usernameInfo = {hollerName: myHollerUsername, screenName: currentScreenUsername}

            holler.appInstance.notifyClients(JSON.stringify (usernameInfo))
           
            if (currentScreenUsername.length > 0) {
                currentScreenUsername=  usernameInput.value
                usernameOutput.textContent = "welcome:" + currentScreenUsername

                setTimeout(() => {
                
                lobbyButton.style["display"] = "block"
                }, 100);

                screenUsername.textContent = "P1:" + currentScreenUsername

            } else {
                P1Button.style["display"] = "none"
                P2Button.style["display"] = "none"
            }
        }

            //setTimeout syntax  ---->  setTimeout(function() {
            //   stuff to do after time of 200ms has elapsed
            // }, 200)

            
//change screen username
       usernameInput.onkeydown = function(){
        usernameOutput.textContent = "" 
        P1Button.style["display"] = "none"
        P2Button.style["display"] = "none"
        lobbyButton.style["display"] = "none"
       };
    
const userList = document.querySelector(".user-list")


//screen changer
 
    //screens
const titleScreen = document.querySelector(".titleScreen")
const multiPlayerScreen = document.querySelector(".multiPlayerScreen")
const lobbyScreen = document.querySelector(".lobbyScreen")

    //screen changing buttons
const P1Button = document.querySelector(".P1Button")
const P2Button = document.querySelector(".P2Button")
const lobbyButton = document.querySelector(".lobbyButton")
const titleScreenButton = document.querySelector(".titleScreenButton")
    //screen changing logic

const allScreens = [titleScreen, lobbyScreen, multiPlayerScreen]

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
    userList.textContent = "player list: " + allUsernames.map((allUsernames)=>{return allUsernames.screenName})
}
titleScreenButton.onclick = ()=>{ console.log (currentScreenUsername + " pressed the title screen button")
showScreen(titleScreen) 
}

if (screen === multiPlayerScreen != titleScreen, lobbyScreen) {
    loadBong()
}

    
//Game Code
function loadBong(){
 
        const gameBoard = document.querySelector("#gameBoard");
        const ctx = gameBoard.getContext("2d");
        const scoreText = document.querySelector("#scoreText");
        const startButton = document.querySelector("#startButton");
        const resetBtn = document.querySelector("#resetBtn");
        const gameWidth = gameBoard.width;
        const gameHeight = gameBoard.height;
        const boardBackground = "white";
        const paddle1Color = "white";
        const paddle2Color = "white";
        const paddleBorder = "black";
        const ballColor = "white";
        const ballBorderColor = "black";
        const ballRadius = 12.5;
        const paddleSpeed = 50;
        let intervalID;
        let ballSpeed;
        let ballX = gameWidth / 2;
        let ballY = gameHeight / 2;
        let ballXDirection = 0;
        let ballYDirection = 0;
        let player1Score = 0;
        let player2Score = 0;
        let paddle1 = {
            width: 25,
            height: 100,
            x: 0,
            y: 0
        };
        let paddle2 = {
            width: 25,
            height: 100,
            x: gameWidth - 25,
            y: gameHeight - 100
        };
        
        window.addEventListener("keydown", changeDirection);
        startButton.onclick = ()=>{resetGame()} 
        resetBtn.onclick = ()=>{resetGame()} 
        
        

        function gameStart(){
            createBall();
            nextTick();
        };
        function nextTick(){
            intervalID = setTimeout(() => {
                clearBoard();
                drawPaddles();
                moveBall();
                drawBall(ballX, ballY);
                checkCollision();
                nextTick();
            }, 10)
        };
        function clearBoard(){
            ctx.fillStyle = boardBackground;
            ctx.fillRect(0, 0, gameWidth, gameHeight);
        };
        function drawPaddles(){
            ctx.strokeStyle = paddleBorder;
        
            ctx.fillStyle = paddle1Color;
            ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
            ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        
            ctx.fillStyle = paddle2Color;
            ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
            ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        };
        function createBall(){
            ballSpeed = 2;
            if(Math.round(Math.random()) == 1){
                ballXDirection =  1; 
            }
            else{
                ballXDirection = -1; 
            }
            if(Math.round(Math.random()) == 1){
                ballYDirection = Math.random() * 1; //more random directions
            }
            else{
                ballYDirection = Math.random() * -1; //more random directions
            }
            ballX = gameWidth / 2;
            ballY = gameHeight / 2;
            drawBall(ballX, ballY);
        };
        function moveBall(){
            ballX += (ballSpeed * ballXDirection);
            ballY += (ballSpeed * ballYDirection);
        };
        function drawBall(ballX, ballY){
            ctx.fillStyle = ballColor;
            ctx.strokeStyle = ballBorderColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        };
        function checkCollision(){
            if(ballY <= 0 + ballRadius){
                ballYDirection *= -1;
            }
            if(ballY >= gameHeight - ballRadius){
                ballYDirection *= -1;
            }
            if(ballX <= 0){
                player2Score+=1;
                updateScore();
                createBall();
                return;
            }
            if(ballX >= gameWidth){
                player1Score+=1;
                updateScore();
                createBall();
                return;
            }
            if(player1Score >= 3 || player2Score >= 3){
                resetGame() //reset game if score exceeds 5
            }

            if(ballX <= (paddle1.x + paddle1.width + ballRadius)){
                if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
                    ballX = (paddle1.x + paddle1.width) + ballRadius; // if ball gets stuck
                    ballXDirection *= -1;
                    ballSpeed += 1;
                }
            }
            if(ballX >= (paddle2.x - ballRadius)){
                if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
                    ballX = paddle2.x - ballRadius; // if ball gets stuck
                    ballXDirection *= -1;
                    ballSpeed += 1;
                }
            }
        };
        function changeDirection(event){
            const keyPressed = event.keyCode;
            const paddle1Up = 87;
            const paddle1Down = 83;
            const paddle2Up = 38;
            const paddle2Down = 40;
        
            switch(keyPressed){
                case(paddle1Up):
                    if(paddle1.y > 0){
                        paddle1.y -= paddleSpeed;
                    }
                    break;
                case(paddle1Down):
                    if(paddle1.y < gameHeight - paddle1.height){
                        paddle1.y += paddleSpeed;
                    }
                    break;
                case(paddle2Up):
                    if(paddle2.y > 0){
                        paddle2.y -= paddleSpeed;
                    }
                    break;
                case(paddle2Down):
                    if(paddle2.y < gameHeight - paddle2.height){
                        paddle2.y += paddleSpeed;
                    }
                    break;
            }
        };
        function updateScore(){
            scoreText.textContent = `${player1Score} : ${player2Score}`;
        };
        function resetGame(){
            player1Score = 0;
            player2Score = 0;
            paddle1 = {
                width: 25,
                height: 100,
                x: 0,
                y: 0
            };
            paddle2 = {
                width: 25,
                height: 100,
                x: gameWidth - 25,
                y: gameHeight - 100
            };
            ballSpeed = 1;
            ballX = 0;
            ballY = 0;
            ballXDirection = 0;
            ballYDirection = 0;
            updateScore();
            clearInterval(intervalID);
            gameStart();
        };
    }
})
