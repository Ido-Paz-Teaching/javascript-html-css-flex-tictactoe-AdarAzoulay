//Cells winning (horizontally || Vertically || diagonally) options:
///////////////['0','1','2','3','4','5','6','7','8'];
//Horizontally1['x','x','x',' ',' ',' ',' ',' ',' '];
//Horizontally2[' ',' ',' ','x','x','x',' ',' ',' '];
//Horizontally3[' ',' ',' ',' ',' ',' ','x','x','x'];
//
////Vertically1['x',' ',' ','x',' ',' ','x',' ',' '];
////Vertically2[' ','x',' ',' ','x',' ',' ','x',' '];
////Vertically3[' ',' ','x',' ',' ','x',' ',' ','x'];
//
////Diagonally1['x',' ',' ',' ','x',' ',' ',' ','x'];
////Diagonally2[' ',' ','x',' ','x',' ','x',' ',' '];
//
//recieve a string array parameter and return true
//if the game is a draw or false if not.
function hasDraw(selectionArray) {
if (hasWon(selectionArray)==true)
return false;

   return true;
}
//recieve a string array parameter and return true 
//if someone won the game or false if not.
function hasWon(selectionArray) {
    if(
        xHorizontallyWon(selectionArray) ||
        xVerticallyWon(selectionArray) ||
        xDiagonallyWon(selectionArray) ||
        oHorizontallyWon(selectionArray) ||
        oVerticallyWon(selectionArray) ||
        oDiagonallyWon(selectionArray) 
        )
        return true;
        
        
    return false;
}

function xHorizontallyWon(selectionArray){
if(
    (selectionArray[0]=='x' && selectionArray[1]=='x' && selectionArray[2]=='x'))
    return true;

if(
    (selectionArray[3]=='x' && selectionArray[4]=='x' && selectionArray[5]=='x') )
    return true;
if(
    (selectionArray[6]=='x' && selectionArray[7]=='x' && selectionArray[8]=='x') )
    return true;

    return false;
}
function oHorizontallyWon(selectionArray){
    if(
        (selectionArray[0]=='o' && selectionArray[1]=='o' && selectionArray[2]=='o'))
        return true;
    
    if(
        (selectionArray[3]=='o' && selectionArray[4]=='o' && selectionArray[5]=='o'))
        return true;
    if(
        (selectionArray[6]=='o' && selectionArray[7]=='o' && selectionArray[8]=='o'))
        return true;
    
        return false;
    }




function xVerticallyWon(selectionArray){
    if(
        (selectionArray[0]=='x' && selectionArray[3]=='x' && selectionArray[6]=='x') )
        return true;
    
    if(
        (selectionArray[1]=='x' && selectionArray[4]=='x' && selectionArray[7]=='x') )
        return true;
    if(
        (selectionArray[2]=='x' && selectionArray[5]=='x' && selectionArray[8]=='x') )
        return true;
    
        return false;
    }

    function oVerticallyWon(selectionArray){
        if(
            (selectionArray[0]=='o' && selectionArray[3]=='o' && selectionArray[6]=='o') )
            return true;
        
        if(
            (selectionArray[1]=='o' && selectionArray[4]=='o' && selectionArray[7]=='o') )
            return true;
        if(
            (selectionArray[2]=='o' && selectionArray[5]=='o' && selectionArray[8]=='o') )
            return true;
        
            return false;
        }

    function xDiagonallyWon(selectionArray){
        if(
            (selectionArray[0]=='x' && selectionArray[4]=='x' && selectionArray[8]=='x') )
            return true;
        
        if(
            (selectionArray[2]=='x' && selectionArray[4]=='x' && selectionArray[6]=='x') )
            return true;

        
            return false;
        }
        function oDiagonallyWon(selectionArray){
            if(
                (selectionArray[0]=='o' && selectionArray[4]=='o' && selectionArray[8]=='o'))
                return true;
            
            if(
                (selectionArray[2]=='o' && selectionArray[4]=='o' && selectionArray[6]=='o'))
                return true;
    
            
                return false;
            }
    


//Please , don't modify the following code
if (typeof module !== "undefined") {
    module.exports = {
        hasDraw,
        hasWon
    }
}