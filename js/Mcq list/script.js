{
    const mcqList = [
        [
            " 1. What is the capital of France?",
            " 2. Which planet is known as the Red Planet?",
            " 3. Who wrote the national anthem of India?",
            " 4. What is the largest mammal in the world?",
            " 5. Which color is a mix of red and white?",
            " 6. What is the currency of Japan?",
            " 7. How many continents are there in the world?",
            " 8. Which is the smallest prime number?",
            " 9. Which organ pumps blood in the human body?",
            " 10. Who is known as the Father of the Nation in India?"
        ]]

    const aswerList = [
        "Paris",
        "Mars",
        "Rabindranath Tagore",
        "Blue Whale",
        "Pink",
        "Yen",
        "Seven",
        "2",
        "Heart",
        "Mahatma Gandhi"
    ]
}

const Question = document.querySelector("#Question");
const form_check_label = document.querySelectorAll(".form-check-Label");
const btn = document.querySelector("#btn")
let currentIndex = 0;
function showQuestion(Index)
{
    Question.textContent = "0" + (Index + 1) + " " + mcqList[Index].Question;
    Options.forEach((option, i)=> {
        option.textContent = mcqList[Index].Options[i];
    })
}

button.addEventListener("click", () => {
    if (currentIndex < mcqList.Length) {
        showQuestion(currentIndex);

    }
    else {
        currentIndex = 0;
        showQuestion(currentIndex);
    }
})
showQuestion(currentIndex);

