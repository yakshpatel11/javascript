let addBtnbtn = document.getElementById("addbtn");
let Input = document.getElementById("Input");
let preview = document.getElementById("preview");

addBtn.addeventListener('click', () => {
    preview.textContent = Input.value;
})

upBtn.addeventListener('click', () => {
    const newText = Input.value;
    preview.textContent = newText.toupperCase();
})

clearBtn.addeventListener('click', () => {
    Input.value = " ";
    preview.textContent = " ";
})
preview.textContent = newtext;
Char.textContent = "total characters: " + newText.length;
const textArray = newText.split(" ");
const wordCount = textArray.filter(word => word.length > 0).length;
Time.textContent = "time to read: " + textArray.length * 0.25 + " seconds";