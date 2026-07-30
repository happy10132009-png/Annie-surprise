// Password
function unlock() {
    let pass = document.getElementById("password").value;

    if (pass === "1505") {
        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "block";
        startTyping();
    } else {
        document.getElementById("error").innerHTML = "❌ Wrong Password";
    }
}

// Floating Hearts
for (let i = 0; i < 40; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    document.getElementById("hearts").appendChild(heart);
}

// Photo Slideshow
const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg"
];

let current = 0;

setInterval(() => {
    current++;
    if (current >= photos.length) current = 0;
    document.getElementById("slide").src = photos[current];
}, 2500);

// Typing Effect
const text =
"My Dear Annie ❤️ You are my happiness, my peace and my forever. Every heartbeat of mine whispers your name. I Love You Forever ❤️";

let i = 0;

function startTyping() {

    let box = document.getElementById("typing");

    let timer = setInterval(() => {

        box.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length)
            clearInterval(timer);

    }, 45);

}

// Love Letter
function showLetter() {

    document.getElementById("letter").style.display = "block";

}

// Proposal
function proposal() {

    document.getElementById("proposal").style.display = "block";

}

// Final Screen
function yes() {

    document.getElementById("proposal").style.display = "none";

    document.getElementById("final").style.display = "block";

