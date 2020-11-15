// Select Elements
let lettersContainer=document.querySelector(".letters");
let category= document.querySelector(".category span");
let letterGuess=document.querySelector(".letters-guess");

// make the letters
let letters="abcdefghijklmnopqrstuvwxyz";
let lettersArray=Array.from(letters);
// Generate the letters
lettersArray.forEach(letter=>{
    let span=document.createElement("span");
    let spanText=document.createTextNode(letter)
    span.className="letterBox";
    span.appendChild(spanText);
    lettersContainer.appendChild(span)

});
// object of words
let words={
    programming:["javascript" ,"php" ,"java" ,"python"],
    countries:["Egypt" ,"Syria" ,"palestine" ,"soudyaribia"],
    people:["Alexander" ,"celopatra" ,"mohamedali" ],
    web:["React" , "html" ,"css" ,"Angular"]
}
// get the key of this object (programming,countries,people)
let KeysWords=Object.keys(words);
// get a random num from keys
let randomNum= Math.floor(Math.random()*KeysWords.length);
// get a random value of keys
let randomName=KeysWords[randomNum];
// get an array with words
let randomValue=words[randomName];
// number of each words
let randomValueNum=Math.floor(Math.random()*randomValue.length);
// get a one of keywords
let wordValue=randomValue[randomValueNum];
// show the word category
category.innerHTML= randomName ;

// make letter guess
let lettersAlpha =Array.from(wordValue);
console.log(lettersAlpha);
lettersAlpha.forEach(letter=>{
    let span =document.createElement("span");
    span.className="Alpha_letters";
    // span.appendChild(letter);
    letterGuess.appendChild(span)
});

// wrong times
let wrongTimes=0;
// select the draw shape
let theDraw=document.querySelector(".hangman-draw");

// add clicked class for any letter I clicked
document.addEventListener("click",(e) => {
    let status= false;
if(e.target.className=="letterBox")
{
    e.target.classList.add("clicked");
}

let clickedLetter=e.target.innerHTML.toLowerCase();
console.log(clickedLetter)
let chosenLetter= Array.from(wordValue.toLowerCase());
// select span
let spanGuess=document.querySelectorAll(".letters-guess span");

// check if the clicked letter equal the chosen word
chosenLetter.forEach((wordletter,wordIndex)=>{
if(clickedLetter==wordletter){
    status=true;
    spanGuess.forEach((span,spanIndex)=>{
        if(wordIndex===spanIndex) {

            span.innerHTML= wordletter
        };
    });
};

});
console.log(status)
//  status false
if(status!==true){
// increase the number of wrongs
wrongTimes++;
theDraw.classList.add(`wrong-${wrongTimes}`);
// play the sound
document.getElementById("fail").play();
if(wrongTimes==8){
    lettersContainer.className="finshed";
    endGame()
}


}
else{
    // play the sound
document.getElementById("succes").play()
}

})
function endGame(){
    let header=document.createElement("h3");
    let text=document.createTextNode(`Game Over the Word is ${wordValue} `);
    header.appendChild(text)
    letterGuess.appendChild(header)

}



