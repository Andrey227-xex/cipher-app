const control = document.getElementById("control"); // секция с управлением
const textInput = document.getElementById("textInput"); // поле для ввода текстовых сообщений
const status = document.getElementById("status"); // статус


// шифр Цезаря
function caesarCipher() {
    // если false, то добавляем поле для сдвига алфавита
    if (!settings.alphabetShiftField) {
        const alphabetShiftField = document.createElement("input"); // создаю поле для сдвига алфавита
        alphabetShiftField.setAttribute("type", "number"); // добавляю атрибут тип поля (ввод только чисел)
        alphabetShiftField.setAttribute("id", "alphabetShiftField"); // добавляю id
        alphabetShiftField.setAttribute("class", "alphabet-shift-field"); // добавляю class
        alphabetShiftField.setAttribute("placeholder", "Введите сдвиг"); // добавляю атрибут подсказку


        const buttonSave = document.createElement("button"); // создаем кнопку сохранения сдвига
        buttonSave.setAttribute("id", "buttonSave"); // добавляю id
        buttonSave.setAttribute("class", "btn-save"); // добавляю class
        buttonSave.textContent = "Сохранить"; // добавляю текст кнопке

        control.insertBefore(alphabetShiftField, textInput); // добавляю поле сдвига в секция с управлением
        control.insertBefore(buttonSave, textInput); // добавляю кнопку в секция с управлением перед полем текста

        buttonSave.addEventListener("click", save); // добавляю обработчик (кнока сохранения)

        settings.alphabetShiftField = true; // обновляю настройку на true (поле добавлено)
    }

    textInput.setAttribute("disabled", true); // запрещаем вводить текст (пока пользователь не введ корректный сдвиг)
    settings.type = "Цезарь"; // обновляем настройку тип шифра - Цезарь
    status.textContent = "Статус: ✅ Выбран шифр Цезаря"; // обновляю статус
}


// функция для проверки ввода числа в поле
function save() {
    const alphabetShiftField = document.getElementById("alphabetShiftField"); // поле для ввода сдвига

    if (alphabetShiftField.value !== "" && (alphabetShiftField.value > 0 && alphabetShiftField.value < 33)) {
        settings.shift = Number(alphabetShiftField.value); // обновляем настройку сдвига алфавита
        textInput.removeAttribute("disabled"); // разрешаем вводить текст
        status.textContent = "Статус: ✅ Сдвиг сохранён"; // обновляю статус
    }

    else if (alphabetShiftField.value !== "" && (alphabetShiftField.value < 1 || alphabetShiftField.value > 32)) {
        settings.shift = 0; // сброс
        alert("Некорректный сдвиг (должен быть от 1 до 32)"); // неверный ввод
        textInput.setAttribute("disabled", true); // запрещаем вводить текст
        status.textContent = "Статус: ❌ Сдвиг не сохранён (он сбросился)"; // обновляем статус
        }
}


// шифр Атбаш
function atbashCipher() {
    // если true, то удаляем поле для сдвига алфавита
    if (settings.alphabetShiftField) {

        const alphabetShiftField = document.getElementById("alphabetShiftField"); // поле ввода для сдвига алфавита
        const buttonSave = document.getElementById("buttonSave"); // кнопка сохранения сдвига

        alphabetShiftField.remove(); // удаляем поле
        buttonSave.removeEventListener("click", save); // удаляем обработчик
        buttonSave.remove(); // удаляем кнопку

        settings.alphabetShiftField = false; // обновляем настройку на false (поле удалено)
    }

    textInput.removeAttribute("disabled"); // разрешаем вводить текст
    settings.type = "Атбаш"; // обновляем настройку тип шифра - Атбаш
    status.textContent = "Статус: ✅ Выбран шифр Атбаш"; // обновляем статус
}

export{caesarCipher, atbashCipher};