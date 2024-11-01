const btnRules = document.querySelector('.rules-btn');
const btnClose = document.querySelector('.close-btn');
const modalRules = document.querySelector('.modal');
const CHOICES =[
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "scissors",
        beats: "paper"
    },
]
const choiceButtons = document.querySelectorAll('.choice-btn')
const gameDiv = document.querySelector('.game')
const resultsDiv = document.querySelector('.results')
const resultDivs = document.querySelectorAll('.results_result')

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find((choice)=> choice.name === choiceName);
        choose(choice);
    });
});

function choose(choice) {
    const aichoice = aiChoose()
    displayResults([choice,aichoice]);
}

function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
            <div class="choice ${results[idx].name}">
                <img src ="images/icon-${results[idx].name}.svg" alt ="${results[idx].name}"/>
            </div> 
            ` ;
        }, idx *1000);
    });
    gameDiv.classList.toggle('hidden')
    resultsDiv.classList.toggle('hidden')
}

btnRules.addEventListener('click',() => {
    modalRules.classList.toggle('show-modal')
});
btnClose.addEventListener('click',() => {
    modalRules.classList.toggle('show-modal')
});