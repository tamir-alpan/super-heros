init()

function init() {
    play()
}

function play() {
    renderQuestions(questions)
    renderPlayer(getPlayer())
}

function getPlayer() {
    return instances[state.characterIndex]
}

function getQuestion() {
    return questions[state.questionIndex]
}

function getNextPlayer() {
    state.characterIndex += 1
    return getPlayer()
}

function getNextQuestion() {
    state.questionIndex += 1
    return getQuestion()
}