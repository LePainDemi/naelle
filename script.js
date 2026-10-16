const messages = [
    "Tu es sûre ?",
    "Vraiment sûre ??",
    "Réfléchis bien...",
    "S'il te plaît...",
    "Ok pas grave...",
    "Je rigole, dis oui s'il te plaît ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const question = document.querySelector('.question');
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    question.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.75}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}