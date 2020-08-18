function renderPlayer(character) {

}

function renderQuestions(questionList) {
    var container = document.querySelector(".questions")
    questionList.forEach(function (question) {
        var questionContainer = document.createElement("div")
        questionContainer.className = "questionContainer"
        var img = document.createElement("img")
        img.src = question.img
        questionContainer.onclick = function(){
            console.log(question);
        }
        questionContainer.appendChild(img)
        container.appendChild(questionContainer)
    })
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
