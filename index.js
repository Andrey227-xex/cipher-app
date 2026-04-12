// ОСНОВНОЙ ФАЙЛ

import { changingTheTopic } from "./themes/changing-the-topic.js";  // импортируем функцию меняющая тему

const theme = document.getElementById("theme");  // кнопка с темами


// добавляем событие перезагрузки (сработает после полной прогрузки)
window.addEventListener("load", () => {
    let data = localStorage.getItem("theme"); // название темы в localStorage (если есть)

    // если тема есть и она темная
    if (data && data === "dark") {
        document.body.classList.add("dark-theme");  // добавляем класс с темной темой
        theme.textContent = "Тема 🌙";  // меняем смайлик темы
    }
})


theme.addEventListener("click", changingTheTopic);  // добавляем обработчик кнопке с темами