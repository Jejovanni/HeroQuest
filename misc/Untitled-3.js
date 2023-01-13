// Define the different scenes
function treasure_hunt() {
    // Describe the scene
    console.log("You are on a treasure hunt. You come to a fork in the road. Do you go left or right?");
    
    // Get the player's choice
    let choice = prompt("Enter 'left' or 'right': ");
    
    // Handle the player's choice
    if (choice === "left") {
      console.log("You choose to go left and find a treasure chest!");
    } else if (choice === "right") {
      console.log("You choose to go right and find a trap!");
    } else {
      console.log("Invalid choice. You stumble around and eventually give up on your treasure hunt.");
    }
  }
  
  // Define the main game loop
  function play_game() {
    // Start the game
    console.log("Welcome to the treasure hunt game!");
    
    // Show the first scene
    treasure_hunt();
  }
  
  // Start the game
  play_game();

  /*In this code, the treasure_hunt() function defines a scene in the game where the player is presented with a choice of which direction to go. 
  The play_game() function is the main game loop, which displays the first scene and then allows the player to make choices to determine what 
  happens next. The prompt() function is used to get input from the player, and the console.log() function is used to print messages to the screen.*/

 /* <button id="start-game">Start game</button>

<script>
  // Declare the variables
  var gameOver = false;
  var currentLocation = "forest";

  // Add a click event listener to the start game button
  document.getElementById("start-game").addEventListener("click", startGame);

  function startGame() {
    while (!gameOver) {
      if (currentLocation == "forest") {
        document.write("You are in a dense forest. You see a path to the left and a path to the right. Do you want to go left or right?");
        var userChoice = prompt("Please enter 'left' or 'right':");
        if (userChoice == "left") {
          currentLocation = "river";
        } else if (userChoice == "right") {
          currentLocation = "cave";
        }
      } else if (currentLocation == "river") {
        document.write("You are at the edge of a rushing river. Do you want to try to cross it or go back to the forest?");
        var userChoice = prompt("Please enter 'cross' or 'back':");
        if (userChoice == "cross") {
          document.write("You bravely attempt to cross the river, but you lose your footing and fall in. Game over!");
          gameOver = true;
        } else if (userChoice == "back") {
          currentLocation = "forest";
        }
      } else if (currentLocation == "cave") {
        document.write("You are in a dark and spooky cave. Do you want to explore or go back to the forest?");
        var userChoice = prompt("Please enter 'explore' or 'back':");
        if (userChoice == "explore") {
          document.write("You explore the cave and find a treasure chest filled with gold! You win!");
          gameOver = true;
        } else if (userChoice == "back") {
          currentLocation = "forest";
        }
      }
    }
  }
</script> */

/*<button id="start-game">Start game</button>

<script>
  // Declare the gameOver variable
  var gameOver = false;

  // Add a click event listener to the start game button
  document.getElementById("start-game").addEventListener("click", startGame);

  function startGame() {
    while (!gameOver) {
      document.write("You are in a dense forest. You see a path to the left and a path to the right. Do you want to go left or right?");
      var userChoice = prompt("Please enter 'left' or 'right':");
      if (userChoice == "left") {
        document.write("You are at the edge of a rushing river. Do you want to try to cross it or go back to the forest?");
        var userChoice = prompt("Please enter 'cross' or 'back':");
        if (userChoice == "cross") {
          document.write("You bravely attempt to cross the river, but you lose your footing and fall in. Game over!");
          gameOver = true;
        } else if (userChoice == "back") {
          // The currentLocation variable is no longer needed, so we can remove this line
        }
      } else if (userChoice == "right") {
        document.write("You are in a dark and spooky cave. Do you want to explore or go back to the forest?");
        var userChoice = prompt("Please enter 'explore' or 'back':");
        if (userChoice == "explore") {
          document.write("You explore the cave and find a treasure chest filled with gold! You win!");
          gameOver = true;
        } else if (userChoice == "back") {
          // The currentLocation variable is no longer needed, so we can remove this line
        }
      }
    }
  }
</script> */

