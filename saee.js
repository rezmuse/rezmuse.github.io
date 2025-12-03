document.addEventListener("DOMContentLoaded", () => {
    createHearts();
    document.getElementById("questionContainer").style.display = "none";
});

/* Floating Hearts Generator */
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');

    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");

        // cleaner & better looking hearts
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 18) + "px";
        heart.style.opacity = Math.random() * 0.4 + 0.6;

        heartsContainer.appendChild(heart);

        // remove AFTER animation ends (6s)
        setTimeout(() => heart.remove(), 6500);
    }, 450);
}

/* Start Questions */
function showQuestions() {
    document.querySelector(".heartfelt-message").style.display = "none";
    document.querySelector(".continue-button-container").style.display = "none";

    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("question1").style.display = "block";
}

/* Question Flow */
function nextQuestion(answer, number) {
    // hide current
    document.getElementById(`question${number}`).style.display = "none";

    // If last question
    if (number === 2) {
        document.getElementById("finalMessage").style.display = "block";

        if (answer === "yes") {
            finalText("You mean everything to me... I love you soooo much ❤️");
            confettiBlast();
        } else {
            finalText("Nooo 😭 Not possible... please try again 😔");
        }
    } else {
        // show next
        document.getElementById(`question${number + 1}`).style.display = "block";
    }
}

/* Final Text Printing */
function finalText(text) {
    let element = document.getElementById("responseMessage");
    element.innerHTML = text;
}

/* Confetti for YES */
function confettiBlast() {
    confetti({
        particleCount: 200,
        spread: 100,
        gravity: 0.7,
        origin: { y: 0.6 }
    });
}
