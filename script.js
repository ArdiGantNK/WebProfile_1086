const textElement = document.getElementById("textjalan");
const text = "Halo semua, namaku Aurizal";
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 150); // Kecepatan mengetik (dalam milidetik)
  } else {
    setTimeout(() => {
      textElement.innerHTML = ""; // Hapus teks setelah selesai
      index = 0;
      typeText(); // Ulangi lagi dari awal
    }, 1000); // Jeda sebelum mengulang
  }
}

typeText(); // Jalankan efek mengetik

document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".row-2 h3");

    if (text) { // Cek apakah elemen ada
        setInterval(() => {
            text.style.visibility = text.style.visibility === "hidden" ? "visible" : "hidden";
        }, 500); // Kedip setiap 0.5 detik
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("change");
    const body = document.body;
    const img = toggleButton.querySelector("img");
    const toast = document.getElementById("toast"); // Ambil elemen toast

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000); // Toast hilang setelah 2 detik
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        img.src = "img/sun.png";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            img.src = "img/sun.png";
            localStorage.setItem("darkMode", "enabled");
            showToast("Mode Gelap diaktifkan 🌙");
        } else {
            img.src = "img/moon.png";
            localStorage.setItem("darkMode", "disabled");
            showToast("Mode Terang diaktifkan ☀️");
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Mengambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validasi sederhana
    if (!name || !email || !message) {
      alert("Semua kolom harus diisi!");
      return;
    }

    // Membuat pesan yang akan dikirim ke WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Nomor WhatsApp tujuan 
    const whatsappNumber = "6282336995690"; 

    // Membuka WhatsApp di tab baru
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  });

  