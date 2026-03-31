    let score =JSON.parse(localStorage.getItem("score")) || {
        Wins : 0,
        Losses : 0,
        Ties : 0
    };

    updateScore();

    function playGame(playerMove ){
        const result = pickComputerMove(); 
        
        if(playerMove === 'Scissors'){
                    if (result === 'Rock'){
                    result1 = 'You Lose';
                    }else if(result === 'Paper'){
                    result1 = 'You Win';
                    }else if(result === 'Scissors'){
                    result1 = 'Tie';
                }
            }else if(playerMove === 'Paper'){
                if (result === 'Rock'){
                    result1 = 'You Win';
                }else if(result === 'Paper'){
                    result1 = 'Tie';
                }else if(result === 'Scissors'){
                    result1 ='You Lose';
                }
            }else if (playerMove === 'Rock'){
                if (result === 'Rock'){
                    result1 = 'Tie';
                }else if(result === 'Paper'){
                    result1 = 'You Lose';
                }else if(result === 'Scissors'){
                    result1 = 'You Win';
                }
            }
            if(result1 === 'You Win'){
                score.Wins += 1;
            }else if(result1 === 'You Lose'){
                score.Losses += 1;
            }else if(result1 === 'Tie'){
                score.Ties += 1;
            }
            
            localStorage.setItem("score",JSON.stringify(score));
            
            document.querySelector(".js-result").innerHTML = result1;
            document.querySelector(".js-move").innerHTML = `You <img class="img" src="images/${playerMove.toLowerCase()}-emoji.png">   
            <img class="img" src="images/${result.toLowerCase()}-emoji.png" > Computer `;
            updateScore();
            
            
        }
        
        function updateScore(){
            document.querySelector('.js-score').innerHTML = `Wins : ${score.Wins}; Losses : ${score.Losses};   Ties : ${score.Ties};`
            
        }
        
        function pickComputerMove(){
            const randomNumber = Math.random();
            let result = '';
            if (randomNumber >=0 && randomNumber <= 1/3){
                    result='Rock';
                }else if (randomNumber >=1/3 && randomNumber <= 2/3){
                    result='Paper';
                }else if (randomNumber >=2/3 && randomNumber <= 1){
                    result='Scissors';
                }
                return result;
            };

            alert('Welcome!! , Ready to Play Rock Paper Scissors ?');
            