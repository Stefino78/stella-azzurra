// Password corretta
const correctPassword = "password123"; // Cambia con la tua password

// Funzione per verificare la password
function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === correctPassword) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("homepage").style.display = "block";
    document.getElementById("startup-sound").play();
  } else {
    alert("Password errata!");
  }
}

// Aggiungi i link ai video (sostituisci con i tuoi link YouTube)
const videos = {
  "under-16": [
    "https://www.youtube.com/embed/video1",
    "https://www.youtube.com/embed/video2"
  ],
  "under-18": [
    "https://www.youtube.com/embed/video3",
    "https://www.youtube.com/embed/video4"
  ],
  "prima-divisione": [
    "https://www.youtube.com/embed/video5",
    "https://www.youtube.com/embed/video6"
  ]
};

// Popola le categorie con i video
for (const category in videos) {
  const grid = document.getElementById(category);
  videos[category].forEach(video => {
    const iframe = document.createElement("iframe");
    iframe.src = video;
    grid.appendChild(iframe);
  });
}
