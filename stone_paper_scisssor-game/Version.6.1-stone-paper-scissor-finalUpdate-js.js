
    let score=JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        Ties:0
      };
      updateScore();
      /*if(!score)
      {
        score={
        wins:0,
        losse:0,
        Ties=0};
      }*/
    function pickComputerMove()
    {
        const mathRandom=Math.random();
        let computerMove='';
        if(mathRandom>=0 && mathRandom<1/3)
        {
          computerMove='Rock'
        }
        else if(mathRandom>=1/3 && mathRandom<2/3)
        {
          computerMove='Paper';
        }
        else if(mathRandom >2/3 && mathRandom<1){
          computerMove='Scissor';
        }
        return computerMove;
    }
    function playGame (playerchoice)
    {     
          const computerMove=pickComputerMove();
          let result='';
          if(playerchoice==='Rock')
          {
              if(computerMove=='Rock')
              {
                result='Tie'
              }
              else if(computerMove=='Paper')
              {
                result='you loss';
              }
              else{
                result='you win';
              }
          }
          else if(playerchoice==='Paper')
          {
                if(computerMove=='Rock')
                {
                  result='you win'
                }
                else if(computerMove=='Paper')
                {
                  result='Tie';
                }
                else{
                  result='you loss';
                }
          }
          else{
                  if(computerMove==='Rock')
                  {
                    result='you loss'
                  }
                  else if(computerMove==='Paper')
                  {
                    result='you win';
                  }
                  else{
                    result='Tie';
                  }
          }
          if(result==='you win')
          {
            score.wins+=1;
          }
          else if(result==='you loss')
          {
            score.losses+=1;
          }
          else if(result==='Tie')
          {
            score.Ties+=1;
          }
          updateScore();

          document.querySelector('.js-result').innerHTML=result;

          document.querySelector('.js-move').innerHTML=`You <img class="move-icon" src="../pics/rock-paper-scissor/${playerchoice}-emoji.png">
  <img class="move-icon" src="../pics/rock-paper-scissor/${computerMove}-emoji.png"> Computer` 
          localStorage.setItem('score',JSON.stringify(score));
          
    }
    function updateScore()
    {
      document.querySelector('.updatedScore').innerHTML=`Wins :${score.wins}, Losess :${score.losses} ,Tie :${score.Ties}`;
    }

