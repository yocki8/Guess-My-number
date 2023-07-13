'use strict';

let randomise = () =>{
    return Math.trunc(Math.random()*20)+1;
}
let message = (notice) =>{
    document.querySelector('.notice').textContent=notice;
}

let showIt = () =>{

    document.querySelector('.question').textContent=random;
    document.querySelector('.question').style.borderRadius='40px';
}

let changeColor = (color) =>{
    document.querySelector('body').style.backgroundColor= color;
}

let getScore = () =>{
    return Number(document.querySelector('.score').textContent);
}

let getHighscore = () =>{
    return Number(document.querySelector('.highscore').textContent);
}

let flag=true;
let score = 20;
let random = randomise();
document.querySelector('.guess').addEventListener
('click',()=>{

        if(flag){

        let guessed = Number(document.querySelector('.inp').value);

        if(!guessed || guessed>20 || guessed<1){
            message('😡 Enter appropriate Number...');
        }

        else if(guessed===random){
            message('🥳 you guessed it right');
            
            changeColor('#53B332');

            showIt();
            
            if(getScore()>getHighscore())
            {
                document.querySelector('.highscore').textContent = getScore();
            }

            flag = false;
        }

        else{
            
            
            if(guessed >= random-2 && guessed<=random+2) message('🫣 Too close');
            
            else if(guessed>=random-5 && guessed<=random+5)
            message('😙 Not Too far');
            
            else message('🫠 Too far');

            
            if(score>1) score--;
            else{
                message('🤡 You lose');
                score=0;
                changeColor(' #961e1e ');
                showIt();
                flag=false;
            }
            document.querySelector('.score').textContent = score;
        }}

        else{
            alert('Press again to play again!');
            
        }

    })

document.querySelector('.again').addEventListener('click',
() =>{
    flag = true;
    score = 20;
    randomise();
    message('Start guessing...');
    changeColor('#222');
    document.querySelector('.question').textContent='?';
    document.querySelector('.inp').value='';
    document.querySelector('.score').textContent=score;
    document.querySelector('.question').style.borderRadius=''
    }
)
