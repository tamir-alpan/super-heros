function renderQuestions(questionList) {
    var container = document.querySelector(".questions")
    questionList.forEach(function (question) {
        var questionContainer = document.createElement("div")
        questionContainer.className = "questionContainer"
        var img = document.createElement("img")
        img.src = question.img
        questionContainer.onclick = onQuestionClick.bind(event, question);
        questionContainer.appendChild(img)
        container.appendChild(questionContainer)
    })
}

function onQuestionClick(question, e) {
    console.log(question)
    // TODO: use sweet alerts to open the dialog on question click
    // (copy from todo project render.js onOpenAddList function)
    // TODO: bonus: render the above question text in the dialog
}


function renderPlayer(player) {
    var container = document.querySelector(".character")
    var img = document.createElement("img")
    img.src = player.img
    var nameSpan = document.createElement("span")
    nameSpan.innerHTML = player.name 
    container.appendChild(nameSpan)   
    container.appendChild(img)   
}
