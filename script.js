/* =========================
   GREETING
========================= */

const hour = new Date().getHours();

const greeting =
    document.getElementById("greeting");


if (hour >= 5 && hour < 12) {

    greeting.textContent =
        "Good morning! ☀️ Start your day with good vibes.";

} else if (hour >= 12 && hour < 18) {

    greeting.textContent =
        "Good afternoon! 🌤️ Keep your energy going.";

} else if (hour >= 18 && hour < 22) {

    greeting.textContent =
        "Good evening! 🌙 Don't forget to relax.";

} else {

    greeting.textContent =
        "It's getting late! 🌙 Rest well and take care of yourself.";

}


/* =========================
   MOOD CHECKER
========================= */

const moods =
    document.querySelectorAll(".mood");

const moodResult =
    document.getElementById("moodResult");


moods.forEach(mood => {

    mood.addEventListener("click", () => {

        moods.forEach(item => {

            item.classList.remove("selected");

        });


        mood.classList.add("selected");


        const selectedMood =
            mood.dataset.mood;


        moodResult.textContent =
            `Mood kamu hari ini: ${selectedMood} 💗`;


        localStorage.setItem(
            "selectedMood",
            selectedMood
        );

    });

});


/* =========================
   DAILY HABITS
========================= */

const checkboxes =
    document.querySelectorAll(
        ".habit input"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const progressPercent =
    document.getElementById(
        "progressPercent"
    );


function updateProgress() {

    let completed = 0;


    checkboxes.forEach(
        (checkbox, index) => {

            if (checkbox.checked) {

                completed++;

            }


            localStorage.setItem(
                `habit${index}`,
                checkbox.checked
            );

        }
    );


    const percent =
        Math.round(
            (completed /
            checkboxes.length) * 100
        );


    progressBar.style.width =
        percent + "%";


    progressPercent.textContent =
        percent + "%";


    if (percent === 100) {

        progressPercent.textContent =
            "100% 🎉";

    }

}


checkboxes.forEach(
    checkbox => {

        checkbox.addEventListener(
            "change",
            updateProgress
        );

    }
);


/* LOAD HABITS */

checkboxes.forEach(
    (checkbox, index) => {

        const saved =
            localStorage.getItem(
                `habit${index}`
            );


        if (saved === "true") {

            checkbox.checked = true;

        }

    }
);


updateProgress();


/* =========================
   QUOTES
========================= */

const quotes = [

    "You don't have to be perfect. Just keep going. 🌷",

    "Small progress is still progress. ✨",

    "Your future self will thank you. 💗",

    "Be proud of how far you've come. 🌈",

    "Today is a new chance to grow. 🌱",

    "Take it one step at a time. 🦋",

    "You are doing better than you think. 💕",

    "Protect your peace and enjoy your journey. ☁️",

    "Believe in yourself a little more today. ⭐",

    "Your vibe matters. Make it a good one! 🪩"

];


function newQuote() {

    const random =
        Math.floor(
            Math.random() *
            quotes.length
        );


    document.getElementById(
        "quoteText"
    ).textContent =
        `"${quotes[random]}"`;

}


/* =========================
   JOURNAL
========================= */

const journalText =
    document.getElementById(
        "journalText"
    );


const saveMessage =
    document.getElementById(
        "saveMessage"
    );


journalText.value =
    localStorage.getItem(
        "myJournal"
    ) || "";


function saveJournal() {

    localStorage.setItem(
        "myJournal",
        journalText.value
    );


    saveMessage.textContent =
        "✓ Journal berhasil disimpan!";


    setTimeout(() => {

        saveMessage.textContent = "";

    }, 2500);

}


/* =========================
   DARK MODE
========================= */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


const savedTheme =
    localStorage.getItem(
        "theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            themeBtn.textContent =
                "☀️";


            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.textContent =
                "🌙";


            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);