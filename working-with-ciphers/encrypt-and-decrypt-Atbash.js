const textInput = document.getElementById("textInput"); // поле для ввода текста
const textOutput = document.getElementById("textOutput"); // поле для вывода текста
const status = document.getElementById("status"); // статус


// функция шифрования и расшифрования
function encryptAndDecryptAtbash() {
    // поле разблокировано (нету атрибута disabled)
    if (!textInput.hasAttribute("disabled")) {

        // поле пустое
        if (!textInput.value.trim()) {
            alert("Введите текст!");
            return;
        }

        // перебираем символы
        for (let symbol of textInput.value) {
            const alphabet = checkingTheAlphabet(symbol); // вызываем функцию для проверки на русский/английский алфавит
            
            // если функция вернула алфавит значит это буква
            if (alphabet) {
                encryptingAndDecryptingTheDesiredAlphabet(symbol, alphabet); // вызываем функцию
                continue;
            }
            
            settings.encryptedText += symbol; // другие символы
        }

        textOutput.value = settings.encryptedText; // выводим текст на поле

        if (settings.mode === "Зашифровать") {
            status.textContent = "Статус: ✅ Текст зашифрован (Атбаш)"; // обновляем статус
        }

        else {
            status.textContent = "Статус: ✅ Текст расшифрован (Атбаш)"; // обновляем статус
        }
    }

    // поле заблокировано (имеется атрибут disabled)
    else {
        alert("Введите и сохраните сдвиг!");
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


// функция шифрования и расшифрование нужного алфавита
function encryptingAndDecryptingTheDesiredAlphabet(symbol, alphabet) {
    const index = alphabet.indexOf(symbol.toLowerCase()); // индекс буквы в алфавите
    const newIndex = alphabet.length - 1 - index; // индекс зеркальной буквы

    if (symbol === symbol.toUpperCase()) {  
        settings.encryptedText += alphabet[newIndex].toUpperCase(); // добавляем (рас)зашифрованную ЗАГЛАВНУЮ букву
    }

    else {
        settings.encryptedText += alphabet[newIndex]; // добавляем (рас)зашифрованную СТРОЧНУЮ букву
    }
}


export{encryptAndDecryptAtbash}; // экспортируем функцию