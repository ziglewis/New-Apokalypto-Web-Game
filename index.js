

  // THANK YOU JESUS!
  
  // console.log = function() {}    .... next time just activate this code and don't border deleting all console.log like you did today.
  
  
  let playerOneScore = document.getElementById ("player-1-scores")
  
  let playerTwoScore = document.getElementById("player-2-scores")
  
  let previousPlayerOneScore = document.getElementById("previous-player-1-scores")
  
  let  previousPlayerTwoScore = document.getElementById("previous-player-2-scores")
  
  let chat = document.getElementById("winner")
  
  let roundsEl = document.getElementById("rounds")
  
  
  
      
  
  
  // Here I selected all the balls via DOM by using query selector
  
     
  let gameOne = document.querySelector(".game-1")
  let gameTwo = document.querySelector(".game-2")
  let gameThree = document.querySelector(".game-3")
  let gameFour = document.querySelector(".game-4")
  let gameFive = document.querySelector(".game-5")
  let gameSix = document.querySelector(".game-6")
  let gameSeven = document.querySelector(".game-7")
  let gameEight = document.querySelector(".game-8")
  let gameNine = document.querySelector(".game-9")
  let gameTen = document.querySelector(".game-10")
  let gameEleven = document.querySelector(".game-11")
  let gameTwelve = document.querySelector(".game-12")
  let gameThirteen = document.querySelector(".game-13")
  let gameFourteen = document.querySelector(".game-14")
  let gameFifteen = document.querySelector(".game-15")
  let playAgain = document.querySelector("#new-game")
  
  let characters = ["🤡", "🤩","🤫","🤑", "😁", "😍","👳", "🎅","👸🏾", "👮", "👴", "😋", "🤯","🕵️‍♂️", "😝", "🤨", "😘", "🤠","😲", "😎", "😇", "🤴", "🙆", "👨‍👩‍👧‍👧", "🧙‍♂️", "🧛‍♀️", "🙋‍♂️", "🤹", "🕴", "🧘", "💃", "🕺", "🧝‍♀️", "👩‍🚀", "🧔", "🧕", "👩‍🌾", "👩‍💻", "👨‍⚖️", "👩‍🔧", "👩‍🔬", "💂‍♀️"]
  
     function charactersSelector() { 
         //cs stands for character selector
         // when "a" is attached to any "cs" value, it represents indexing so I can splice out from array of "characters above.
      cs1 = characters[Math.floor(Math.random() * characters.length)]
      let cs1a = characters.indexOf(cs1)
      characters.splice(cs1a,1) 
       gameOne.textContent = cs1
       
        cs2 = characters[Math.floor(Math.random() * characters.length)]
      let cs2a = characters.indexOf(cs2)
      characters.splice(cs2a,1) 
       gameTwo.textContent = cs2
       
        cs3 = characters[Math.floor(Math.random() * characters.length)]
      let cs3a = characters.indexOf(cs3)
      characters.splice(cs3a,1) 
       gameThree.textContent = cs3
       
        cs4 = characters[Math.floor(Math.random() * characters.length)]
      let cs4a = characters.indexOf(cs4)
      characters.splice(cs4a,1) 
       gameFour.textContent = cs4
       
         cs5 = characters[Math.floor(Math.random() * characters.length)]
      let cs5a = characters.indexOf(cs5)
      characters.splice(cs5a,1) 
       gameFive.textContent = cs5
       
       
        cs6 = characters[Math.floor(Math.random() * characters.length)]
      let cs6a = characters.indexOf(cs6)
      characters.splice(cs6a,1) 
       gameSix.textContent = cs6
       
         cs7 = characters[Math.floor(Math.random() * characters.length)]
      let cs7a = characters.indexOf(cs7)
      characters.splice(cs7a,1) 
       gameSeven.textContent = cs7
       
         cs8 = characters[Math.floor(Math.random() * characters.length)]
      let cs8a = characters.indexOf(cs8)
      characters.splice(cs8a,1) 
       gameEight.textContent = cs8
       
         cs9 = characters[Math.floor(Math.random() * characters.length)]
      let cs9a = characters.indexOf(cs9)
      characters.splice(cs9a,1) 
       gameNine.textContent = cs9
       
         cs10 = characters[Math.floor(Math.random() * characters.length)]
      let cs10a = characters.indexOf(cs10)
      characters.splice(cs10a,1) 
       gameTen.textContent = cs10
       
         cs11 = characters[Math.floor(Math.random() * characters.length)]
      let cs11a = characters.indexOf(cs11)
      characters.splice(cs11a,1) 
       gameEleven.textContent = cs11
       
         cs12 = characters[Math.floor(Math.random() * characters.length)]
      let cs12a = characters.indexOf(cs12)
      characters.splice(cs12a,1) 
       gameTwelve.textContent = cs12
       
       
         cs13 = characters[Math.floor(Math.random() * characters.length)]
      let cs13a = characters.indexOf(cs13)
      characters.splice(cs13a,1) 
       gameThirteen.textContent = cs13
       
         cs14 = characters[Math.floor(Math.random() * characters.length)]
      let cs14a = characters.indexOf(cs14)
      characters.splice(cs14a,1) 
       gameFourteen.textContent = cs14
       
         cs15 = characters[Math.floor(Math.random() * characters.length)]
      let cs15a = characters.indexOf(cs15)
      characters.splice(cs11a,1) 
       gameFifteen.textContent = cs15  
      
        }
      
  
  
    // here i declared all the values I want the game to return
     
      // for ( let i =10; i < 101; i +=10 );
       
       let value = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
       
       
       // balls was declared for random selection purpose
       let balls = [gameOne, gameTwo, gameThree, gameFour, gameFive, gameSix, gameSeven, gameEight, gameNine, gameTen, gameEleven, gameTwelve, gameThirteen, gameFourteen, gameFifteen]
       
      
      playAgain.disabled = true
      // I initialized everything to zero, so at the beginning of the game, all values will be zero zero.
      
      let score1 = 0
      let score2 = 0
  
      // "g" represents the value the human player gets
      // "p" represents the value the computer will get
      // "v" is here to ensure that "p" which is the computer, displays its selected balls in a form of randomness.
      // "W" stands for counts that helps me to display words while the game is on and also declare a winner. I actually set "w" that when a ball is clicked, it counts it as one, then again, it counts it as two and so on, with that i set messages for each round.
      
      let g = 0
      let p = 0
      let v = 0
      let w = 0
      let difference = 0
      let gameOver = false
      let  LewisTurn = false
     
     
      //This is the major function that is called up whenever any game button is clicked
      // one beauty is that you never can tell the game behind any ball, until when clicked, the function is triggered and button disabled, so you cant click on same button again.
     
      function random(){
           
            g =  value[Math.floor (Math.random() * value.length)]
            if (gameOver == true) {return }
          //   p =  value[Math.floor (Math.random() * value.length)]
          //   v =  balls[Math.floor (Math.random() * balls.length)]
            w += 1
            
            
        
          // here I am removing from the array of balls, that particular ball index that the computer has displayed "p" on, this is to avoid it from being repeated during randomization.
          
           let index = balls.indexOf(v);
          // console.log(index)
           balls.splice(index, 1)
          // console.log(balls.length)
           
         // Here I want the scores to display values obtained as the game progresses
            previousPlayerOneScore.textContent += g + ", "
          //   previousPlayerTwoScore.textContent += p + ", "
          
            score1 += g
            let money = "$"
          //   score2 += p  
          //   difference = Math.abs (score1 - score2)  
            playerOneScore.textContent = money + score1
          //   playerTwoScore.textContent = money + score2 
            
                          async function test() {
          
                  LewisTurn = true
                  console.log(LewisTurn)
                   chat.textContent = "...Wait buddy, it's Lewis turn!"
              
                  await new Promise(resolve => setTimeout(resolve, 3000));
                   p =  value[Math.floor (Math.random() * value.length)]
                   v =  balls[Math.floor (Math.random() * balls.length)]
                   score2 += p 
                    v.textContent = p
                  //   v.style.color = "blue"
                    Object.assign(v.style,{fontsize:"12px", color: "red", "animation-name": "spin", 
      "animation-duration": "1s",
      "animation-timing-function": "linear"
      });
          
      
                     async function delayBoard() {
              
                  await new Promise(resolve => setTimeout(resolve, 1200));
                   previousPlayerTwoScore.textContent += p + ", "
                    playerTwoScore.textContent = money + score2 
                    v.disabled = true
                     
           
                  // }
  
                  // test();
                   difference = Math.abs (score1 - score2) 
            
            // Here i am controlling the words to display 
            
            let msgOneWin = ["Hmmm! Lets see how far you keep winning", "...and You drew the first blood", "The first shall be the last", "Seems like you mean business...", " wow! Amazing start...", "You look smarter than I thought, keep going?", " I see you got guts, six more rounds to go...", "Don't laugh! He who laughs last, laughs the best"] 
            
            let msgOneLoose = ["Hmmm! Poor first impression, but its ok...?", "Aghaaagh! You wanna chill with the big boys? then sit up..." , "Hey buddy! are your villagers with you?" , "What's my name?...ZigLewis...Hurray!!!",  "Lewis drew the first blood, never forget that...", "I remember Mama used to say don't give up now..."]
            
            let tie = [ "A tie buddy, take life easy, just loose...", "Incredible! It's a tie" , " Don't tell me we are rocking shoulders...", "You can never win this, will you prove me wrong?", "oh my! it's a fifty fifty", "We are on a tie, lets see how it ends...", "Its a tie, but the end will justify..." ]
            
            // round two quotes
            
              let msgTwoWin = ["Hmmm! Lets see how far you keep winning...", "Impressive run, I hope it's not black magic?", "looks like you are really destined to win", "You lead, but don't let it get to your head", "Wow, somehow you are ahead at round two, good lucks...", "Bravo! But how on earth did you find that ball?", "You lead but keep your cool, might be to early to celebrate..."] 
            
            let msgTwoLoose = ["Hahahaaa! Will you still continue playing?", "Oops! I think Lewis is the big boy now!" , "...for a moment! Think about your village people..." , "What's my name?...ZigLewis...again!!!",  "Lewis was wining in round two, never forget that...", "You are losing at the moment! but you can still make it...", "It's ok buddy, you still got five chances..."]
            
              // round three quotes
            
           let msgThreeWin = ["Hmmm! You are really going far in your winnings", "I am impressed, I really hope it's not black magic?", "I am getting convinced you are destined to win...", "You lead, but don't let it get to your head", "Hurray, you are ahead at round three, best of lucks...", "Bravo! lets hope you will keep finding wining balls?", "You are leading but guard against complacency", "You are ahead but it ain't over until you win...", "You might be ahead, but I think you will loose somehow...", "Smile you are ahead, but remember, it's him who laughs last..."] 
            
            let msgThreeLoose = ["Hahahaaa! is your spirit still alive?", "Don't worry, when a righteous man falls 7 times, he will rise 7 times..." , "...hmmm! Did you offend your village people?" , "What's my name?...ZigLewis...scream it!!!",  "Lewis was wining in round three, never forget that...", "Hope you have food at home, just incase?...", "Cheer up! miracles can happen any day, any time...", "Come on my buddy, you still got four chances", "Fight, I still believe in you my hero... "]
            
            
             // round Four quotes
            
           let msgFourWin = ["Hmmm! You are really going far in your winnings", "I am super impressed, stay focused to win?", "I am getting super convinced you are destined to win...", "You lead, but you still got jobs to do...", "Hurray, you are ahead at round four, best of lucks...", "Beautiful leader! I hope you keep finding magic high balls...", "You are leading but keep up the concentration...", "You lead but remember it ain't over until you win...", "You might be ahead, but I am not convinced the job is done...", "Excellent! keep leading and return home with that trophy..."] 
            
            let msgFourLoose = ["It's a pity buddy but keep your spirit alive?", "Don't worry, when a righteous man falls 7 times, he will rise 7 times..." , "...hmmm! I really hope your village people a'int following you..." , "What's my name?...ZigLewis...scream it!!!",  "Lewis was wining in round four, never forget that...", "Hope you have food at home, just incase?...", "Cheer up buddy! I believe in miracles...", "Come on my buddy, you still got three chances", "Don't give up now, I still believe in you my hero... ", "He who says he can't and he who says he can are both correct! Yes you can..."]
           
             // round Five quotes
            
           let msgFiveWin = ["Great! You are wining far way into the game...", "I am impressed, this is more than just luck or black magic...", "I am now convinced you are destined to win. Fingers crossed...", "You lead, and now its just about who want's it most...", "Credible! you are ahead at round five, I wish you luck...", "Bravo! I just wonder how you keep finding those magic balls...", "You are leading but guard against complacency", "You are ahead but it ain't over until you win...", "You might be ahead, but watch it, unveil  more carefully..", "Wonderful Leader! You are doing well", "Impressive! but strive to laugh last, so you laugh the best.."] 
            
            let msgFiveLoose = ["oohoooh! You are behind but try not to get tensed?", "Don't worry, when a righteous man falls 7 times, he will rise 7 times" , " Not so a good news! but I will leave your villagers out of this...?" , "What's my name?...ZigLewis...scream it!!!",  "Lewis was leading in round five, remember that...", "Hope you have food at home, just incase?...", "Cheer up! miracles can happen any day, any time...", "Come on my buddy, you still got two chances", "Fight, I still believe in you my hero... "]
            
              // round Six quotes
            
           let msgSixWin = ["You are leading, win again to become a champion...", "Good job! You are going into the final with the advantage...", "You are ahead! You can't afford to loose the final, good luck", "Beautiful!, you must not get scared now, it's the final...", "Awesome run! what a ride, its now or never", "Brave leader! but be sure before you pick the last ball", "You are wining! I advice you rely on your instincts now... ", "Impressive lead! but its now or never..."] 
            
            let msgSixLoose = ["oops! loose again and its game over...?", "Don't worry, when a righteous man falls 7 times, he will rise 7 times" , "Not good buddy! Can you somehow turn the table? Ask God for help!..." , "You are loosing but I think you still can win, believe buddy!!!",  "Lewis is leading, you have to be most careful now...", "Sorry man! Is  that your heart or drums? hahaaa!...", "Cheer up! miracles can happen any day, any time...", "Yes you are losing but take courage, you still got one last chance", "Fight to finish, I still believe in you warrior... ", "Not good a place to be, but can you prove yourself worthy?..."]
            
            
              // round Seven quotes
            
           let msgSevenWin = ["CONGRATULATIONS!!! YOU DID IT!!! I DECLARE YOU APOKALYPTO CHAMPION...🏆🏅💰🏁", "CONGRATULATIONS!!! YOU ARE BORN TO LEAD. I DECLARE YOU THE APOKALYPTO CHAMPION...🏆🏅💰🏁", "CONGRATULATIONS!!! YOU ARE THE MASTER.. I DECLARE YOU THE APOKALYPTO CHAMPION...🏆🏅💰🏁", "CONGRATULATIONS!!! CELEBRATIONS!!! I DECLARE YOU THE APOKALYPTO CHAMPION...🏆💰🏁", "CONGRATULATIONS!!! YOU ARE A COMRADE... I DECLARE YOU THE APOKALYPTO CHAMPION...🏆🏅💰🏁", "CONGRATULATIONS!!! YOU GOT THE GIFTED HANDS.. I DECLARE YOU THE APOKALYPTO CHAMPION...🏆🏅💰🏁"] 
            
            let msgSevenLoose = ["SORRY BUDDY! YOU REALLY FOUGHT! BUT YOU LOST! BETTER LUCK NEXT TIME! YET THIS IS FOR YOU... 🥈🏁...MUCH LOVE💕.", "SORRY HERO! YOU LOST TO LEWIS! BETTER LUCK NEXT TIME! YET THIS IS FOR YOU... 🥈🏁...MUCH LOVE💖.", "SORRY WARRIOR! YOU GAVE IT YOUR ALL! BUT NOT THIS TIME! BETTER LUCK NEXT TIME! YET THIS IS FOR YOU... 🥈🏁...MUCH LOVE💝."]
            
             let tie7 = ["CONGRATULATIONS!!! YOU AND LEWIS ARE JOINT WINNERS OF APOKALYPTO...NO VICTOR NO VANQUISH...🏅💰🏅💰🏁", "CONGRATULATIONS!!! YOU ARE BOTH WINNERS OF APOKALYPTO...HERE ARE YOUR REWARDS...🏅💰🏅💰🏁", "CONGRATULATIONS!!! WHAT A FIGHT! YOU ARE BOTH WINNERS...🏅💰🏅💰🏁" ]
            
            
            // if statement for the first round of the game
             if (w === 1 && score1 > score2) {
          message = msgOneWin[Math.floor(Math.random() * msgOneWin.length)] + "...Your turn!"
          turnsLeft = "Six balls to go..."}
           else if (w === 1 && score1 < score2) {
           message = msgOneLoose[Math.floor(Math.random() * msgOneLoose.length)] + "...Your turn!"
           turnsLeft = "Six balls to go" } 
           else if (w === 1 && score1 === score2) {
           message = tie[Math.floor(Math.random() * tie.length)] + "...Your turn!"
           turnsLeft = "Six balls to go" } 
           
           
          
            // if statement for the second round
           
            else if (w === 2 && score1 > score2) {
          message = msgTwoWin[Math.floor(Math.random() * msgTwoWin.length)] + "...Your turn!" 
          turnsLeft = "Five balls to go"}
           else if (w === 2 && score1 < score2) {
           message = msgTwoLoose[Math.floor(Math.random() * msgTwoLoose.length)] + "...Your turn!"
           turnsLeft = "Five balls to go" } 
           else if (w === 2 && score1 === score2) {
           message = tie[Math.floor(Math.random() * tie.length)] + "...Your turn!" 
           turnsLeft = "Five balls to go" } 
      
      
            // if statement for the third round of the game
           
             else if (w === 3 && score1 > score2) {
          message = msgThreeWin[Math.floor(Math.random() * msgThreeWin.length)] + "...Your turn!" 
          turnsLeft = "Four balls to go"}
           else if (w === 3 && score1< score2) {
           message = msgThreeLoose[Math.floor(Math.random() * msgThreeLoose.length)] + "...Your turn!"
           turnsLeft = "Four balls to go" } 
           else if (w === 3 && score1 === score2) {
           message = tie[Math.floor(Math.random() * tie.length)] + "...Your turn!" 
           turnsLeft = "Four balls to go" } 
      
      
      
        // if statement for the Fourth round of the game
           
             else if (w === 4 && score1 > score2 && difference <= 270) {
          message = msgFourWin[Math.floor(Math.random() * msgFourWin.length)] + "...Your turn!" 
          turnsLeft = "Three balls to go"}
           else if (w === 4 && score1 < score2 && difference <= 270) {
           message = msgFourLoose[Math.floor(Math.random() * msgFourLoose.length)] + "...Your turn!"
           turnsLeft = "Three balls to go" } 
           else if (w === 4 && score1 === score2) {
           message = tie[Math.floor(Math.random() * tie.length)] + "...Your turn!" 
           turnsLeft = "Three balls to go" } 
           
           //statement for games far beyond reach in round four
            else if (w === 4 && score1 > score2 && difference >270) {
           message =  msgSevenWin[Math.floor(Math.random() * msgSevenWin.length)]
           turnsLeft = "GAME WON! it's now too far for Lewis to come back. click on 'play again' " 
           playAgain.disabled = false
           gameOver = true
            // this ensures that the rest of the balls are disabled (for now I couldn't call them all at once, maybe as I keep learning.)
           balls[0].disabled = true;  balls[1].disabled = true;  balls[2].disabled = true;  balls[3].disabled = true;  balls[4].disabled = true;  balls[5].disabled = true;  balls[6].disabled = true; 
           }
            
            else if (w === 4 && score1 < score2 && difference >270) {
            message =  msgSevenLoose[Math.floor(Math.random() * msgSevenLoose.length)] 
           turnsLeft = "GAME OVER! It's now too far beyond your reach. click on 'play again' "
           playAgain.disabled = false
            gameOver = true
           // this ensures that the rest of the balls are disabled (for now I couldn't call them all at once, maybe as I keep learning.)
             balls[0].disabled = true;  balls[1].disabled = true;  balls[2].disabled = true;  balls[3].disabled = true;  balls[4].disabled = true;  balls[5].disabled = true;  balls[6].disabled = true; 
          
            } 
           
             // if statement for the Fifth round of the game
           
             else if (w === 5 && score1 > score2 && difference <= 180) {
          message = msgFiveWin[Math.floor(Math.random() * msgFiveWin.length)] + "...Your turn!" 
          turnsLeft = "Two balls to go"}
           else if (w === 5 && score1 < score2 && difference <= 180) {
           message = msgFiveLoose[Math.floor(Math.random() * msgFiveLoose.length)] + "...Your turn!"
           turnsLeft = "Two balls to go"} 
           else if (w === 5 && score1 === score2) {
           message = tie[Math.floor(Math.random() * tie.length)] + "...Your turn!" 
           turnsLeft = "Two balls to go" } 
           
         //statement for games far beyond reach in round five
            else if (w === 5 && score1 > score2 && difference >180) {
           message =  msgSevenWin[Math.floor(Math.random() * msgSevenWin.length)]
           turnsLeft = "GAME WON! it's now too far for Lewis to come back. click on 'play again' " 
           playAgain.disabled = false
            gameOver = true
            // this ensures that the rest of the balls are disabled (for now I couldn't call them all at once, maybe as I keep learning.)
           balls[0].disabled = true;  balls[1].disabled = true;  balls[2].disabled = true;  balls[3].disabled = true;  balls[4].disabled = true;
           }
            
            else if (w === 5 && score1 < score2 && difference >180) {
            message =  msgSevenLoose[Math.floor(Math.random() * msgSevenLoose.length)]
           turnsLeft = "GAME OVER! It's now too far beyond your reach. click on 'play again' "
           playAgain.disabled = false
            gameOver = true
           
           // this ensures that the rest of the balls are disabled (for now I couldn't call them all at once, maybe as I keep learning.)
             balls[0].disabled = true;  balls[1].disabled = true;  balls[2].disabled = true;  balls[3].disabled = true;  balls[4].disabled = true;
      }
            
           
           
           
           
              // if statement for the Sixth round of the game
           
             else if (w === 6 && score1 > score2 && difference <= 90) {
          message = msgSixWin[Math.floor(Math.random() * msgSixWin.length)] + "...Your turn!" 
          turnsLeft = "One last ball to go"}
           else if (w === 6 && score1 < score2 && difference <= 180) {
           message = msgSixLoose[Math.floor(Math.random() * msgSixLoose.length)] + "...Your turn!"
           turnsLeft = "One last ball to go"} 
           else if (w === 6 && score1 === score2) {
           message = tie[Math.floor(Math.random() * tie.length)] + "...Your turn!" 
           turnsLeft = "One last ball to go" } 
           
              //statement for games far beyond reach in round six
            else if (w === 6 && score1 > score2 && difference >90) {
           message =  msgSevenWin[Math.floor(Math.random() * msgSevenWin.length)] 
           turnsLeft = "GAME WON! it's now too far for Lewis to come back. click on 'play again' " 
           playAgain.disabled = false
            gameOver = true
            // this ensures that the rest of the balls are disabled (for now I couldn't call them all at once, maybe as I keep learning.)
           balls[0].disabled = true;  balls[1].disabled = true;  balls[2].disabled = true;
           }
            
            else if (w === 6 && score1 < score2 && difference >90) {
            message =  msgSevenLoose[Math.floor(Math.random() * msgSevenLoose.length)] 
           turnsLeft = "GAME OVER! It's now too far beyond your reach. click on 'play again' "
           playAgain.disabled = false
            gameOver = true
           
           // this ensures that the rest of the balls are disabled (for now I couldn't call them all at once, maybe as I keep learning.)
             balls[0].disabled = true;  balls[1].disabled = true;  balls[2].disabled = true;
            }
  
      
         // if statement for the Seventh and final round of the game
           
        else if (w === 7 && score1 > score2) {
          message = msgSevenWin[Math.floor(Math.random() * msgSevenWin.length)]  
          turnsLeft = "GAME WON! click 'play again' to continue..."
           gameOver = true
          playAgain.disabled = false
          console.log(balls[0])
      balls[0].disabled = true}
           
           else if (w === 7 && score1 < score2) {
           message = msgSevenLoose[Math.floor(Math.random() * msgSevenLoose.length)] 
           turnsLeft = "GAME OVER! click 'play again ' to continue... "
           playAgain.disabled = false
            gameOver = true
            console.log(balls[0])
      balls[0].disabled = true
             } 
           else if (w === 7 && score1 === score2) {
           message = tie7[Math.floor(Math.random() * tie7.length)] 
           turnsLeft = "GAME TIED! click 'play again' to continue... " 
           playAgain.disabled = false
            gameOver = true
            console.log(balls[0])
            balls[0].disabled = true
          } 
      
      
           else {
          message = "No comments, I choose to be quiet...!"
      
      }
      chat.textContent = message
      roundsEl.textContent = turnsLeft
      LewisTurn = false
                     }
                     delayBoard();
      }
  
                  test();
  }
  
  
      // function check(){
      //      if (LewisTurn == true) {
      //        roundsEl.textContent = "...relax! it's turn by turn!"
      //        return}
      // }
               
      
           
      function random1(){
          
         if (LewisTurn === true) {
             roundsEl.textContent = "...Relax! it's not your turn!"
             return}
          
          let ind1 = balls.indexOf(gameOne);
         
          balls.splice(ind1, 1)
           
          random()
        
          gameOne.textContent = g
          
          
          gameOne.disabled = true
          v.disabled = true
        
           v.textContent = p
           
    }
           
         function random2(){
              
               if (LewisTurn === true) {
             roundsEl.textContent = "...Wait! patience is a virtue!"
             return}
                     if (LewisTurn === true) {
             roundsEl.textContent = "...Calm down! it's not your turn!"
             return}
               
          let ind2 = balls.indexOf(gameTwo);
         // console.log(ind2) ....I had this in all the functions for testing, after writhing the codes, i deleted them all, I am leaving this as a reminder.
          
           balls.splice(ind2, 1)
           random()
          
           gameTwo.textContent = g
          
           v.textContent = p
           
           
            gameTwo.disabled = true
            v.disabled = true
            // console.log(balls.length)  ...I had this in all the functions for testing, after writhing the codes, i deleted them all, I am leaving this as a reminder.
           // console.log(balls)  ...I had this in all the functions for testing, after writhing the codes, i deleted them all, I am leaving this as a reminder.
          
         
    }
    
     function random3(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Relax! it's not your turn!"
             return}
                     let ind3 = balls.indexOf(gameThree);
          
          
           balls.splice(ind3, 1)
             random()
          
          gameThree.textContent = g
           v.textContent = p
          gameThree.disabled = true
          v.disabled = true
           
           
    }
    
     function random4(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Wait! patience is a virtue!"
             return}
                
          let ind4 = balls.indexOf(gameFour);
          
           balls.splice(ind4, 1)
             
              
             random()
          
          gameFour.textContent = g
           v.textContent = p
           
            gameFour.disabled = true
          v.disabled = true
         
    }
    
     function random5(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Wait! it's not your turn!"
             return}
                    
          let ind5 = balls.indexOf(gameFive);
          
          
           balls.splice(ind5, 1)
             
             random()
          
          gameFive.textContent = g
           v.textContent = p
           
            gameFive.disabled = true
          v.disabled = true
         
    }
    
     function random6(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Calm down! it's not your turn!"
             return}
                
          let ind6 = balls.indexOf(gameSix);
          
           balls.splice(ind6, 1)
             
             random()
          
          gameSix.textContent = g
           v.textContent = p
           
            gameSix.disabled = true
          v.disabled = true
           
    }
    
     function random7(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Wait! it's not your turn!"
             return}
                    
          let ind7 = balls.indexOf(gameSeven);
   
           balls.splice(ind7, 1)
          
             random()
          
          gameSeven.textContent = g
           v.textContent = p
           
            gameSeven.disabled = true
          v.disabled = true
          
    }
    
     function random8(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Wait! it's not your turn!"
             return}
                    
           let ind8 = balls.indexOf(gameEight);
          
           balls.splice(ind8, 1)
             
             random()
          
          gameEight.textContent = g
          v.textContent = p
           
          gameEight.disabled = true
          v.disabled = true
          }
    
     function random9(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Patience! it's not your turn!"
             return}
                
         let ind9 = balls.indexOf(gameNine);
          
          balls.splice(ind9, 1)
         
             random()
          
          gameNine.textContent = g
          v.textContent = p
           
          gameNine.disabled = true
          v.disabled = true
         
           }
    
     function random10(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Calm down! it's not your turn!"
             return}
                     
           let ind10 = balls.indexOf(gameTen);
          
           balls.splice(ind10, 1)
             
             random()
          
          gameTen.textContent = g
          v.textContent = p
           
          gameTen.disabled = true
          v.disabled = true
         
           
         
    }
    
     function random11(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Patience! it's not your turn!"
             return}
                     
          let ind11 = balls.indexOf(gameEleven);
          
           balls.splice(ind11, 1)
             
             random()
          
          gameEleven.textContent = g
          v.textContent = p
           
          gameEleven.disabled = true
          v.disabled = true  
  
          }
  
    
     function random12(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Calm down! it's not your turn!"
             return}
                 
         let ind12 = balls.indexOf(gameTwelve);
          
           balls.splice(ind12, 1)
             
             random()
          
          gameTwelve.textContent = g
          v.textContent = p
           
           gameTwelve.disabled = true
          v.disabled = true
          }
    
  
     function random13(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Chill! it's not your turn!"
             return}
                 
         let ind13 = balls.indexOf(gameThirteen);
         
         balls.splice(ind13, 1)
             
             random()
          
          gameThirteen.textContent = g
          v.textContent = p
           
          gameThirteen.disabled = true
          v.disabled = true
         
         
    }
    
     function random14(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Calm down! it's not your turn!"
             return}
                     
          let ind14 = balls.indexOf(gameFourteen);
          
           balls.splice(ind14, 1)
             
             random()
          
          gameFourteen.textContent = g
          v.textContent = p
           
          gameFourteen.disabled = true
          v.disabled = true
          
          
           
         
    }
    
     function random15(){
          
           if (LewisTurn === true) {
             roundsEl.textContent = "...Relax! it's not your turn!"
             return}
                     
          let ind15 = balls.indexOf(gameFifteen);
           balls.splice(ind15, 1)
              
             random()
             
             gameFifteen.textContent = g
             v.textContent = p
           
             gameFifteen.disabled = true
             v.disabled = true
              }
  
    
    //I modified this app from the parent Apokalypto after making a presentation at IG-HUb. Date remodified is May-20-2023. Took me about 10 hours
  
    // THANK YOU JESUS!
  
    
           
          
          
          
         
          
        
          
            
      
  
       
    
  