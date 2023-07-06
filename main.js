// ex 1

function checkTexts() {

    let text1 = document.querySelector(".text1").value;
    let text2 = document.querySelector(".text2").value;

    if (text1 && text2) {
        alert("Обидва поля заповнені");
    }
    else {
        alert("Не всі поля заповнені");
    }
}

// ex 2

function checkSum() {

    let number1 = parseInt(document.querySelector(".number1").value);
    let number2 = parseInt(document.querySelector(".number2").value);

    let sum = number1 + number2;

    if (sum > 10){
        alert("Сума більша за 10");
    }
    else {
        alert("Сума менша або дорівнює 10");
    }
}

// ex 3

function checkText(){
    let field = document.querySelector(".field").value;

    if (field == "JavaScript"){
        alert("Текст містить слово JavaScript");
    }
    else {
        alert("Текст не містить слово JavaScript");
    }
}

// ex 4

function checkNumber() {

    let fieldNumber = parseInt(document.querySelector(".field-number").value);

    if (fieldNumber > 10 && fieldNumber < 20) {
        alert("Число входить в діапазон від 10 до 20")
    }
    else {
        alert("Число не входить в діапазон від 10 до 20")
    }
}