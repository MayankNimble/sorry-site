// ELEMENTS
const character = document.getElementById("character");
const dialog = document.getElementById("dialog");
const typing = document.getElementById("typing");
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

// MULTIPLE MESSAGES
const messages = [
`Dekho main blame nahi kar raha tujhe bas ek cheez clear karni hai  

jab main concern share karta hu aur tu usko ignore karke seedha “trust issues” bol deti hai  
to mujhe lagta hai meri baat ki value hi nahi hai  

main tujhe control nahi karna chahta babe  
par itna chahunga ki tu meri baat ko lightly dismiss na kare  

tu apni marzi se decision le sakti hai  
but thoda sa acknowledge kar diya kar ki meri concern valid ho sakti hai  

warna mujhe lagta hai main hi galat hu har baar🥲`,

`Sach bolu toh… main bas tujhe lose nahi karna chahta 🥺  
Kabhi kabhi overthink kar leta hu… par reason sirf tu hai ❤️`,

`Tu gussa ho sakti hai… ignore kar sakti hai…  
par please yeh mat sochna ki tu mere liye important nahi hai 💔`
];

// CURRENT INDEX
let currentMessage = 0;
let typingInterval = null;

// TYPE EFFECT (FIXED)
function typeText(text) {
  clearInterval(typingInterval); // stop previous typing
  typing.innerHTML = "";
  let i = 0;

  typingInterval = setInterval(() => {
    if (i < text.length) {
      typing.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 20);
}

// OPEN DIALOG + CHANGE MESSAGE
function openDialog() {
  dialog.style.display = "flex";

  typeText(messages[currentMessage]);

  // next message for next click
  currentMessage = (currentMessage + 1) % messages.length;
}

// EVENTS
character.onclick = openDialog;
openBtn.onclick = openDialog;

closeBtn.onclick = () => {
  dialog.style.display = "none";
};

// 🎵 MUSIC FIX (BEST POSSIBLE)
document.body.addEventListener("click", () => {
  music.muted = false;
  music.play().catch(() => {});
}, { once: true });
const toggle = document.getElementById("musicToggle");

toggle.onclick = () => {
  if (music.paused) music.play();
  else music.pause();
};
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";

  // random position
  heart.style.left = Math.random() * 100 + "vw";

  // random size
  heart.style.fontSize = (15 + Math.random() * 20) + "px";

  // random speed
  const duration = 3 + Math.random() * 3;
  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  // remove after animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// create hearts continuously
setInterval(createHeart, 300);
