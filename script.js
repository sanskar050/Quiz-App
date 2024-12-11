async function getQuestions() {
    document.querySelector(".loader").style.display = "block"

    let a = await fetch("https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/96ae8cbebd92c97dfbe53ad8927a45a28f8d2358/questions.json")
    let data = await a.json()

    setTimeout(() => {
        let ranNum = Math.floor(Math.random() * 547)

        let question = data[ranNum].question;

        let optionA = data[ranNum].A
        let optionB = data[ranNum].B
        let optionC = data[ranNum].C
        let optionD = data[ranNum].D

        let answer = data[ranNum].answer

        document.querySelector(".quiz-Container").innerHTML = `<div class="loader"></div>
        <div class="result"></div>

        <label class="question"><h2>${question}</h2>

        <div class="options">
            <div><input type="radio" id="A" name="option" value="A"><label for="A">${optionA}</label></div>
            <div><input type="radio" id="B" name="option" value="B up"><label for="B">${optionB}</label></div>
            <div><input type="radio" id="C" name="option" value="C"><label for="C">${optionC}</label></div>
            <div><input type="radio" id="D" name="option" value="D"><label for="D">${optionD}</label></div>
        </div>

        <div class="submitDiv"><input onclick="check()" type="submit"></div>

        <div class="answer">${answer}</div>`
    }, 3000);
}

function check() {
    btn = document.getElementsByName("option")
    ans = document.querySelector(".answer").innerHTML
    btn.forEach(e => {
        if (e.checked) {
            if (e.value === ans) {
                document.querySelector(".result").innerHTML = "Right Answer<br>Waiting For Next Question... !"
                getQuestions()
            }
            else {
                document.querySelector(".result").innerHTML = "Wrong Answer, Try Again !"
            }
        }
    });
}
