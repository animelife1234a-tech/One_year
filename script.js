document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       Smooth Scroll
    ============================== */
    const enterBtn = document.getElementById("enter-btn");
    const reasonsSection = document.getElementById("timeline");

    if (enterBtn && reasonsSection) {
        enterBtn.addEventListener("click", () => {
            reasonsSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    /* ==============================
       Music Toggle
    ============================== */
    const music = document.getElementById("bg-music");
    const toggleBtn = document.getElementById("music-toggle");
    let isPlaying = false;

    if (music && toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            if (isPlaying) {
                music.pause();
                toggleBtn.innerText = "🎵";
            } else {
                music.play();
                toggleBtn.innerText = "⏸";
            }
            isPlaying = !isPlaying;
        });
    }

   /* ==============================
   SMOOTH 3-IMAGE CAROUSEL
============================== */

const imageFolder = "slideshow-image";
const totalSlides = 35;

let currentIndex = 1;
let isAnimating = false;

const leftImg = document.getElementById("left-img");
const centerImg = document.getElementById("center-img");
const rightImg = document.getElementById("right-img");
const carousel = document.querySelector(".carousel-3");

function updateImages() {
    const leftIndex = currentIndex === 1 ? totalSlides : currentIndex - 1;
    const rightIndex = currentIndex === totalSlides ? 1 : currentIndex + 1;

    leftImg.src = `${imageFolder}/photo (${leftIndex}).jpeg`;
    centerImg.src = `${imageFolder}/photo (${currentIndex}).jpeg`;
    rightImg.src = `${imageFolder}/photo (${rightIndex}).jpeg`;
}

function moveCarousel() {
    if (isAnimating) return;
    isAnimating = true;

    carousel.style.transition = "transform 1s ease, opacity 1s ease";
    carousel.style.transform = "translateX(-40px)";
    carousel.style.opacity = "0.8";

    setTimeout(() => {
        currentIndex++;
        if (currentIndex > totalSlides) currentIndex = 1;

        updateImages();

        carousel.style.transform = "translateX(0)";
        carousel.style.opacity = "1";

        setTimeout(() => {
            isAnimating = false;
        }, 600);

    }, 300);
}

updateImages();
setInterval(moveCarousel, 3000);
    /* ==============================
       Easter Egg
    ============================== */

    let typed = "";
    const secretWord = "changulal";
    const modal = document.getElementById("secret-modal");
    const closeModal = document.getElementById("close-modal");

    document.addEventListener("keydown", (e) => {
        typed += e.key.toLowerCase();

        if (typed.length > secretWord.length) {
            typed = typed.slice(-secretWord.length);
        }

        if (typed === secretWord && modal) {
            modal.classList.add("active");
            typed = "";
        }
    });

    if (closeModal && modal) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove("active");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }

    /* ==============================
       Random Reasons
    ============================== */

    const reasonBtn = document.getElementById("reason-btn");
    const reasonText = document.getElementById("reason-text");

    if (reasonBtn && reasonText && typeof reasons !== "undefined") {
        reasonBtn.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * reasons.length);
            reasonText.innerText = reasons[randomIndex];
        });
    }

});
/* ==============================
   Timeline Reveal Animation
============================== */

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";
    observer.observe(item);
});

/* ==============================
   Countdown Timer
============================== */

// Set meeting date (May 9, 2026 at 00:00 IST)
const meetingDate = new Date("May 9, 2026 00:00:00 GMT+0530").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date().getTime();
    const gap = meetingDate - now;

    if (gap <= 0) {
        daysEl.innerText = "00";
        hoursEl.innerText = "00";
        minutesEl.innerText = "00";
        secondsEl.innerText = "00";
        return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, "0");
    hoursEl.innerText = String(hours).padStart(2, "0");
    minutesEl.innerText = String(minutes).padStart(2, "0");
    secondsEl.innerText = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ==============================
   SECRET SYSTEM (FIXED & CLEAN)
============================== */

let clickCount = 0;
let deepArmed = false;
let finalClickCount = 0;

const secretInput = document.getElementById("secret-input");



/* ===== AUTO FOCUS INPUT ON MOBILE ===== */
if (window.innerWidth <= 768 && secretInput) {
    setTimeout(() => {
        secretInput.focus();
    }, 800);
}

if (window.innerWidth <= 768 && secretInput) {
    secretInput.placeholder = "Type something special at the end…";
}





const deeperBtn = document.getElementById("deeper-btn");
const deepSecret = document.getElementById("deep-secret");
const closeDeep = document.getElementById("close-deep");
const finalYear = document.getElementById("final-year");
const yearTwoSection = document.getElementById("year-two");
const growthLetter = document.getElementById("growth-letter");
const finishLetter = document.getElementById("finish-letter");

/* ================= HIDDEN INPUT TRIGGER ================= */

document.body.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 5 && secretInput) {
        secretInput.classList.add("active");
        secretInput.focus();
    }

    setTimeout(() => {
        clickCount = 0;
    }, 2000);
});

/* ================= TYPE SECRET WORD ================= */

if (secretInput) {
    secretInput.addEventListener("input", () => {
        if (secretInput.value.toLowerCase() === "changulal") {
            secretInput.value = "";
            secretInput.classList.remove("active");

            const modal = document.getElementById("secret-modal");
            if (modal) modal.classList.add("active");
        }
    });
}

