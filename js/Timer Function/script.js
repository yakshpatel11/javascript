const images = [
    "https://cdni.iconscout.com/illustration/premium/thumb/full-stack-developer-illustration-download-in-svg-png-gif-file-formats--binary-coding-design-digital-modern-technology-pack-development-illustrations-1651585.png",
    "https://miro.medium.com/v2/resize:fit:605/1*vTLOUrJWoo4Kzj7ly8o0jA.png",
    "https://software-engineering-certifications.github.io/full-stack-developer-certified-professional/img/full-stack.png",
    "https://www.iakademi.com/wp-content/uploads/2022/05/full-stack-developer-1.png",
    "https://cdni.iconscout.com/illustration/premium/thumb/full-stack-developer-illustration-download-in-svg-png-gif-file-formats--front-end-web-development-service-programming-pack-design-illustrations-3515696.png"
];

const img = document.getElementById("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const autoBtn = document.getElementById("auto");
const stopBtn = document.getElementById("stop");

let currentIndex = 0;
let autoPlayInterval = null;

function showImage() {
    img.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

function startAutoPlay() {
    if (!autoPlayInterval) {
        autoPlayInterval = setInterval(nextImage, 2000);
    }
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
}


nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
autoBtn.addEventListener("click", startAutoPlay);
stopBtn.addEventListener("click", stopAutoPlay);


showImage();