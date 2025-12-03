document.addEventListener("DOMContentLoaded", () => {
    createHearts();
    document.getElementById("questionContainer").style.display = "none";
});

// Floating Hearts Generator
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');

    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️ 🫶";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 400);
}

function showQuestions() {
    document.querySelector(".heartfelt-message").style.display = "none";
    document.querySelector(".continue-button-container").style.display = "none";

    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("question1").style.display = "block";
}

function nextQuestion(answer, number) {

    document.getElementById(`question${number}`).style.display = "none";

    if (number === 2) {
        document.getElementById("finalMessage").style.display = "block";

        if (answer === "yes") {
            finalText(
                "  You mean everything to me I love khupppppp jasttaaaa ❤️ "
            );

            confettiBlast();
        } else {
            finalText(
                "No T_T 😳 Not possible… better luck next time )"
            );
        }
    } else {
        document.getElementById(`question${number + 1}`).style.display = "block";
    }
}

function finalText(text) {
    let element = document.getElementById("responseMessage");
    element.innerHTML = text;
}

// Confetti explosion when she says YES
function confettiBlast() {
    confetti({
        particleCount: 200,
        spread: 90,
        gravity: 0.7,
        origin: { y: 0.6 }
    });
}
