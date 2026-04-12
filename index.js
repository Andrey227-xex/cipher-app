// ОСНОВНОЙ ФАЙЛ

import { changingTheTopic } from "./themes/changing-the-topic.js";  // импортируем функцию меняющая тему
import { caesarCipher, atbashCipher } from "./working-with-ciphers/choosing-a-cipher.js"; // импортируем функции шифров

const theme = document.getElementById("theme"); // кнопка с темами
const languages = document.querySelectorAll("#Russian, #English"); // радио кнопки с языками
const select = document.getElementById("select"); // выпадающий список с шифрами
const status = document.getElementById("status"); // статус
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


// перебираем радио кнопки
languages.forEach(lang => {
    // добавляем обработчик радио кнопка с выбором языка
    lang.addEventListener("change", () => {
        settings.language = lang.value;  // в настройке language будет хранится выбранный язык

        languages.forEach(lang => {
            lang.setAttribute("disabled", true);  // делаем радио кнопки неактивными
        })

        const label = document.querySelector(`label[for="${lang.id}"]`);
        label.style.color="red";  // красим выбранный язык в красный цвет

        // русский язык
        if (label.textContent === "Русский язык") {
            status.textContent = "Статус: ✅ Выбран русский язык"; // обновляю статус
        }

        // английский язык
        else {
            status.textContent = "Статус: ✅ Выбран английский язык"; // обновляю статус
        }
    })
})


// добаляем обработчик выпадающему списку с шифрами
select.addEventListener("change", () => {
    // если выбран язык
    if (settings.language) {
        // если пользователь выбрал шифр Цезарь
        if (select.value === "Цезарь") {
            caesarCipher(); 
        }

        // если пользователь выбрал шифр Атбаш
        else if (select.value === "Атбаш") {
            atbashCipher();
        }
    }
    // язык не выбран
    else {
        alert("Выберите язык!");
        select.value = "";  // сбрасываем 
    }
})


// функция где задаются начальные настройки и хранятся данные
function initialization() {
    settings.type = null;  // тип шифра
    settings.mode = null;  // режим
    settings.language = null;  // язык
    settings.encryptedText = "";  // зашифрованное или расшифрованное текстовое сообщение
    settings.alphabetIsRussian = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];  // массив с русским алфавитом
    settings.alphabetIsEnglish = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  // массив с английским алфавитом
    settings.shift = 0;  // сдвиг (для шифра Цезаря)
    settings.alphabetShiftField = false;  // логическое значение, если true, то поле для сдвига создано (для шифра Цезаря)
}