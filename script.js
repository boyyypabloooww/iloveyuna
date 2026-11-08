const submitBtn = document.getElementById('submit-btn');
const userNameInput = document.getElementById('user-name');
const partnerNameInput = document.getElementById('partner-name');
const annivDateInput = document.getElementById('anniv-date');

const errorMsg = document.getElementById('error-msg');
const successMsg = document.getElementById('success-msg');
const formPanel = document.getElementById('form-panel');
const lovePanel = document.getElementById('love-panel');
const floatingContainer = document.getElementById('floating-container');

submitBtn.addEventListener('click', () => {
    const isNameFilled = userNameInput.value.trim() !== '';
    const partnerName = partnerNameInput.value.trim().toLowerCase();
    const annivDate = annivDateInput.value; 

    // Validasi: Pastikan nama diisi, pacar adalah "ryco", dan tanggal "1 Maret 2026"
    if (isNameFilled && partnerName === 'ryco' && annivDate === '2026-03-01') {
        
        errorMsg.classList.add('hidden');
        successMsg.classList.remove('hidden');
        
        // Delay sebentar sebelum ganti halaman
        setTimeout(() => {
            formPanel.classList.add('hidden');
            lovePanel.classList.remove('hidden');
            generateFloatingText();
        }, 1500);

    } else {
        successMsg.classList.add('hidden');
        errorMsg.classList.remove('hidden');
        
        // Reset animasi shake agar berfungsi saat diklik berulang kali
        errorMsg.style.animation = 'none';
        setTimeout(() => {
            errorMsg.style.animation = 'shake 0.4s ease-in-out';
        }, 10);
    }
});

function generateFloatingText() {
    const totalText = 50; 

    for (let i = 0; i < totalText; i++) {
        const span = document.createElement('span');
        span.innerText = "I Love You 💕";
        span.classList.add('floating-text');

        // Posisi Y vertikal acak (0% sampai 90%)
        span.style.top = `${Math.random() * 90}%`;

        // Ukuran font acak untuk variasi estetik
        span.style.fontSize = `${Math.random() * 3 + 1.5}rem`;

        // Durasi melintas acak (7 hingga 15 detik)
        const duration = Math.random() * 8 + 7;
        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `-${Math.random() * 10}s`;

        // Bagi dua arah pergerakan
        if (i % 2 === 0) {
            span.style.animationName = 'float-right';
        } else {
            span.style.animationName = 'float-left';
        }

        floatingContainer.appendChild(span);
    }
}