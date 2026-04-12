// ОСНОВНОЙ ФАЙЛ

import { changingTheTopic } from "./themes/changing-the-topic.js";  // импортируем функцию меняющая тему
import { caesarCipher, atbashCipher } from "./working-with-ciphers/ciphers.js"; // импортируем функции шифров
import { encryptAndDecryptCaesar } from "./working-with-ciphers/encrypt-and-decrypt-Caesar.js" // импортируем функцию зашифровать и расшифровать (для шифра Цезаря)
import { encryptAndDecryptAtbash } from "./working-with-ciphers/encrypt-and-decrypt-Atbash.js" // импортируем функцию зашифровать и расшифровать (для шифра Атбаш)

const theme = document.getElementById("theme"); // кнопка с темами
const select = document.getElementById("select"); // выпадающий список с шифрами

const btnEncryptIt = document.getElementById("btnEncryptIt"); // кнопка шифрования
const btnDecrypt = document.getElementById("btnDecrypt"); // кнока расшифровать
window.settings = {}; // настройки и данные (глобальная переменная)


initialization();  // вызываем функцию где задаются начальные настройки и хранятся данные


// добавляем событие перезагрузки (сработает после полной прогрузки)
window.addEventListener("load", () => {
    let data = localStorage.getItem("theme"); // название темы в localStorage (если есть)

    // если тема есть и она темная
    if (data && data === "dark") {
        document.body.classList.add("dark-theme");  // добавляем класс с темной темой
        theme.textContent = "Тема 🌙";  // меняю смайлик темы
    }
})


// добавляем обработчик кнопке с темами
theme.addEventListener("click", changingTheTopic);


// добаляем обработчик выпадающему списку с шифрами
select.addEventListener("change", () => {

    // если пользователь выбрал шифр Цезарь
    if (select.value === "Цезарь") {
        caesarCipher(); 
    }

    // если пользователь выбрал шифр Атбаш
    else if (select.value === "Атбаш") {
        atbashCipher();
    }
})


// добавляем обработчик кнопке шифрования
btnEncryptIt.addEventListener("click", () => {
    settings.encryptedText = ""; // сбрасываем текст
    settings.mode = "Зашифровать"; // задаем режим

    // если выбран шифр Цезаря
    if (settings.type === "Цезарь") {
        encryptAndDecryptCaesar();
    }

    // если выбран шифр Атбаш
    if (settings.type === "Атбаш") {
        encryptAndDecryptAtbash();
    }
});


// добавляем обработчик кнопке расшифрования
btnDecrypt.addEventListener("click", () => {
    settings.encryptedText = ""; // сбрасываем текст
    settings.mode = "Расшифровать"; // задаем режим

    // если выбран шифр Цезаря
    if (settings.type === "Цезарь") {
        encryptAndDecryptCaesar();
    }

    // если выбран шифр Атбаш
    if (settings.type === "Атбаш") {
        encryptAndDecryptAtbash();
    }
})


// функция где задаются начальные настройки и хранятся данные
function initialization() {
    settings.type = null;  // тип шифра
    settings.mode = null;  // режим
    settings.encryptedText = "";  // зашифрованное или расшифрованное текстовое сообщение
    settings.alphabetIsRussian = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];  // массив с русским алфавитом
    settings.alphabetIsEnglish = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  // массив с английским алфавитом
    settings.shift = 0;  // сдвиг (для шифра Цезаря)
    settings.alphabetShiftField = false;  // логическое значение, если true, то поле для сдвига создано (для шифра Цезаря)
}