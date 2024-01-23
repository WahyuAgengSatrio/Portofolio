document.addEventListener("DOMContentLoaded", function() {
    const fadeInLink = document.getElementById("fadeInLink");
    fadeInLink.addEventListener("click", function(event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      
      const url = this.getAttribute("href");
      document.body.style.opacity = 0; // Mengubah opacity body menjadi 0
      
      setTimeout(function() {
        window.location.href = url; // Mengarahkan ke halaman tujuan setelah efek fade
      }, 500); // Waktu delay sebelum mengarahkan ke halaman tujuan (dalam milidetik)
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded"); /* Tambahkan kelas 'loaded' ke body setelah halaman dimuat */
  });
  
  