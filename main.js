let upperBtn = document.getElementById('upper-case');
let lowerBtn = document.getElementById('lower-case');
let properBtn = document.getElementById('proper-case');
let sentenceBtn = document.getElementById('sentence-case');
let saveBtn = document.getElementById('save-text-file');
let textarea = document.getElementById('textarea');


upperBtn.addEventListener('click', () => {
    textarea.value = textarea.value.toUpperCase();
})

lowerBtn.addEventListener('click', () => {
    textarea.value = textarea.value.toLowerCase();
})

properBtn.addEventListener('click', () => {
    let words = textarea.value.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }
    textarea.value = words.join(" ");
})

sentenceBtn.addEventListener('click', () => {
    let words = textarea.value.toLowerCase().split(" ");
    let newSentence = true;
    for (let i = 0; i < words.length; i++) {
        if (newSentence === true || words[i] === "i") {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            newSentence = false;
        }

        if (words[i][words[i].length - 1] === '.' || words[i][words[i].length - 1] === '?' || words[i][words[i].length - 1] === '!') {
            newSentence = true
        }
    }

    textarea.value = words.join(' ');
})


saveBtn.addEventListener('click', () => {
    if (textarea.value.length > 1) {
        download("text.txt", textarea.value);
    } else {
        alert('Textarea empty')
    }
})


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
