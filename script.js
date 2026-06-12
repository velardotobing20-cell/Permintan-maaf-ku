const pesan = `

hai sayang,

Aku tahu mungkin kata "maaf" saja tidak cukup untuk menghapus rasa kecewa yang sudah aku buat. Tapi dari lubuk hatiku yang paling dalam, aku benar-benar meminta maaf atas sikap dan kesalahanku.
Aku tidak pernah berniat menyakiti atau membuatmu merasa tidak dihargai. Aku sadar ada tindakan dan ucapan yang membuatmu terluka, dan aku bertanggung jawab atas itu. Terima kasih karena selama ini sudah bersabar menghadapi kekuranganku.
Aku tidak bisa mengubah apa yang sudah terjadi, tapi aku bisa berusaha menjadi pribadi yang lebih baik untukmu. Aku ingin belajar memperbaiki kesalahanku, mendengarkanmu lebih baik, dan menjaga hubungan ini dengan lebih dewasa.
Kalau kamu masih memberi aku kesempatan, aku akan membuktikan lewat tindakan, bukan hanya janji. Karena bagiku, kehilanganmu adalah hal yang paling tidak ingin terjadi.
Sekali lagi, maafkan aku. Aku sayang kamu.
Terima kasih sudah meluangkan waktu untuk membaca semuanya.

❤️
`;

let i = 0;

const gambar = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
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
