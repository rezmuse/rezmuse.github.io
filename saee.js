document.addEventListener("DOMContentLoaded", () => {
    createHearts();

    const qContainer = document.getElementById("questionContainer");
    if (qContainer) qContainer.style.display = "none";
});

/* Floating Hearts Generator */
function createHearts() {
    const heartsContainer = document.querySelector(".hearts");
    if (!heartsContainer) return;

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // clean heart symbol
        heart.innerHTML = "❤️";

        // random styles
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = 18 + Math.random() * 18 + "px";
        heart.style.opacity = Math.random() * 0.4 + 0.6;

        heartsContainer.appendChild(heart);

        // remove after animation
        setTimeout(() => heart.remove(), 6500);
    }, 450);
}

/* Start Questions */
function showQuestions() {
    const message = document.querySelector(".heartfelt-message");
    const continueBtn = document.querySelector(".continue-button-container");
    const qContainer = document.getElementById("questionContainer");
    const q1 = document.getElementById("question1");

    if (message) message.style.display = "none";
    if (continueBtn) continueBtn.style.display = "none";
    if (qContainer) qContainer.style.display = "block";
    if (q1) q1.style.display = "block";
}

/* Question Flow */
function nextQuestion(answer, number) {
    const currentQ = document.getElementById(`question${number}`);
    if (currentQ) currentQ.style.display = "none";

    if (number === 2) {
        const finalMsg = document.getElementById("finalMessage");
        if (finalMsg) finalMsg.style.display = "block";

        if (answer === "yes") {
            finalText("You mean everything to me... I love you soooo much ❤️");
            confettiBlast();
        } else {
            finalText("Nooo 😭 Not possible... please try again 😔");
        }
    } else {
        const nextQ = document.getElementById(`question${number + 1}`);
        if (nextQ) nextQ.style.display = "block";
    }
}

/* Final Text */
function finalText(text) {
    const element = document.getElementById("responseMessage");
    if (element) element.innerHTML = text;
}

/* Confetti Effect */
function confettiBlast() {
    if (typeof confetti !== "function") {
        console.warn("⚠️ Confetti library missing.");
        return;
    }

    confetti({
        particleCount: 200,
        spread: 100,
        gravity: 0.7,
        origin: { y: 0.6 }
    });
}
