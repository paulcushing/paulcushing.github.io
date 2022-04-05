function cheat() {
    /* Include wordlist */
    const wordlist = words.words;

    const guessLetters = [
        document.getElementById('letter1').value !== '' ? document.getElementById('letter1').value.toLowerCase() : null,
        document.getElementById('letter2').value !== '' ? document.getElementById('letter2').value.toLowerCase() : null,
        document.getElementById('letter3').value !== '' ? document.getElementById('letter3').value.toLowerCase() : null,
        document.getElementById('letter4').value !== '' ? document.getElementById('letter4').value.toLowerCase() : null,
        document.getElementById('letter5').value !== '' ? document.getElementById('letter5').value.toLowerCase() : null
    ];
    const toExclude = document.getElementById('toExclude').value.toLowerCase().split("");
    const toInclude = document.getElementById('toInclude').value.toLowerCase().split("");
    
    let numberGuesses = 0;
    guessLetters.forEach(letter => {
        if (letter !== null) {
            numberGuesses++;
        }
    });

    let numberWordsFound = 0;
    let wordsFound = [];

    wordlist.forEach(word => {
        // If the word has any of the excluded letters, skip it 
        if(word.split("").some(r=> toExclude.includes(r))) {
            return;
        }

        // If the word is missing any of the included letters, skip it
        let missingRequiredLetters = false;
        toInclude.forEach(letter => {
            if (!word.split("").includes(letter)) {
                missingRequiredLetters = true;
            }
        });
        if(missingRequiredLetters) {
            return;
        }

        let matches = 0;
        word.split("").forEach((wordLetter, id) => {
            if(wordLetter === guessLetters[id]) {
                matches++;
            }
        });

        if(matches === numberGuesses) {
            wordsFound.push(word);
            numberWordsFound++;
        }
    });

    let resultList = "";
    wordsFound.forEach(word => {
        resultList += `<li>${word}</li>`;
    });
    document.getElementById('cheatResultText').innerHTML = numberWordsFound + " words found";
    document.getElementById('cheatResultList').innerHTML = "<ul>" + resultList + "</ul>";
}

function reset() {
    document.getElementById('cheatResultText').innerHTML = "";
    document.getElementById('cheatResultList').innerHTML = "";
    document.getElementById('letter1').value = "";
    document.getElementById('letter2').value = "";
    document.getElementById('letter3').value = "";
    document.getElementById('letter4').value = "";
    document.getElementById('letter5').value = "";
    document.getElementById('toExclude').value = "";
    document.getElementById('toInclude').value = "";
}