const CHAR = document.getElementById("chrst");
const WORD = document.getElementById("words");
const TEXTAREA = document.getElementById("text-input");
const SENTENCE = document.getElementById("sent");
const PARAGRAPH = document.getElementById("prgh");

function wordCount() {
    let count = 0;
    let value = TEXTAREA.value.trim();

    if (value === "") {
        return 0;
    }

    count = value.split(/\s+/).length;
    return count;
}

function sentence() {
    let value = TEXTAREA.value;
    let sentenceCount = 0;

    for (let i = 0; i < value.length; i++) {
        if (value.charAt(i) === '.') {
            sentenceCount++;
        }
    }

    return sentenceCount;
}

function paragraph() {
    let value = TEXTAREA.value;
    let paragraphCount = 1;
    let isNewParagraph = false;

    if (value === "") {
        return 0;
    }

    for (let i = 0; i < value.length; i++) {
        if (value[i] === '\n' && value[i + 1] === '\n') {
            isNewParagraph = true;
        } else if (isNewParagraph) {
            paragraphCount++;
            isNewParagraph = false;
        }
    }

    return paragraphCount;
}

function main() {
    CHAR.textContent = TEXTAREA.value.length;
    WORD.textContent = wordCount();
    SENTENCE.textContent = sentence();
    PARAGRAPH.textContent = paragraph();
}

TEXTAREA.addEventListener('input', main);