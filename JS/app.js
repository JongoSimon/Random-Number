// Random number generator

const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");
const p1Labels = [
    document.getElementById("p1_label1"),
    document.getElementById("p1_label2"),
    document.getElementById("p1_label3")
];
const p2Labels = [
    document.getElementById("p2_label1"),
    document.getElementById("p2_label2"),
    document.getElementById("p2_label3")
];
const p1ScoreLabel = document.getElementById("p1_score");
const p2ScoreLabel = document.getElementById("p2_score");
const winnerLabel = document.getElementById("winner");
const resetButton = document.getElementById("resetButton");

const min = 1;
const max = 6;

let p1Score = null;
let p2Score = null;

p1Button.onclick = function() {
    p1Score = 0;
    for (let i = 0; i < 3; i++) {
        const roll = Math.floor(Math.random() * (max - min + 1)) + min;
        p1Labels[i].textContent = roll;
        p1Score += roll;
    }
    p1ScoreLabel.textContent = p1Score;
    p1Button.disabled = true;
    checkWinner();
};

p2Button.onclick = function() {
    p2Score = 0;
    for (let i = 0; i < 3; i++) {
        const roll = Math.floor(Math.random() * (max - min + 1)) + min;
        p2Labels[i].textContent = roll;
        p2Score += roll;
    }
    p2ScoreLabel.textContent = p2Score;
    p2Button.disabled = true;
    checkWinner();
};

function resetGame() {
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Score = null;
    p2Score = null;
    p1Labels.forEach(label => label.textContent = "");
    p2Labels.forEach(label => label.textContent = "");
    p1ScoreLabel.textContent = "";
    p2ScoreLabel.textContent = "";
    winnerLabel.textContent = "";
}

resetButton.onclick = resetGame;

function checkWinner() {
    if (p1Score !== null && p2Score !== null) {
        if (p1Score > p2Score) {
            winnerLabel.textContent = `Player 1 Wins! 🎉 (P1: ${p1Score} vs P2: ${p2Score})`;
        } else if (p2Score > p1Score) {
            winnerLabel.textContent = `Player 2 Wins! 🎉 (P1: ${p1Score} vs P2: ${p2Score})`;
        } else {
            winnerLabel.textContent = `It's a Tie! 🤝 (P1: ${p1Score} vs P2: ${p2Score})`;
        }
    }
}