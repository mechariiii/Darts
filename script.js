const dartboardCanvas = document.getElementById('dartboardCanvas');
const ctx = dartboardCanvas.getContext('2d');
const radius = dartboardCanvas.width / 2;
const resultDisplay = document.getElementById('result');
const targetFinishDisplay = document.getElementById('targetFinish');
let targetFinish = 0;

// تحميل الصورة
const dartboardImage = new Image();
dartboardImage.src = 'https://cdn.pixabay.com/photo/2012/04/01/18/38/dartboard-23938_1280.png';

// رسم لوحة الدارتس بالصورة
dartboardImage.onload = function() {
    ctx.drawImage(dartboardImage, 0, 0, dartboardCanvas.width, dartboardCanvas.height);
};

// حدث النقر على اللوحة
dartboardCanvas.addEventListener('click', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const distanceFromCenter = Math.sqrt(Math.pow(x - radius, 2) + Math.pow(y - radius, 2));

    let score = 0;
    if (distanceFromCenter < radius / 10) {
        score = 50; // bullseye
    } else if (distanceFromCenter < radius / 5) {
        score = 25; // outer bullseye
    } else {
        score = Math.floor(Math.random() * 20 + 1); // random score for simplicity
    }

    if (score === targetFinish) {
        resultDisplay.textContent = `Correct! You hit ${score}.`;
    } else {
        resultDisplay.textContent = `Wrong! You hit ${score}. Target was ${targetFinish}.`;
    }
});

// توليد Finish عشوائي
document.getElementById('randomFinish').addEventListener('click', function() {
    targetFinish = Math.floor(Math.random() * 50 + 1);
    targetFinishDisplay.textContent = `Target Finish: ${targetFinish}`;
});
