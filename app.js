function encrypt() {
    const inputText = document.getElementById("input-text").value;
    if (inputText === "") {
        alert("Please enter some text");
        return;
    }
    const outputText = document.getElementById("output-text");
    const inputTextArray = inputText.split("");
    const outputTextArray = [];

    for (let i = 0; i < inputTextArray.length; i++) {
        if (inputTextArray[i] === "a") {
            outputTextArray[i] = "ai";
        } else if (inputTextArray[i] === "e") {
            outputTextArray[i] = "enter";
        } else if (inputTextArray[i] === "i") {
            outputTextArray[i] = "imes";
        } else if (inputTextArray[i] === "o") {
            outputTextArray[i] = "ober";
        } else if (inputTextArray[i] === "u") {
            outputTextArray[i] = "ufat";
        }
    };

    outputText.value = outputTextArray.join("");
    document.getElementById("output-text").style.backgroundImage = "url()";
    document.getElementById("input-text").value = "";
    document.getElementById("copy-btn").style.visibility = "visible";
}

function decrypt() {
    const inputText = document.getElementById("input-text").value;
    if (inputText === "") {
        alert("Please enter some text");
        return;
    }
    const outputText = document.getElementById("output-text");
    const outputTextArray = [];
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === "a" && inputText[i + 1] === "i") {
            outputTextArray.push("a");
            i++;
        } else if (inputText[i] === "e" && inputText[i + 1] === "n" && inputText[i + 2] === "t" && inputText[i + 3] === "e" && inputText[i + 4] === "r") {
            outputTextArray.push("e");
            i += 4;
        } else if (inputText[i] === "i" && inputText[i + 1] === "m" && inputText[i + 2] === "e" && inputText[i + 3] === "s") {
            outputTextArray.push("i");
            i += 3;
        } else if (inputText[i] === "o" && inputText[i + 1] === "b" && inputText[i + 2] === "e" && inputText[i + 3] === "r") {
            outputTextArray.push("o");
            i += 3;
        } else if (inputText[i] === "u" && inputText[i + 1] === "f" && inputText[i + 2] === "a" && inputText[i + 3] === "t") {
            outputTextArray.push("u");
            i += 3;
        }
        else {
            outputTextArray.push(inputText[i]);
        }
    }
    outputText.value = outputTextArray.join("");
    document.getElementById("output-text").style.backgroundImage = "url()";
    document.getElementById("input-text").value = "";
    document.getElementById("copy-btn").style.visibility = "visible";
}

function copyText() {
    const outputText = document.getElementById("output-text");
    document.getElementById("input-text").value = outputText.value;
    document.getElementById("output-text").value = "";
    document.getElementById("output-text").style.backgroundImage = "url('img/design.svg')";
    document.getElementById("copy-btn").style.visibility = "hidden";
}