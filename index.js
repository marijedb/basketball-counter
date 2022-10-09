let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let winningTitle = document.getElementById("winning-title");
let endTitle = document.getElementById("end-title");
let countDownTimer = document.getElementById("countdowntimer");
let currentScoreHome = 0;
let currentScoreGuest = 0;

function addOne(event) {
    let teamHome = event.target.classList.contains("btn-home");
    if(teamHome){
        currentScoreHome++;
        scoreHome.textContent = currentScoreHome;
        winningTeam();
    } else {
        currentScoreGuest++;
        scoreGuest.textContent = currentScoreGuest;
        winningTeam();
    }
}

function addTwo(event){
    let teamHome = event.target.classList.contains("btn-home");
    if(teamHome){
        currentScoreHome += 2;
        scoreHome.textContent = currentScoreHome;
        winningTeam();
    } else {
        currentScoreGuest += 2;
        scoreGuest.textContent = currentScoreGuest;
        winningTeam();
    }
}

function addThree(event){
    let teamHome = event.target.classList.contains("btn-home");
    if(teamHome){
        currentScoreHome += 3;
        scoreHome.textContent = currentScoreHome;
        winningTeam();
    } else {
        currentScoreGuest += 3;
        scoreGuest.textContent = currentScoreGuest;
        winningTeam();
    }
}

function winningTeam() {
    if(currentScoreHome === currentScoreGuest) {
        winningTitle.textContent = "It's a tie!"; 
    } else if ( currentScoreHome < currentScoreGuest) {
        winningTitle.textContent = "The GUEST team is winning!";
    } else {
        winningTitle.textContent = "The HOME team is winning!";
    }
}

function endGame() {
    whoWon();
    setTimeout(shiftTitle, 3000);
    
}

function shiftTitle(){
    winningTitle.style.display = "none";
    endTitle.style.display = "block";
    let timeleft = 4;
    let downloadTimer = setInterval(function () {
    timeleft--;
    countDownTimer.textContent = timeleft;
    if (timeleft <= 0)
        clearInterval(downloadTimer);
    }, 1000);
    timeleft = 4;
    countDownTimer.textContent = timeleft;
    setTimeout(gameReset, 4000);
}

function gameReset(){ 
        currentScoreHome = 0;
        currentScoreGuest = 0;
        scoreHome.textContent = currentScoreHome;
        scoreGuest.textContent = currentScoreGuest;
        winningTeam();
        winningTitle.style.display = "block";
        endTitle.style.display = "none";
}

function whoWon(){
    if( currentScoreHome < currentScoreGuest){
        winningTitle.textContent = "GUEST TEAM WON!";
    } else if(currentScoreHome > currentScoreGuest) {
        winningTitle.textContent = "HOME TEAM WON!";
    } else {
        winningTitle.textContent = "IT WAS A TIE!";
    }
}