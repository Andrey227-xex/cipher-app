const textInput = document.getElementById("textInput"); // поле для ввода текста
const status = document.getElementById("status"); // статус


// функция загрузки файла
function uploadingFile(event) {
    const reader = new FileReader(); // встроенный объект браузера, который умеет читать содержимое файлов
    textInput.value = ""; // удаляем текст в поле ввода

    // event.target - это сам input
    // .files - массив выбранных файлов
    // [0] - берем первый файл (если выбрали несколько)
    const file = event.target.files[0]; // выбранный файл

    if (!file) return; // защита от отмены выбора

    // Проверка расширения (должен быть .txt)
    if (file.name.endsWith(".txt")) {
        // reader.onload сработает автоматически после окончания чтения
        reader.onload = (ev) => {
            textInput.value = ev.target.result; // вставляем прочитанный текст в поле ввода
            status.textContent = "Статус: ✅ Файл загружен"; // обновляем статус
        }

        // Запускаем чтение файла как текст (UTF-8)
        reader.readAsText(file);
    }

    else {
        alert("Ошибка: можно загружать только .txt файлы!");
        status.textContent = "Статус: ❌ Файл не загружен"; // обновляем статус
        return;
    }
}


export{uploadingFile};