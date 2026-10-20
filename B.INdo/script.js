// Data Soal Pilihan Ganda HOTS (5 Soal, Opsi A-E)// Data Soal Pilihan Ganda HOTS (5 Soal, Opsi A-E)
const quizData = [
    {
        question: "1. Bacalah paragraf berikut:\n\"(1) Tingginya ketergantungan masyarakat pada energi fosil menimbulkan ancaman serius bagi kelestarian lingkungan dan stabilitas ekonomi jangka panjang. (2) Berdasarkan data Kementerian ESDM tahun 2023, konsumsi BBM nasional mencapai lebih dari 1,4 juta barel per hari, sementara cadangan minyak bumi Indonesia diperkirakan akan habis dalam kurun waktu 10 hingga 15 tahun ke depan jika tidak ditemukan cadangan baru. (3) Oleh karena itu, percepatan transisi menuju energi terbarukan seperti panel surya dan tenaga angin merupakan langkah imperatif yang tidak dapat ditunda lagi.\"\n\nFungsi hubungan antarkalimat dalam struktur teks eksposisi di atas adalah...",
        options: [
            "A. Kalimat (1) sebagai tesis, (2) sebagai argumentasi berbasis fakta pendukung, dan (3) sebagai penegasan ulang/rekomendasi.",
            "B. Kalimat (1) sebagai fakta, (2) sebagai tesis utama, dan (3) sebagai konjungsi kausalitas.",
            "C. Kalimat (1) sebagai argumentasi pendukung, (2) sebagai tesis, dan (3) sebagai koda naratif.",
            "D. Kalimat (1) sebagai opini implisit, (2) sebagai simpulan induktif, dan (3) sebagai deskripsi bagian.",
            "E. Kalimat (1) sebagai latar belakang, (2) sebagai gagasan penjelas, dan (3) sebagai tesis umum."
        ],
        correct: 0, // A
        explanation: "Kalimat (1) memuat pandangan/isu umum (Tesis), kalimat (2) menyajikan data konkret empiris sebagai pembuktian (Argumentasi/Fakta), dan kalimat (3) memuat dorongan/simpulan logis (Penegasan Ulang/Rekomendasi)."
    },
    {
        question: "2. Cermati kalimat berikut:\n\"Belajar bagi seorang pelajar ibarat mengasah pisau setiap hari. Sekalipun pisaunya sudah tajam, jika tidak diasah secara berkala, lambat laun ketajamannya akan tumpul dan sulit digunakan.",
        options: [
            "A. Pola Perbandingan",
            "B. Pola Analogi",
            "C. Pola Klasifikasi",
            "D. Pola Proses",
            "E. Pola Contoh",
        ],
        correct: 1, // B
        explanation: "membandingkan dua hal yang berbeda bentuk atau wujudnya, namun memiliki kesamaan fungsi atau sifat dasar."
    },
    {
        question: "3. Bacalah kutipan argumentasi eksposisi yang rumpang berikut:\n\"Penggunaan plastik sekali pakai terus meningkat secara signifikan setiap tahunnya. [...] plastik terurai menjadi mikroplastik yang mencemari rantai makanan laut, [...] kesehatan manusia yang mengonsumsi hasil laut tersebut turut terancam dalam jangka panjang.\"\n\nPasangan konjungsi kausalitas dan argumentatif yang paling tepat untuk mengisi bagian rumpang tersebut adalah...",
        options: [
            "A. Walaupun demikian ; akan tetapi",
            "B. Bahkan ; akibatnya",
            "C. Selain itu ; meskipun",
            "D. Akibatnya ; sebaliknya",
            "E. Oleh karena itu ; padahal"
        ],
        correct: 1, // B
        explanation: "Kata 'Bahkan' berfungsi sebagai konjungsi antarkalimat untuk menguatkan kadar masalah (proses mikroplastik), sedangkan 'akibatnya' menyatakan hubungan sebab-akibat dampak akhir bagi kesehatan manusia."
    },
    {
        question: "4. Apa itu Analitik dalm teks eksposisi",
        options: [
            "A. Menceritakan kembali sebuah peristiwa atau kejadian secara kronologis dari awal hingga akhir cerita.",
            "B. Mengungkapkan suatu hal penting dan mengajak pembaca untuk mendalami sesuatu.",
            "C. Menggambarkan objek atau suasana tertentu secara detail menggunakan panca indra agar pembaca seolah-olah melihatnya langsung.",
            "D. Menyajikan dialog antartokoh guna menyampaikan pesan moral atau nasihat kepada pembaca.",
            "E. Memaparkan langkah-langkah atau tahapan kerja secara berurutan dalam membuat suatu produk.",
        ],
        correct: 1, // B
    },
    {
        question: "5. Bacalah kutipan teks eksposisi rumpang berikut untuk menentukan kalimat mana yang paling valid dikategorikan sebagai fakta\n\"Pemerintah terus berupaya menggenjot transisi energi hijau demi menekan emisi karbon di Indonesia. [...]\"\n\nManakah kalimat lanjutan yang paling tepat dan akurat untuk dikategorikan sebagai fakta guna memperkuat paragraf tersebut?",
        options: [
            "A. PT PLN (Persero) mencatat penambahan kapasitas pembangkit listrik tenaga surya (PLTS) atap sebesar 150 megawatt sepanjang semester pertama tahun 2024.",
            "B. Menurut pengamatan sebagian besar masyarakat, kualitas udara di kota-kota besar saat ini sudah jauh lebih bersih dibandingkan tahun-tahun sebelumnya.",
            "C. Seharusnya seluruh perusahaan swasta diwajibkan beralih menggunakan energi ramah lingkungan agar pemanasan global dapat segera dihentikan.",
            "D. Diperkirakan pada tahun 2045 nanti, seluruh kendaraan pribadi di Indonesia akan sepenuhnya digantikan oleh mobil listrik berbasis baterai.",
            "E. Kebijakan transisi energi hijau merupakan langkah paling bijaksana yang pernah diambil oleh pemerintah dalam sejarah Republik Indonesia.",
        ],
        correct: 0, // A
        explanation: "memuat data empiris yang spesifik, berasal dari instansi resmi (PT PLN), serta dapat diverifikasi kebenarannya secara objektif (mengandung angka kuantitatif dan kurun waktu yang jelas)."
    }
];

