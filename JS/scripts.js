

function changeText(){
    // change the text on a click of a button
    var textsArray = ["sample a","sample b", "sample c", "sample d","sample e"];
    
    var number = getRandomNumberBetween(0,textsArray.length-1);

    console.log("Index: ", number);

    

    document.getElementById("heading").innerHTML = textsArray[number];


}

function getRandomNumberBetween(min, max)
{
    return Math.floor(Math.random() * (max-min + 1) + min);
}

// git stage: check atll the boxes
// git commit: make sure all the changes are staged: they have a description and a summary
// git push: update to remote server from local machine