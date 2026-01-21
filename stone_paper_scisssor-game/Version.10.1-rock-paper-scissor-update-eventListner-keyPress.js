
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

    //eventListner addd instead of onclick;
    document.querySelector('.js-rock-button').addEventListener('click',()=>{
          playGame('Rock');
      });
    
    document.querySelector('.js-paper-button').addEventListener('click',()=>{
          playGame('Paper');
      });

    document.querySelector('.js-scissor-button').addEventListener('click',()=>{
          playGame('Scissor');
      });

    document.querySelector('.js-autoplay').addEventListener('click',()=>{
        if(iAutoPlaying)
        {
          autoPlay.stop();
        }
        else{
          autoPlay.start();
        }
    });
    document.querySelector('.js-reset').addEventListener('click',()=>{
        resetScore();
    });

    //eventListner to keypress on keyboard to play

    document.body.addEventListener('keydown',(event)=>{
      if(event.key==='r'||event.key==='R')
      {
        playGame('Rock');
      }
      else if(event.key==='p'||event.key==='P')
      {
        playGame('Paper');
      }
      else if(event.key==='s'||event.key==='S')
      {
        playGame('Scissor');
      }
      else if(event.key==='a'||event.key==='A')
      {
        autoPlay.start();
      }
      else if(event.code==='Space')//doen,t have capitalor small letter
      {
        event.preventDefault();//this i important because if user click autoplay in screen When you click a button (like "Autoplay") with your mouse, that button stays "focused." If you then press the Spacebar, the browser thinks you are trying to "click" that button again rather than triggering your keyboard shortcut.
        autoPlay.stop();
        
      }
      else if(event.key==='Backspace'){
        resetScore();
      }
    });

    //resetScore
    function closeResetPopup() {
            // 1. Clear the Yes/No buttons from the screen
           const display = document.querySelector('.js-reset-display');
          if (display) {
              display.innerHTML = "";
          }
          document.body.removeEventListener('keydown', handleResetKey);

          // 2. NEW: Find the extra instructions and remove them!
          const tempHints = document.querySelectorAll('.js-temp-hint');
          tempHints.forEach((hint) => {
            hint.remove();

          });
      }
      function handleResetKey(event){
        if(event.key==='y' || event.key==='Y')
        {
          confirmReset();
        }
        else if(event.key==='n' || event.key==='N')
        {
          cancelReset();
        }
      }

      //Reset confirmation
      function confirmReset()
      {
        score={wins:0,losses:0,Ties:0};
        localStorage.removeItem('score');
        updateScore();
        alert('Score Reset!');
        closeResetPopup();// close popup message
      }

      //cancel reset
      function cancelReset(){
        alert("Continue playing!");
        closeResetPopup();
      }

      // ---------- Remove popup + remove key listener ----------
    function resetScore()
    {
      const instructionList = document.querySelector('.js-instruction-list');
      let resetButton=`<p>Are you sure you want reset score ?</p>
      <div class="confirmation-buttons-container">
          <button class='js-yes'>Yes</button> 
          <button class='js-no'>No</button>
      </div>`;

      // 2. Add the temporary instructions to the list
      if (!document.querySelector('.js-temp-hint')){
          const extraInstructions = `
        <li class="js-temp-hint"><strong>Y</strong> or <strong>y</strong> → Confirm Reset</li>
        <li class="js-temp-hint"><strong>N</strong> or <strong>n</strong> → Cancel Reset</li>`;
        instructionList.insertAdjacentHTML('beforeend', extraInstructions);//add extra in that instruction by using insertAdjacenthtml
      }
      

      document.querySelector('.js-reset-display').innerHTML=resetButton;

      const yes=document.querySelector('.js-yes');
      const no=document.querySelector('.js-no');
      
      // ---------- YES BUTTON CLICK ----------
      yes.addEventListener('click', confirmReset);

      // ---------- NO BUTTON CLICK ----------
      no.addEventListener('click', cancelReset);

      // ---------- KEYBOARD Y/N SUPPORT ----------
      document.body.addEventListener('keydown', handleResetKey);

      
    }

    //user playGame choicce
    function playGame (playerchoice)
    {     
          closeResetPopup();//if user doesn't click yes/no dispaly disappear
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
          localStorage.setItem('score',JSON.stringify(score));
          updateScore();

          document.querySelector('.js-result').innerHTML=result;

          document.querySelector('.js-move').innerHTML=`You <img class="move-icon" src="../pics/rock-paper-scissor/${playerchoice}-emoji.png">
  <img class="move-icon" src="../pics/rock-paper-scissor/${computerMove}-emoji.png"> Computer` 
          
    }

    //score update
    function updateScore()
    {
      document.querySelector('.updatedScore').innerHTML=`Wins :${score.wins}, Losess :${score.losses} ,Tie :${score.Ties}`;
    }

    //background theme
    function checkToggle()
    {
    /* const check=document.querySelector('.js-toggle');
      check.classList.toggle('is-toggled');*/

      closeResetPopup();//if user doesn't click yes/no dispaly disappear

      document.body.classList.toggle('is-toggled');
    }

    //autoplay update it 
    
    let iAutoPlaying=false;
    let intervalId;
    const autoPlay=
    {
      
        start(){
          
          if(!iAutoPlaying)
          {
              intervalId=setInterval(function(){
              const playerchoice=pickComputerMove();
              playGame(playerchoice);
            },1000);
            iAutoPlaying=true;
            document.querySelector('.js-autoplay').innerText= 'Stop ⛔';
          }
        },
        stop(){
          if(iAutoPlaying)
          {
              clearInterval(intervalId);//to stop interval
              iAutoPlaying=false;
              document.querySelector('.js-autoplay').innerText= 'Autoplay 🔄';
          }
          
        }
     }
   
    
      