/* ================= ARM DEEP UNLOCK ================= */

if (deeperBtn) {
    deeperBtn.addEventListener("click", () => {
        const modal = document.getElementById("secret-modal");
        if (modal) modal.classList.remove("active");
        deepArmed = true;
    });
}

/* ================= TRIPLE CLICK TIMELINE ================= */

if (finalYear) {
    finalYear.addEventListener("click", () => {

        if (!deepArmed) return;

        finalClickCount++;

        if (finalClickCount === 3) {
            if (deepSecret) deepSecret.classList.add("active");
            finalClickCount = 0;
        }

        setTimeout(() => {
            finalClickCount = 0;
        }, 1500);
    });
}

/* ================= CLOSE DEEP → SHOW YEAR 2 ================= */

if (closeDeep) {
    closeDeep.addEventListener("click", () => {

        if (deepSecret) deepSecret.classList.remove("active");

        if (yearTwoSection) {
            yearTwoSection.classList.add("active");

            setTimeout(() => {
                yearTwoSection.scrollIntoView({ behavior: "smooth" });
            }, 400);
        }
    });
}

/* ================= YEAR 2 REVEAL ================= */

const yearTwoBtn = document.getElementById("year-two-btn");

if (yearTwoBtn) {
    yearTwoBtn.addEventListener("click", () => {

        yearTwoBtn.style.display = "none";

        const lines = document.querySelectorAll(".reveal-line");

        let delay = 0;

        lines.forEach(line => {
            setTimeout(() => {
                line.classList.add("show");
            }, delay);
            delay += 2000;
        });

        setTimeout(() => {
            if (growthLetter) {
                growthLetter.classList.add("active");
            }
        }, delay + 1000);
    });
}

/* ================= FINISH LETTER ================= */

if (finishLetter) {
    finishLetter.addEventListener("click", () => {

        if (growthLetter) {
            growthLetter.classList.remove("active");
        }

        const ultimate = document.querySelector(".ultimate-line");
        if (ultimate) {
            ultimate.classList.add("show");
        }
    });
}
const reasons = [

"Because your smile changes my entire mood instantly",
"Because the way your eyes soften makes me feel chosen",
"Because your plumpy lips form the cutest pout",
"Because your face lights up when you are excited",
"Because your open hair looks effortlessly beautiful",
"Because your ponytail gives you that focused look",
"Because your eyelashes make your eyes even more expressive",
"Because your teeth show fully when you laugh freely",
"Because your puppy face when sad makes me want to protect you",
"Because your smile after a fight feels precious",
"Because your eyes speak before you do",
"Because your sleepy face is the softest thing ever",
"Because when you tuck your hair behind your ear I lose focus",
"Because your natural face is my favorite version of you",
"Because your expressions are dramatic in the cutest way",
"Because your eyes sparkle when you talk about things you love",
"Because even after a year your face still feels new to me",
"Because your serious face still looks beautiful",
"Because your half smile when teasing me is dangerous",
"Because looking at you still feels like the first time",
"Because the tiny mole below your lips is like a secret signature",

"Because you notice when something feels off with me",
"Because when things get hard you steady yourself",
"Because you let me see your soft side",
"Because you feel deeply and love deeply",
"Because even when overwhelmed you stay",
"Because your clingy moments feel like being wanted",
"Because you defend me even when I am not there",
"Because you talk about your goals like promises",
"Because you want more from life and love",
"Because your dramatic moments always end with you choosing us",
"Because even upset you try to understand",
"Because you become calm when it truly matters",
"Because you balance strength and softness perfectly",
"Because loving you feels real and grounded",

"Because we argue but we always return",
"Because sorry has never been too big for us",
"Because we survived heavy days",
"Because distance tested us but did not break us",
"Because we fix things instead of ignoring them",
"Because we saw each other at our worst and stayed",
"Because every rough phase made us stronger",
"Because patience won over ego",
"Because planning to meet feels inevitable",
"Because we built something real not perfect",
"Because no matter how many clashes we choose us",

"Because when I doubted myself you did not",
"Because during my struggle you stayed steady",
"Because you did not treat my low phase like a burden",
"Because you stayed patient when I was distant",
"Because you loved versions of me I am not proud of",
"Because you believed in my future early",
"Because your reassurance felt stable",
"Because you never used my struggles against me",
"Because you stood beside me while I was building",
"Because you loved the process not just the result",

"Because your teedhi meedhi selfies are still perfect",
"Because you send random pictures and expect me to survive",
"Because your jealous moments are secretly cute",
"Because you randomly sing baby shark do do",
"Because you call me Changulal like it is official",
"Because your ande jesa muh insults are somehow adorable",
"Because you overthink and then pretend you did not",
"Because even your chaos feels safe",

"Because living in the same city someday feels natural",
"Because building our careers side by side sounds right",
"Because planning something big together feels powerful",
"Because I see growth when I imagine us",
"Because airport selfies before our world tour feel real",
"Because success feels better shared with you",
"Because choosing you does not feel like sacrifice",
"Because my future somehow includes you",
"Because one year strengthened us",
"Because I would still choose you again"

];
