(function (){

//when the page loads it should display an input which takes a value 
//when value is submitted, it should be assigned to a variable
//as the value is being submitted it should also invoke a function that starts off the game  
    var conDiv = document.getElementById('container');
    //const heroName = document.createElement("form");
   // heroName.setAttribute('id', 'hero_name');
    

    //var heroInput = document.createElement('input');
    //heroInput.setAttribute('placeholder', 'What is your name?');
    //heroInput.setAttribute('type', 'text');
    //heroInput.setAttribute('required', '');

    var startBtn = document.createElement('button');
    startBtn.setAttribute('type', 'submit');
    startBtn.innerHTML = 'START GAME';
    startBtn.setAttribute('id', 'btnStart');
    

    //heroName.appendChild(heroInput);
    //heroName.appendChild(heroBtn);
    //conDiv.appendChild(heroName);
    conDiv.appendChild(startBtn);
    //const hero = document.querySelector('input').value;

    startBtn.addEventListener('click', function (event){
        //let key = event.key;
       event.preventDefault();
           //heroName.remove();
           startBtn.remove();
           startGame();
           
    });

})();
  
    function startGame(){
        //create a function that will fire up the game, first it'll load epilogue, and present a choice
        //this weill be done by creating and appending a div with a paragraph in it, then you change the innerHTML or innerText
        var conDiv = document.getElementById('container');
        const heroName = document.createElement("form");
        heroName.setAttribute('id', 'hero_name');
        const hero = document.querySelector('input').value;


        var heroInput = document.createElement('input');
        heroInput.setAttribute('placeholder', 'What is your name?');
        heroInput.setAttribute('type', 'text');
        heroInput.setAttribute('required', '');

        var heroBtn = document.createElement('button');
        heroBtn.setAttribute('id', heroBtn);
        heroBtn.setAttribute('type', 'submit');
        heroBtn.innerHTML = '->';

        heroName.appendChild(heroInput);
        heroName.appendChild(heroBtn);
        conDiv.appendChild(heroName);

        heroBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            heroName.remove;
        })

        
        var questPara = document.createElement('p');
        questPara.setAttribute('id', 'quest');
        questPara.innerHTML = 'Hello there!';
        conDiv.appendChild(questPara);
        console.log(hero);

    }
   


   



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