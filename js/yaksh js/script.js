const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-btn");

btn.addEventListener("click", () => {
    const color = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = "#" + color;
    btn.innerText = "#" + color;
});

copyBtn.addEventListener("click", () => {
    const colorCode = btn.innerText;
    navigator.clipboard.writeText(colorCode).then(() => {
        alert("Copied the text: " + colorCode);
    });
});