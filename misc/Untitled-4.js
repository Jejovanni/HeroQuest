// Import the retro font library
const retrofont = require('retrofont');

// Define the retro font to use for the game
const font = retrofont.getFont('atari');

// Define the game's storyline
const storyline = [
    'You are a brave adventurer in a fantasy land.',
    'You come across a fork in the road. To the left, you see a dark cave.',
    'To the right, you see a castle in the distance.',
];

// Display the game's title using the retro font
console.log(font.render('Choose Your Adventure'));

// Display the game's storyline, one line at a time, using the retro font
storyline.forEach((line) => {
    console.log(font.render(line));
});

// Ask the player to choose a path using the retro font
const choice = prompt(font.render('Which path will you choose? [cave/castle]'));

// Handle the player's choice and display the appropriate response using the retro font
if (choice === 'cave') {
    console.log(font.render('You bravely enter the dark cave.'));
    console.log(font.render('Inside, you find a treasure chest!'));
} else if (choice === 'castle') {
    console.log(font.render('You make your way towards the castle.'));
    console.log(font.render('As you approach, you are greeted by the king.'));
} else {
    console.log(font.render('Invalid choice. You stumble around aimlessly.'));
}
