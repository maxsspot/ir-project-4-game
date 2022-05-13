{
    // Variables
    const menu = document.getElementById ("menu").style;
    const teams = document.getElementById ("teams").style;
    const bb = document.getElementById ("begin").style;
    const begin_s = document.getElementById ("begin_s").style;
    const game = document.getElementById ("game").style;
    const one = document.getElementById ("1");
    const two = document.getElementById ("2");
    const oneS = document.getElementById ("oneS");
    const twoS = document.getElementById ("twoS");
    const s1 = document.getElementById ("score1");
    const s2 = document.getElementById ("score2");
    const plus = document.getElementById ("plus").style;
    const minus = document.getElementById ("minus").style;
    const q1 = document.getElementById ("q1").style;
    const q2 = document.getElementById ("q2").style;
    const q3 = document.getElementById ("q3").style;
    const q4 = document.getElementById ("q4").style;
    const q5 = document.getElementById ("q5").style;
    const q6 = document.getElementById ("q6").style;
    const q7 = document.getElementById ("q7").style;
    const q8 = document.getElementById ("q8").style;
    const end = document.getElementById ("win").style;
    const teller = document.getElementById ("teller");
    var teamshow = document.getElementById ("turn");
    var teamchooser = 0;
    var team1score = 0;
    var team2score = 0;
    var newn = 1;
    var audio = new Audio ("https://www.dropbox.com/s/c6tyk1ojbbyt9o8/mixkit-falling-on-undergrowth-390.wav?raw=1");
    audio.volume = 0.015;

    // Go to chose teams name
    function start () {
        menu.display = "none";
        teams.display = "block";
        one.focus();
        //audio.play();
    }

    // Goes from first input to second
    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            two.focus();
        }
    });

    // Starts the game
    function begin () {
        begin_s.opacity = "1.0";
        setTimeout(function(){ teams.display = "none";game.display="block"; }, 1000);
        setTimeout(function(){ begin_s.opacity = "0.0"; }, 1000);
        teamshow.innerHTML = one.value;
        oneS.innerHTML = one.value;
        twoS.innerHTML = two.value;
        //audio.play();
    }

    // Correct answer
    function eea () {
        if (teamchooser == 0) {
            team1score++;
            teamchooser++;
            plus.opacity = "1.0";
            newone();
            //audio.play();
            setTimeout(function(){ plus.opacity = "0.0"; }, 1000);
        } else if (teamchooser == 1) {
            team2score++;
            teamshow.innerHTML = two.value;
            teamchooser--;
            newone();
            //audio.play();
            plus.opacity = "1.0";
            setTimeout(function(){ plus.opacity = "0.0"; }, 1000);
        }
    }

    // Does many things
    setInterval(function(){ 
        if (teamchooser == 0) {
            teamshow.innerHTML = one.value;
        } else {
            teamshow.innerHTML = two.value;
        }

        if (one.value.length > 0 && two.value.length > 0) {
            bb.opacity = "1.0";
            bb.pointerEvents = "auto";
        } else {
            bb.opacity = "0.0";
            bb.pointerEvents = "none";
        }
    }, 1);   

    // Incorrect answer
    function eeab () {
        if (teamchooser == 0) {
            minus.opacity = "1.0";
            setTimeout(function(){ minus.opacity = "0.0"; }, 1000);
            teamchooser++;
            team2score--;
            //audio.play();
            newone();
        } else if (teamchooser == 1) {
            minus.opacity = "1.0";
            setTimeout(function(){ minus.opacity = "0.0"; }, 1000);
            teamchooser--;
            team2score--;
            //audio.play();
            newone();
        }
    }
    
    //Generates new question
    function newone () {
        //var newn = Math.floor((Math.random() * 3) + 1);
        newn++;
        if (newn == 1) {
            q1.display = "block";
            q2.display = "none";
            q3.display = "none";
            q4.display = "none";
            q5.display = "none";
            q6.display = "none";
            q7.display = "none";
            q8.display = "none";
        } else if (newn == 2) {
            q1.display = "none";
            q2.display = "block";
            q3.display = "none";
            q4.display = "none";
            q5.display = "none";
            q6.display = "none";
            q7.display = "none";
            q8.display = "none";
        } else if (newn == 3) {
            q1.display = "none";
            q2.display = "none";
            q3.display = "block";
            q4.display = "none";
            q5.display = "none";
            q6.display = "none";
            q7.display = "none";
            q8.display = "none";
        } else if (newn == 4) {
            q1.display = "none";
            q2.display = "none";
            q3.display = "none";
            q4.display = "block";
            q5.display = "none";
            q6.display = "none";
            q7.display = "none";
            q8.display = "none";
        } else if (newn == 5) {
            q1.display = "none";
            q2.display = "none";
            q3.display = "none";
            q4.display = "none";
            q5.display = "block";
            q6.display = "none";
            q7.display = "none";
            q8.display = "none";
        } else if (newn == 6) {
            q1.display = "none";
            q2.display = "none";
            q3.display = "none";
            q4.display = "none";
            q5.display = "none";
            q6.display = "block";
            q7.display = "none";
            q8.display = "none";
        } else if (newn == 7) {
            q1.display = "none";
            q2.display = "none";
            q3.display = "none";
            q4.display = "none";
            q5.display = "none";
            q6.display = "none";
            q7.display = "block";
            q8.display = "none";
        } else if (newn == 8) {
            q1.display = "none";
            q2.display = "none";
            q3.display = "none";
            q4.display = "none";
            q5.display = "none";
            q6.display = "none";
            q7.display = "none";
            q8.display = "block";
        } else {
            newn = 1;
        }
    }

    // Ends the game 
    function endgame () {
        end.opacity = "1.0";
        s1.innerHTML = team1score;
        s2.innerHTML = team2score;
        if (team1score > team2score) {
            teller.innerHTML = ">";
        } else if (team1score < team2score) {
            teller.innerHTML = "<"
        } else {
            teller.innerHTML = "=";
        }
    }
}
