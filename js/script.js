document.addEventListener('DOMContentLoaded', function() {

    // Fungsi untuk Menu Hamburger di mode mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animasi Hamburger
        hamburger.classList.toggle('toggle');
    });

    // Fungsi untuk Form Submission (memberi notifikasi)
    const form = document.querySelector('.form-container form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form untuk submit
            alert('Terima kasih! Pesan Anda telah kami terima.');
            form.reset(); // Mengosongkan form setelah submit
        });
    }

    // Fungsi Animasi Scroll (memunculkan elemen saat di-scroll)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    // Pilih semua elemen yang ingin diberi animasi
    const hiddenElements = document.querySelectorAll('.content-section, .card, .section-title, .section-subtitle');
    hiddenElements.forEach((el) => observer.observe(el));

    // Tambahkan CSS untuk animasi scroll ini di file style.css jika belum ada
    // CSS yang dibutuhkan:
    // .content-section, .card, etc {
    //     opacity: 0;
    //     transition: opacity 1s ease-out, transform 1s ease-out;
    //     transform: translateY(20px);
    // }
    // .content-section.show, .card.show, etc.show {
    //     opacity: 1;
    //     transform: translateY(0);
    // }
    // (Untuk mempermudah, saya akan tambahkan CSS ini langsung ke file CSS di atas)
});