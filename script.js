
let choiceOne = document.querySelector('#choice1');
var choiceTwo = document.getElementById('choice2');
var nextQuest = document.querySelector('#question');

//const startGame = querySelector('button');


 

//let hero = document.querySelector('input').value;

choiceOne.addEventListener('click', function(){
    nextQuest.innerHTML = "You are a fierce barbarian warrior, known throughout the land for your strength and skill in combat. One day, you receive a summons from the king, who has a dangerous quest for you to undertake. As you stand before the king, he explains that an evil sorcerer has taken control of a powerful artifact that could destroy the kingdom if it falls into the wrong hands. The king tasks you with retrieving the artifact and bringing it back to him.";
}
)

choiceTwo.addEventListener('click', function(){
    nextQuest.innerHTML = "Go home!!!";
})

choiceOne.addEventListener('click', function(){
    nextQuest.innerHTML = "You accept the quest and set out on your journey, determined to succeed and save the kingdom.";
})