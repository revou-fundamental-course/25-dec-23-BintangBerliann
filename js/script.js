document.addEventListener('DOMContentLoaded', function () {

    // Sembunyikan tombol reset pada awalnya
    document.getElementById('reset-luas-button').style.display = 'none';
    document.getElementById('reset-keliling-button').style.display = 'none';

    // Fungsi untuk menampilkan tombol reset
    function showResetButton(buttonId) {
        document.getElementById(buttonId).style.display = 'inline-block';
    }

    // Fungsi untuk menghitung luas segitiga
    document.getElementById('hitung-luas-button').addEventListener('click', function () {
        var alas = parseFloat(document.getElementById('input-alas').value);
        var tinggi = parseFloat(document.getElementById('input-tinggi').value);
        var hasilLuasElement = document.getElementById('hasil-luas');

        if (!isNaN(alas) && !isNaN(tinggi)) {
            var luas = 0.5 * alas * tinggi;
            var rumusLuas = 'Luas Segitiga: 1/2 x ' + alas + ' x ' + tinggi + ' = ' + luas;
            hasilLuasElement.textContent = rumusLuas;
            showResetButton('reset-luas-button');
        } else {
            hasilLuasElement.textContent = 'Masukkan nilai alas dan tinggi dengan benar.';
        }
    });

    // Fungsi untuk menghitung keliling segitiga
    document.getElementById('hitung-keliling-button').addEventListener('click', function () {
        var sisiA = parseFloat(document.getElementById('input-sisi-a').value);
        var sisiB = parseFloat(document.getElementById('input-sisi-b').value);
        var sisiC = parseFloat(document.getElementById('input-sisi-c').value);
        var hasilKelilingElement = document.getElementById('hasil-keliling');

        if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
            var keliling = sisiA + sisiB + sisiC;
            var rumusKeliling = 'Keliling Segitiga: ' + sisiA + ' + ' + sisiB + ' + ' + sisiC + ' = ' + keliling;
            hasilKelilingElement.textContent = rumusKeliling;
            showResetButton('reset-keliling-button');
        } else {
            hasilKelilingElement.textContent = 'Masukkan nilai sisi A, B, dan C dengan benar.';
        }
    });

    // Fungsi untuk mereset input dan hasil
    document.getElementById('reset-luas-button').addEventListener('click', function () {
        document.getElementById('input-alas').value = '';
        document.getElementById('input-tinggi').value = '';
        document.getElementById('hasil-luas').textContent = '';
        this.style.display = 'none';
    });

    // Fungsi untuk mereset input dan hasil
    document.getElementById('reset-keliling-button').addEventListener('click', function () {
        document.getElementById('input-sisi-a').value = '';
        document.getElementById('input-sisi-b').value = '';
        document.getElementById('input-sisi-c').value = '';
        document.getElementById('hasil-keliling').textContent = '';
        this.style.display = 'none';
    });

    // Fungsi untuk menscroll ke bagian tertentu
    function scrollToSection(sectionId) {
        var sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Menambahkan event listener untuk tombol Keliling Segitiga
    document.getElementById('nav-home-button').addEventListener('click', function () {
        scrollToSection('header'); // Change 'keliling-segitiga' to the actual ID of the Keliling section
    });

    // Menambahkan event listener untuk tombol navigasi luas segitiga
    document.getElementById('nav-luas-button').addEventListener('click', function () {
        scrollToSection('luas-segitiga');
    });

    // Menambahkan event listener untuk tombol navigasi keliling segitiga
    document.getElementById('nav-keliling-button').addEventListener('click', function () {
        scrollToSection('keliling-segitiga');
    });

    // Menambahkan event listener untuk tombol Luas Segitiga
    document.getElementById('button-luas').addEventListener('click', function () {
        scrollToSection('luas-segitiga');
    });

    // Menambahkan event listener untuk tombol Keliling Segitiga
    document.getElementById('button-keliling').addEventListener('click', function () {
        scrollToSection('keliling-segitiga');
    });
});