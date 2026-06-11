const pesan = `

Hai...
Kalau kamu sedang membaca ini,
artinya aku memberanikan diri untuk menyampaikan sesuatu yang mungkin tidak mudah.
Aku benar-benar minta maaf.
Aku sadar bahwa ada sikap dan tindakan yang mungkin membuatmu kecewa.
Aku tidak bisa mengubah masa lalu.
Tetapi aku bisa belajar agar menjadi pribadi yang lebih baik.
Terima kasih sudah meluangkan waktu untuk membaca semuanya.

❤️
`;

let i = 0;

const gambar = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg"
];

let indexFoto = 0;

function bukaSurat() {

    document.querySelector(".hero").style.display = "none";
    document.getElementById("surat").style.display = "block";

    ketik();

    setInterval(gantiFoto, 5000);

    setTimeout(() => {
        document.getElementById("lastMessage").style.display = "block";
    }, 50000);

    setTimeout(() => {

    document.getElementById("secretBox").style.display = "block";

}, 70000);

}

function ketik() {

    if (i < pesan.length) {

        document.getElementById("typing").innerHTML += pesan.charAt(i);

        i++;

        setTimeout(ketik, 35);

    }

}

function gantiFoto() {

    indexFoto++;

    if (indexFoto >= gambar.length) {
        indexFoto = 0;
    }

    document.getElementById("slide").src = gambar[indexFoto];

}

function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (music.paused) {

        music.play();

        btn.innerHTML = "⏸️ Pause Musik";

    } else {

        music.pause();

        btn.innerHTML = "🎵 Putar Musik";

    }

}

function buatHati() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 15) + "px";

    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(buatHati, 2500);

let persen = 0;

const loading = setInterval(() => {

    persen++;

    document.getElementById("progress").style.width = persen + "%";

    if (persen >= 100) {

        clearInterval(loading);

        document.getElementById("loading").style.display = "none";

    }

}, 30);


function bukaPesanTerakhir(){

    document.getElementById("lastMessage").style.display="block";

    document.getElementById("secretBox").style.display="none";

}