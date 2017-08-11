// HOW THE GAME WORKS... OR IS SUPPOSED TO...
	// User picks their fighter with a registered .on("click")
		// Player 1 figher moves to the battlefield.
	// User picks their opponent with a registerd .on("click")
		// Player 2 fighter moves to the battlefield.
	// Fighters are now on the battlefield with fighter images swapped out for the original images.
	// Health bars are displayed below the fighter.
	// Attack button is displayed below the Player 1 fighter.
	// User presses the attack button to initiate the fight.
		// Player 1 attacks with their Combat Power (CP). 
			// Damage to Player 2 is recorded and 
			// HP is reduced by Player 1 CP and shown in the health bar.
		// Player 2 automatically counterattacks using counterHp. 
			// Damage to Player 1 is recorded and 
			// HP is reduced and shown in the health bar.
		// Player 1 Combat Power (CP) increases every turn by the original CP value of Player 1 character(s).
	// Player 1 continues to attack until Player 2 HP = 0 or Player 1 HP = 0.
	// IF Player 1 wins, Player 1 stays on the battlefield and User picks another opponent. 
		// Game play continues like this until Player 1 defeats all opponents or Player 1 HP = 0.

// oh boy, here we go... I really want to get this to work.

//**************************************************************************************************************************
//**************************************************************************************************************************

// VARIABLES

	// Create the fighters and their attributes as objects
	var goku = {
		hp: 105, // Health Points
		cp: 12, // Combat Power (Attack Power)
		counterHp: 10, // Counter Attack Power
		// I want to change the picture of the characters from the selection to the fight.
		// Found the below online but not really sure it will work or how it works. 
			// fightImage: function imageSwap() {
			// 	$("img").click(function(e) {
			// 		var newclass = $(this).attr("id");
			// 		var oldclass = $("#fighter1").attr("class");
			// 		$("#fighter1").fadeOut(function() {
			// 			$("#fighter1").removeClass(oldclass).addClass(newclass).fadeIn("slow");
			// 		})
			// 	})
			// }
	};

	var vegeta = {
		hp: 115, // Health Points
		cp: 10, // Combat Power (Attack Power)
		counterHp: 8, // Counter Attack Power
	};

		var frieza = {
		hp: 125, // Health Points
		cp: 15, // Combat Power (Attack Power)
		counterHp: 14, // Counter Attack Power
	};

		var perfectCell = {
		hp: 135, // Health Points
		cp: 18, // Combat Power (Attack Power)
		counterHp: 12, // Counter Attack Power

	};

	// Probably need more variable, just can't think of them right now... Come back to this later

//***************************************************************************************************************
//***************************************************************************************************************	

// FUNCTIONS

	// Need an .on("click") function to select player 1 and player 2. 
		// Pick Player 1, push the character to the battlefield with attributes.  Use character object?
		// Pick Player 2, push the character to the battlefield with attributes.  Use character object?
		// How in the world to do this...

	// Select a player 1
		// No idea where to start
			// $("#locker-room").on("click", function()) {


			// }

//**************************************************************************************************************
//**************************************************************************************************************

// GAME LOGIC
	
	// Oh boy... where to begin...

$(document).ready(function() {







});