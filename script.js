let countOfQ = 0, countOfRightAns = 0, countOfWrongAns = 0, answer;

async function getQuestions() {
    countOfQ++
    document.querySelector(".loader").style.display = "block"

    let a = await fetch("https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/96ae8cbebd92c97dfbe53ad8927a45a28f8d2358/questions.json")
    let data = await a.json()

    let ranNum = Math.floor(Math.random() * (data.length - 1))

    let question = data[ranNum].question;

    let optionA = data[ranNum].A
    let optionB = data[ranNum].B
    let optionC = data[ranNum].C
    let optionD = data[ranNum].D

    answer = data[ranNum].answer

    setTimeout(() => {

        document.querySelector(".quiz-Container").innerHTML = `
        <div class="loader"></div>
        <div class="result"></div>

        <label class="question"><h2>${question}</h2>

        <div class="options">
            <div><input type="radio" id="A" name="option" value="A"><label for="A">${optionA}</label></div>
            <div><input type="radio" id="B" name="option" value="B"><label for="B">${optionB}</label></div>
            <div><input type="radio" id="C" name="option" value="C"><label for="C">${optionC}</label></div>
            <div><input type="radio" id="D" name="option" value="D"><label for="D">${optionD}</label></div>
        </div>

        <div class="buttonDiv">
        <input class="submit" onclick="check()" type="submit">
        <button class="end" onclick="end()">End</button>
        </div>`
    }, 3000);
}

function toggleStart() {
    document.querySelector(".quiz-Container > h3").innerHTML = "Starting Quiz..."
    document.querySelector(".start").setAttribute("disabled", true)
    document.querySelector(".start").style.backgroundColor = "rgb(196, 135, 253)"
    getQuestions()
}

function toggleSubmit() {
    document.querySelector(".submit").setAttribute("disabled", true)
    document.querySelector(".end").setAttribute("disabled", true)
    document.querySelector(".submit").style.backgroundColor = "rgb(196, 135, 253)"
    document.querySelector(".end").style.backgroundColor = "rgb(196, 135, 253)"
    getQuestions()
}

function check() {
    btn = document.getElementsByName("option")
    btn.forEach(e => {
        if (e.checked) {
            if (e.value === answer) {
                document.querySelector(".result").innerHTML = "Right Answer<br>Waiting For Next Question..."
                countOfRightAns++
                toggleSubmit()
            }
            else {
                document.querySelector(".result").innerHTML = "Wrong Answer, Try Again !"
                countOfWrongAns++
            }
        }
    });
}

function end() {
    document.querySelector(".quiz-Container").innerHTML = `
    <div class="endDiv">
        <h2>Quiz Summary</h2>
        <div class="mT-20">
        <div class="totalQ">Total Questions Attempted: ${countOfQ}</div>
        <div class="rightAns">Right Answer Given: ${countOfRightAns}</div>
        <div class="WrongAns">Wrong Answer Given: ${countOfWrongAns}</div>
        </div>
    </div>`
}
