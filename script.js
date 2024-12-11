async function getQuestions() {
    let a = await fetch("https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/96ae8cbebd92c97dfbe53ad8927a45a28f8d2358/questions.json")
    let ques = await a.json()

    let arrQuestion = []
    let arrOptionA = []
    let arrOptionB = []
    let arrOptionC = []
    let arrOptionD = []
    let arrAnswer = []

    for (let index = 0; index <= 1; index++) {
        let ranNum = Math.floor(Math.random() * 547)

        let question = ques[ranNum].question;
        // console.log(ques[ranNum].question)
        arrQuestion.push(question)

        let optionA = ques[ranNum].A
        arrOptionA.push(optionA)
        let optionB = ques[ranNum].B
        arrOptionB.push(optionB)
        let optionC = ques[ranNum].C
        arrOptionC.push(optionC)
        let optionD = ques[ranNum].D
        arrOptionD.push(optionD)

        let answer = ques[ranNum].answer
        arrAnswer.push(answer)
        // console.log(arrQuestion[index])
        document.querySelector(".quiz-Container").innerHTML = `<div class="result"></div>

        <label class="question"><h2>${arrQuestion[index]}</h2>

        <div class="options">
            <div><input type="radio" id="A" name="option" value="A"><label for="A">${arrOptionA[index]}</label></div>
            <div><input type="radio" id="B" name="option" value="B up"><label for="B">${arrOptionB[index]}</label></div>
            <div><input type="radio" id="C" name="option" value="C"><label for="C">${arrOptionC[index]}</label></div>
            <div><input type="radio" id="D" name="option" value="D"><label for="D">${arrOptionD[index]}</label></div>
        </div>

        <div class="submitDiv"><input onclick="check()" type="submit"></div>

        <div class="answer">${arrAnswer[index]}</div>`
    }

}

function check() {
    btn = document.getElementsByName("option")
    ans = document.querySelector(".answer").innerHTML
    btn.forEach(e => {
        if (e.checked) {
            if (e.value === ans) {
                document.querySelector(".result").innerHTML = "Right Answer !"
            }
            else {
                document.querySelector(".result").innerHTML = "Wrong Answer, Try Again !"
            }
        }
    });
}