// Element Selector
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const questionCountText = document.getElementById('question-count');
const progressPercentText = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const explanationBox = document.getElementById('explanation-box');
const explanationIcon = document.getElementById('explanation-icon');
const explanationTextTitle = document.getElementById('explanation-text-title');
const explanationContent = document.getElementById('explanation-content');

// Variable State
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// Inisialisasi Kuis
function loadQuestion() {
    hasAnswered = false;
    nextBtn.disabled = true;
    explanationBox.style.display = 'none';

    const currentQuiz = quizData[currentQuestionIndex];

    // Update Progress
    const totalQuestions = quizData.length;
    const progressPercent = Math.round(((currentQuestionIndex) / totalQuestions) * 100);
    questionCountText.textContent = `Soal ${currentQuestionIndex + 1} dari ${totalQuestions}`;
    progressPercentText.textContent = `${progressPercent}%`;
    progressFill.style.width = `${progressPercent}%`;

    // Render Pertanyaan
    questionText.innerText = currentQuiz.question;

    // Render Pilihan Jawaban
    optionsContainer.innerHTML = '';
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        
        const label = option.substring(0, 2); // Mengambil A., B., C., dst.
        const text = option.substring(3);     // Mengambil isi teks

        button.innerHTML = `<span class="label">${label}</span><span class="text">${text}</span>`;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

// Handler Saat Opsi Dipilih
function selectOption(selectedIndex) {
    if (hasAnswered) return; // Mencegah klik ganda
    hasAnswered = true;

    const currentQuiz = quizData[currentQuestionIndex];
    const optionButtons = optionsContainer.children;

    // Nonaktifkan semua tombol agar tidak bisa diubah
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].classList.add('disabled');
    }

    // Cek Jawaban Benar / Salah
    if (selectedIndex === currentQuiz.correct) {
        score++;
        optionButtons[selectedIndex].classList.add('correct');
        showExplanation(true, currentQuiz.explanation);
    } else {
        optionButtons[selectedIndex].classList.add('wrong');
        // Tandai juga mana pilihan yang benar
        optionButtons[currentQuiz.correct].classList.add('correct');
        showExplanation(false, currentQuiz.explanation);
    }

    nextBtn.disabled = false;
}

// Menampilkan Pembahasan/Umpan Balik Instan
function showExplanation(isCorrect, text) {
    explanationBox.style.display = 'block';
    
    if (isCorrect) {
        explanationBox.className = 'explanation-box correct-bg';
        explanationIcon.textContent = '✓';
        explanationTextTitle.textContent = 'Jawaban Kamu Benar!';
    } else {
        explanationBox.className = 'explanation-box wrong-bg';
        explanationIcon.textContent = '✕';
        explanationTextTitle.textContent = 'Jawaban Kamu Salah!';
    }
    
    explanationContent.textContent = text;
}

// Handler Tombol Lanjut
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Menampilkan Layar Hasil
function showResults() {
    quizBox.classList.add('hidden');
    resultBox.classList.remove('hidden');

    const totalQuestions = quizData.length;
    const finalScore = Math.round((score / totalQuestions) * 100);

    // Update Progress Bar Ke 100%
    progressPercentText.textContent = `100%`;
    progressFill.style.width = `100%`;

    document.getElementById('score-badge').textContent = finalScore;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('wrong-count').textContent = totalQuestions - score;

    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');

    if (finalScore >= 80) {
        resultTitle.textContent = "Sangat Luar Biasa!";
        resultDesc.textContent = "Pemahaman penalaran kritis dan analisis Teks Eksposisi Anda sangat tajam.";
    } else if (finalScore >= 60) {
        resultTitle.textContent = "Cukup Baik!";
        resultDesc.textContent = "Pemahaman Anda cukup oke, tetapi perlu lebih teliti lagi pada kecermatan bahasa dan struktur kompleks.";
    } else {
        resultTitle.textContent = "Perlu Latihan Lagi";
        resultDesc.textContent = "Soal tingkat tinggi (HOTS) butuh ketelitian ekstra. Pelajari kembali pembahasannya dan coba lagi!";
    }
}

// Handler Tombol Ulangi Kuis
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.classList.add('hidden');
    quizBox.classList.remove('hidden');
    loadQuestion();
});

// Jalankan kuis saat halaman pertama kali dimuat
loadQuestion();