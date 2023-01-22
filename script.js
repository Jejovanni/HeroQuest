(function (){

//when the page loads it should display an input which takes a value 
//when value is submitted, it should be assigned to a variable
//as the value is being submitted it should also invoke a function that starts off the game  
    var conDiv = document.getElementById('container');

    var startBtn = document.createElement('button');
    startBtn.setAttribute('type', 'submit');
    startBtn.innerHTML = 'START GAME';
    startBtn.setAttribute('id', 'btnStart');
    
    conDiv.appendChild(startBtn);

    startBtn.addEventListener('click', function (event){
       event.preventDefault();
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

        var heroInput = document.createElement('input');
        heroInput.setAttribute('placeholder', 'What is your name?');
        heroInput.setAttribute('id', 'inputHero');
        heroInput.setAttribute('type', 'text');
        heroInput.setAttribute('required', '');

        var heroBtn = document.createElement('button');
        heroBtn.setAttribute('id', heroBtn);
        heroBtn.setAttribute('type', 'submit');
        heroBtn.innerHTML = '->';

        heroName.appendChild(heroInput);
        heroName.appendChild(heroBtn);

        conDiv.appendChild(heroName);


        heroName.addEventListener('submit', getHero);

        function getHero(event) {
            event.preventDefault();
            heroName.elements['inputHero'];
            var heroOut = heroName.elements['inputHero'];
            var heroTrue = heroOut.value;
            console.log(heroTrue);
            heroName.remove;
            storyStart(); 
        }
            var questPara = document.createElement('p');
        
        function storyStart(){
            questPara.setAttribute('id', 'quest');
            questPara.innerHTML = 'Hello there!';
            conDiv.appendChild(questPara);
           
        } 
        
        
    }