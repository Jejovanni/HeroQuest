(function () {

    //when the page loads it'll display a start button, the start button will take you to a input field
    //Input value will be stored in a variable, game will start asking questions.
    //
    const conDiv = document.getElementById('container');
    const heroName = document.createElement("form");

    const startBtn = document.createElement('button');
    startBtn.setAttribute('type', 'submit');
    startBtn.innerHTML = 'START GAME';
    startBtn.setAttribute('id', 'btnStart');

    conDiv.appendChild(startBtn);

    startBtn.addEventListener('click', function (event) {
        event.preventDefault();
        startBtn.remove();
        startGame();
    });

    function startGame() {
        //create a function that will fire up the game, first it'll load epilogue, and present a choice
        //this weill be done by creating and appending a div with a paragraph in it, then you change the innerHTML or innerText
        //const conDiv = document.getElementById('container');
        heroName.setAttribute('id', 'hero_name');
        const heroInput = document.createElement('input');
        //can you write code that shortens this. A function perhaps
        heroInput.setAttribute('placeholder', 'What is your name?');
        heroInput.setAttribute('id', 'inputHero');
        heroInput.setAttribute('type', 'text');
        heroInput.setAttribute('required', '');

        const heroBtn = document.createElement('button');
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
            const heroTrue = heroOut.value;
            console.log(heroTrue);
            heroName.remove();
            questPara.setAttribute('id', 'quest');
            questPara.innerHTML = `${heroTrue}, You are a fierce barbarian warrior, known throughout the land for your strength and skill in combat. One day, you receive a summons from the king, 
            who has a dangerous quest for you to undertake.  As you stand before the king, he explains that an evil sorcerer has taken control of a powerful artifact that could destroy the kingdom 
            if it falls into the wrong hands. The king tasks you with retrieving the artifact and bringing it back to him.`;
            conDiv.appendChild(questPara);
            console.log(heroTrue);
        }
        var questPara = document.createElement('p');



    }

})();

