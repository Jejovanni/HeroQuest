(() => {

//when the page loads it should display an input which takes a value 
//when value is submitted, it should be assigned to a variable
//as the value is being submitted it should also invoke a function that starts off the game  

    var conDiv = document.getElementById('container');
    const heroName = document.createElement("form");
    heroName.setAttribute('id', 'hero_name');
    var heroInput = document.createElement('input');
    heroInput.setAttribute('placeholder', 'What is your name?');
    heroInput.setAttribute('type', 'text');
    heroInput.setAttribute('required', '');
    heroName.appendChild(heroInput);
    conDiv.appendChild(heroName);
    document.addEventListener('keydown', (event) => {
        const key = event.code;

        if(key === 'KeyEnter' ){
           const hero = document.querySelector('input').value;
           document.removeChild(heroName);
           console.log(hero);

        }

    });

})();
 

   


   



 /*const choiceOne = document.querySelector('#choice1');
    const choiceTwo = document.getElementById('choice2');
    const nextQuest = document.querySelector('#question');

    //const startGame = querySelector('button');

   let startBtn = document.createElement('button');
   let btnTxt = document.createTextNode = 'Start Game';
   let myDiv = document.querySelector('body');
   startBtn.appendChild(btnTxt);
   myDiv.appendChild(startBtn);

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
    })*/