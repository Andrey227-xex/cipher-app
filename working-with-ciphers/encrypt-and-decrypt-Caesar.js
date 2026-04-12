const textInput = document.getElementById("textInput"); // поле для ввода текста
const textOutput = document.getElementById("textOutput"); // поле для вывода текста
const status = document.getElementById("status"); // статус

// функция шифрования и расшифрования
function encryptAndDecryptCaesar() {
    // поле разблокировано (нету атрибута disabled)
    if (!textInput.hasAttribute("disabled")) {

        // поле пустое
        if (!textInput.value.trim()) {
            alert("Введите текст!");
            return;
        }

        // перебираем символы
        for (let symbol of textInput.value) {

            // режим шифрования
            if (settings.mode === "Зашифровать") {

                const alphabet = checkingTheAlphabet(symbol); // вызываем функцию для проверки на русский/английский алфавит
                
                // если функция вернула алфавит значит это буква
                if (alphabet) {
                    encryptingTheDesiredAlphabet(symbol, alphabet); // вызываем функцию шифрования
                    continue;
                }
            }

            // режим расшифрования
            else if (settings.mode === "Расшифровать") {

                const alphabet = checkingTheAlphabet(symbol); // вызываем функцию для проверки на русский/английский алфавит

                // если функция вернула алфавит значит это буква
                if (alphabet) {
                    decodingTheDesiredAlphabet(symbol, alphabet); // вызываем функцию расшифрования
                    continue;
                }
            }
            settings.encryptedText += symbol; // другие символы
        }
        textOutput.value = settings.encryptedText; // выводим текст на поле

        if (settings.mode === "Зашифровать") {
            status.textContent = "Статус: ✅ Текст зашифрован (Цезарь)"; // обновляем статус
        }

        else {
            status.textContent = "Статус: ✅ Текст расшифрован (Цезарь)"; // обновляем статус
        }
    }

    // поле заблокировано (имеется атрибут disabled)
    else {
        alert("Введите корректный сдвиг и сохраните его!");
    }
}


// функция для проверки на русский/английский алфавит 
function checkingTheAlphabet(symbol) {

    // русские буквы
    if (settings.alphabetIsRussian.includes(symbol.toLowerCase())) {
        return settings.alphabetIsRussian;
    }

    // английские буквы
    else if (settings.alphabetIsEnglish.includes(symbol.toLowerCase())) {
        return settings.alphabetIsEnglish;
    }
}


// функция шифрования нужного алфавита
function encryptingTheDesiredAlphabet(symbol, alphabet) {
    const index = alphabet.indexOf(symbol.toLowerCase()); // индекс буквы в алфавите
    const newIndex = (index + settings.shift) % alphabet.length; // индекс буквы со сдвигом

    if (symbol === symbol.toUpperCase()) {  
        settings.encryptedText += alphabet[newIndex].toUpperCase(); // добавляем зашифрованную ЗАГЛАВНУЮ букву
    }

    else {
        settings.encryptedText += alphabet[newIndex]; // добавляем зашифрованную СТРОЧНУЮ букву
    }
}


// функция расшифрования нужного алфавита
function decodingTheDesiredAlphabet(symbol, alphabet) {
    const index = alphabet.indexOf(symbol.toLowerCase()); // индекс буквы в алфавите
    const newIndex = (index - settings.shift + alphabet.length) % alphabet.length; // индекс буквы со сдвигом

    if (symbol === symbol.toUpperCase()) {
        settings.encryptedText += alphabet[newIndex].toUpperCase(); // добавляем расшифрованную ЗАГЛАВНУЮ букву
    }

    else {
        settings.encryptedText += alphabet[newIndex]; // добавляем расшифрованную СТРОЧНУЮ букву
    }
}


export{encryptAndDecryptCaesar};