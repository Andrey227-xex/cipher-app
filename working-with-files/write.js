const textOutput = document.getElementById("textOutput"); // поле для вывода текста
const status = document.getElementById("status"); // статус

function writingToFile() {
    // проверяем что текст в поле не пустой
    if (textOutput.value.trim()) {

        // Blob - это контейнер для данных, который браузер может сохранить как файл
        // [textOutput] - массив с нашими данными (текстом)
        // {type: "text/plain"} - указываем, что это текстовый файл
        const blob = new Blob([textOutput.value], {type: "text/plain"});

        // createObjectURL() генерирует уникальный URL вида "blob:http://..."
        // По этому URL браузер может получить наши данные
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a"); // создаем ссылку
        link.setAttribute("href", url); // link указывает на наши данные в памяти

        // download атрибут говорит браузеру: "Не переходи по ссылке, а скачай файл"
        link.download = "file.txt";

        link.click(); // программно кликаем по ссылке

        // revokeObjectURL() освобождает память, которую занимал Blob
        URL.revokeObjectURL(url); // очищаем временную ссылку

        status.textContent = "Статус: ✅ Данные сохранились в файл"
    }

    // текста нету
    else {
        alert("Нет данных для сохранения!");
        status.textContent = "Статус: ❌ Данные не сохранились в файл";
    }
}


export{writingToFile};