
var starter = "   You have been chosen to carry out a top secret mission because your record is absolutely immaculate.  \n    Honestly we would be lucky to have you aboard. If you have any doubts or reservations, now is the time to back out.  Will you accept the mission?";

function spyGame(playGame) {

var user = prompt(playGame).toLowerCase();

    switch(user) {
        
        case 'yes':
            console.log("We thank you for your service to this country.  Noone will know your name or what you did, but here we will know that if human beings look back on this day in the distant future, it will be because you succeeded.");
            var honor = prompt("First things first, on a scale from 1 to 10, how important is the idea of honor to you?");
            var bravery = prompt("I see.  Also, on that same scale, how would you rate your bravery?");
            if (honor > 7 || bravery >7) {
                alert("Great!  You'll fit in perfect around here."); }
            else {
                alert("On second thought, I'm not sure if you're the one cut out for the job.  No hard feelings, we're just going to move in another direction.  Goodbye.");
            }
            break;
            
        case 'no':
            var reconsider = prompt("I understand your hesitation.  I would only counter that we wouldn't have asked you for your help unless it was completely necessary.  The future of our species may be at stake.  I'm afraid I can't go into more detail unless you agree to accept the mission. Are you sure you won't help?");
            var confirm = prompt("Final answer. Yes or no.");
            
            if (reconsider == 'no' && confirm == 'yes' ) {
                alert("Great!  You'll fit in perfect around here."); }
            else {
                alert("We're sorry to see you go. Goodbye.");
            }
            break;
            
        case '':
            var answer = prompt("Well? Are you going to say something?  A simple yes or no would work.");
            var lastChance = prompt("This is your last chance, would like to accept this mission?");
            if (answer == 'yes' || lastChance == 'yes') {
                alert("That's great!  You had me worried there for a second.");
            }
            else {
                alert("It seems you weren't the one we were looking for. Goodbye.");
            }
            break;
            
        default:
            spyGame("I'm sorry but I couldn't understand you.  A simple yes or no would be sufficient.");
            
    }
}

/*document.getElementById("game-button").onclick = spyGame("You have been chosen to carry out a top secret mission because your record is absolutely immaculate.  \n Honestly we would be lucky to have you aboard. If you have any doubts or reservations, now is the time to back out.  Will you accept the mission?");*/