// Define a function to play the game
function playGame() {
    // Print the opening message to the player
    console.log("You are a fierce barbarian warrior, known throughout the land for your strength and skill in combat. One day, you receive a summons from the king, who has a dangerous quest for you to undertake.");
    console.log("As you stand before the king, he explains that an evil sorcerer has taken control of a powerful artifact that could destroy the kingdom if it falls into the wrong hands. The king tasks you with retrieving the artifact and bringing it back to him.");
    console.log("You accept the quest and set out on your journey, determined to succeed and save the kingdom.");
  
    // Present the first branching path to the player
    console.log("As you travel, you come across a fork in the road. Do you:");
    console.log("A) Take the left path, which leads through a dense forest.");
    console.log("B) Take the right path, which winds through treacherous mountains.");
    console.log("C) Ignore the fork in the road and continue straight ahead.");
  
    // Ask the player to choose one of the options
    const choice = prompt("Enter your choice (A, B, or C):");
  
    // Check the player's choice and branch accordingly
    if (choice === "A") {
      // If the player chooses A, they take the left path through the forest
      console.log("You make your way through the dense forest, your sword at the ready. After several hours of hacking through underbrush and battling fierce beasts, you come across a clearing. In the center of the clearing stands the sorcerer, guarding the artifact you seek.");
  
      // Present the second branching path to the player
      console.log("Do you:");
      console.log("A) Attack the sorcerer head-on, risking injury in order to retrieve the artifact.");
      console.log("B) Attempt to sneak up on the sorcerer and take him by surprise.");
      console.log("C) Turn back and find another way to retrieve the artifact.");
  
      // Ask the player to choose one of the options
      const choice2 = prompt("Enter your choice (A, B, or C):");
  
      // Check the player's choice and branch accordingly
      if (choice2 === "B") {
        // If the player chooses B, they successfully sneak up on the sorcerer and take the artifact
        console.log("You carefully make your way around the clearing, trying to stay out of the sorcerer's sight. When you are close enough, you launch yourself at him, catching him off guard and knocking him to the ground. You quickly snatch the artifact and make your escape.");
        console.log("Congratulations, you have successfully completed your quest and saved the kingdom!");
      } else {
        // If the player chooses A or C, they are unable to retrieve the artifact
        console.log("Your attempt to retrieve the artifact ends in failure. The kingdom is doomed.");
      }
    } else if (choice === "B") {
      // If the player chooses B, they take the right path through the mountains
      console.log("You make your way through the treacherous mountains, using your strength and agility to overcome the many challenges you face. After several days of grueling travel, you come across a hidden cave that leads directly.");
    }}