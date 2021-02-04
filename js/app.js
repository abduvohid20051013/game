let pScore = 0;
let cScore = 0;

let options = document.querySelectorAll('.tanlov button');
let playerHand = document.querySelector('.hand-player');
let computerHand = document.querySelector('.hand-computer');

let computerOptions = ["tosh", "qaychi", "qogoz"];

options.forEach(option => {
	option.addEventListener("click", function() {
		let computerNumber = Math.floor(Math.random() * 3);
		let computerChoice = computerOptions[computerNumber];

		compareHands(this.textContent, computerChoice);


		playerHand.src = `./img/${this.textContent}.svg`;
		computerHand.src = `./img/${computerChoice}.svg`;
	});
});

function updateScore() {
	let playerScore = document.querySelector('.player-score p');
	let computerScore = document.querySelector('.computer-score p');
	playerScore.textContent = pScore;
	computerScore.textContent = cScore;
}

function compareHands(playerChoice, computerChoice) {
	let winner = document.querySelector('.oyinchi');
	if(playerChoice === computerChoice){
		winner.textContent = '! Durang !'
		return;
	}
	if (playerChoice === 'tosh') {
		if(computerChoice === 'qaychi') {
			winner.textContent = 'Tabriklaymiz siz yutdingiz!'
			pScore++;
			updateScore();
		}else {
			winner.textContent = 'Afsuski siz yutqazdingiz!'
			cScore++;
			updateScore();
		}
	}
	if (playerChoice === 'qaychi') {
		if(computerChoice === 'qogoz') {
			winner.textContent = 'Tabriklaymiz siz yutdingiz!'
			pScore++;
			updateScore();
		}else {
			winner.textContent = 'Afsuski siz yutqazdingiz!'
			cScore++;
			updateScore();
		}
	}
	if (playerChoice === 'qogoz') {
		if(computerChoice === 'tosh') {
			winner.textContent = 'Tabriklaymiz siz yutdingiz!'
			pScore++;
			updateScore();
		}else {
			winner.textContent = 'Afsuski siz yutqazdingiz!'
			cScore++;
			updateScore();
		}
	}
	// function color() {
	// 	if (winner.textContent === 'Afsuski siz yutqazdingiz!') {
	// 		winner.style.color = 'red'
	// 	}
	// 	else if (winner.textContent === 'Tabriklaymiz siz yutdingiz!'){
	// 		winner.style.color = 'green'
	// 	}else if (winner.textContent === '! Durang !') {
	// 		winner.style.color = 'orange'
	// 	}else {
	// 		winner.style.color = 'black'
	// 	}

	// }

	// console.log(color());
}
