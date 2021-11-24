
window.onload = function(){
    // Declare variables
        const boardArray = [" "," "," "," "," "," "," "," "," ",]
        const b0 = document.getElementById("b0");
        const b1 = document.getElementById("b1");
        const b2 = document.getElementById("b2");
        const b3 = document.getElementById("b3");
        const b4 = document.getElementById("b4");
        const b5 = document.getElementById("b5");
        const b6 = document.getElementById("b6");
        const b7 = document.getElementById("b7");
        const b8 = document.getElementById("b8");
        const message = document.getElementById("gameStatusTag");
        let flag = 'x';
        let turnnumbers = 0;
        let Gameover=false;
    //Declare functions

        function startgame(){
        document.querySelector('header button').innerHTML = "Reset"
        document.querySelector('header button').addEventListener('click', restartgame);
        message.innerHTML = 'waiting for X first move';
        b0.addEventListener('click', selectcell);
        b1.addEventListener('click', selectcell);
        b2.addEventListener('click', selectcell);
        b3.addEventListener('click', selectcell);
        b4.addEventListener('click', selectcell);
        b5.addEventListener('click', selectcell);
        b6.addEventListener('click', selectcell);
        b7.addEventListener('click', selectcell);
        b8.addEventListener('click', selectcell);
        }

        function selectcell(event){
        let selectedcell = event.currentTarget; //#button b0
        let selectedcellID = event.target.id; //"b0"
        if( !Gameover )
        {
            if(selectedcell.innerHTML == ""){
            switch(flag){
            case 'x':
                selectedcell.innerHTML = 'x';
                boardArray[selectedcellID[1]] = 'x';
                //turnnumbers++;
                if(hasWon(boardArray))
            {
                Gameover = true;
                statusgame();
                break;
            }
                flag = 'o';
                statusgame();
                break;

            case 'o':
                selectedcell.innerHTML = 'o';
                boardArray[selectedcellID[1]] = 'o';
               // turnnumbers++;
                if(hasWon(boardArray))
            {
                Gameover = true;
                statusgame();
                break;
            }
                flag = 'x';
                statusgame();
                break;
            }
            }
            }
        }
        function restartgame(){
            location.reload();
        }
    
        function statusgame(){
            if (Gameover){
            message.innerHTML = `${flag} won the game`;
            disabled()}
            else if (hasDraw(boardArray)){         //else if turnnumbers==9 && !hasWon(boardArray){           
            message.innerHTML = "IT'S A DRAW!";{
            Gameover = true;
            disabled()}
        }
            else{
                message.innerHTML = `it's ${flag} turn`
            }
        }
        
        function disabled(){
            b0.disabled = true;
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
        }

        
    // Start the game
        startgame();
}