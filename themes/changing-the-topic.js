// ФАЙЛ С ФУНКЦИЕЙ КОТОРАЯ МЕНЯЕТ ТЕМУ

const theme = document.getElementById("theme");  // кнопка с темами
const status = document.getElementById("status");  // статус


// функция меняющая тему
function changingTheTopic() {

    document.body.classList.toggle("dark-theme");  // переключатель тем

    // темная тема
    if (document.body.classList.contains("dark-theme")) {
        theme.textContent = "Тема 🌙";  // меняем смайлик темы
        status.textContent = "Статус: ✅ Выбрана темная тема 🌙";  // обновляем статус
        localStorage.setItem("theme", "dark");  // сохраняем в localStorage название темы
    }

    // светлая тема
    else {
        theme.textContent = "Тема 🌞";  // меняем смайлик темы
        status.textContent = "Статус: ✅ Выбрана светлая тема 🌞";  // обновляем статус
        localStorage.setItem("theme", "light");  // сохраняем в localStorage название темы
    }

}


export{changingTheTopic};