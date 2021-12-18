window.onload=function(){
const dino = document.querySelector('#dino');
const stone = document.querySelector('#stone');
const score = document.querySelector('#score');
const scoreDiv = document.querySelector('#scoreDiv');
const game = document.querySelector('#game');
const lose = document.querySelector('#lose');
const win = document.querySelector('#win');
}

lose.style.display = 'none';
win.style.display = 'none';

function jump(){
    if(dino.classList != 'animationJump'){
        dino.classList.add('animationJump');
    }
    setTimeout(function(){
        dino.classList.remove('animationJump');
    }, 500)
}

document.addEventListener('keypress', () => {
    jump();
})

function obstacle(){
    if(score.innerText >= 0){
        stone.classList.add('animationStone1')
    }
    if(score.innerText >= 90){
        stone.classList.remove('animationStone1')
        stone.classList.add('animationStone2')

    }
    if(score.innerText >= 200){
        stone.classList.remove('animationStone2')
        stone.classList.add('animationStone3')
    }
    if(score.innerText >= 300){
        stone.style.animationJump = 'none';
        stone.style.display = 'none';
        dino.style.display = 'none';
        scoreDiv.style.display = 'none';
        win.style.display = 'block'
    }
}

function gameOver() {
    const text = document.createElement('h1');
    const t = document.createTextNode('Game Over!');
    text.appendChild(t);
    document.getElementById("lose").appendChild(text);
    text.classList.add('loseH1');

    const scoreText = document.createElement('p');
    const st = document.createTextNode('Your score: ' + score.innerText);
    scoreText.appendChild(st);
    document.getElementById("lose").appendChild(scoreText);
    scoreText.classList.add('loseP');

    const pharagraph = document.createElement('p');
    const p = document.createTextNode('Refresh to start over')
    pharagraph.appendChild(p);
    document.getElementById("lose").appendChild(pharagraph);
    pharagraph.classList.add('loseP');
  }

const checkIfDead = setInterval(function(){
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));

    score.innerText ++;

    if (stoneLeft < 150 && stoneLeft > 20 && dinoTop >= 110) {
        stone.style.animationJump = 'none';
        stone.style.display = 'none';
        dino.style.display = 'none';
        scoreDiv.style.display = 'none';
        lose.style.display = 'block'

        const removeWin = document.getElementById("win");
        removeWin.remove();

        gameOver();
    }
    else{
        obstacle();
    }
}, 90);