class Question {
    text;
    id;
    img;
    correctAnswerId;

    constructor(text, id, correctAnswerId, img) {
        this.text = text
        this.id = id
        this.correctAnswerId = correctAnswerId
        this.img = img
    }
}

class Answer {
    text;
    id;
    questionId;
    constructor(text, id, questionId) {
        this.text = text
        this.id = id
        this.questionId = questionId
    }

}
