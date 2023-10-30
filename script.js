score = 0;
cross = true;
OffX = 0;
OffY = 0;
document.onkeydown = function (e){
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        } , 700);
        console.log(OffY);
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
        console.log(OffX);
    }
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px';
    }
 }
 
 setTimeout( () => {
     dino = document.querySelector('.dino');
     gameOver = document.querySelector('.gameOver');
     obstacle = document.querySelector('.obstacle');
     
     dx = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
     dy = parseInt(window.getComputedStyle(dino , null).getPropertyValue('top'));
     
     ox = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('left'));
     oy = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('top'));
     
     offsetX = Math.abs(dx - ox);
     console.log(offsetX);
     OffX = offsetX;
     offsetY = Math.abs(dy - oy);
     OffY = offsetY;
     console.log(offsetY);
     
     if(offsetX < 600 && offsetY < 130){
         gameOver.innerHtml = "Game Over - Reload to play again";
         obstacle.classList.remove('obstacleAni');
         console.log(score);
        }else if(offsetX < 600 && cross){
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(obstacle , null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                obstacle.style.animationDuration = newDur;
            }, 500);
        }
    } , 10);
    const updateScore = (score) => {
        Score = document.querySelector('.scoreCont');
        Score.innerHtml = 'Your Score:' + score;
        console.log(score);
    };