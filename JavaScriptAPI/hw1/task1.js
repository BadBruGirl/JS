/*Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.
1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.
2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.
3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.
4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".
5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.
6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.
7. При разработке используйте Bootstrap для стилизации элементов.*/

const schedules = [
    {
        title: "Zumba",
        time: "18:00",
        maxParticipants: 20,
        currentParticipants: 0
    },
    {
        title: "Стрейчинг",
        time: "12:00 AM",
        maxParticipants: 20,
        currentParticipants: 18
    },
    {
        title: "йога",
        time: "2:00 PM",
        maxParticipants: 4,
        currentParticipants: 3
    },
];

/**
 * Renders the schedules on the webpage.
 *
 * @param {none}
 * @return {none}
 */

function renderSchedules() {
    const scheduleContainer = document.getElementById("schedule");
    scheduleContainer.innerHTML = "";

    schedules.forEach((schedule) => {
        const scheduleCard = document.createElement("div");
        scheduleCard.classList.add("card", "mb-3");

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = schedule.title;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const time = document.createElement("p");
        time.classList.add("card-text");
        time.textContent = `Time: ${schedule.time}`;

        const participants = document.createElement("p");
        participants.classList.add("card-text");
        participants.textContent = `Participants: ${schedule.currentParticipants}/${schedule.maxParticipants}`;

        const signUpButton = document.createElement("button");
        signUpButton.classList.add("btn", "btn-primary");
        signUpButton.textContent = "Записаться";

        if (schedule.currentParticipants < schedule.maxParticipants) {
            signUpButton.addEventListener("click", () => {
                schedule.currentParticipants++;
                renderSchedules();
            });
        } else {
            signUpButton.disabled = true;
        }

        const cancelSignUpButton = document.createElement("button");
        cancelSignUpButton.classList.add("btn", "btn-danger");
        cancelSignUpButton.textContent = "Отменить запись";

        cancelSignUpButton.addEventListener("click", () => {
            if (schedule.currentParticipants > 0) {
                schedule.currentParticipants--;
                renderSchedules();
            }
        });

        cardBody.appendChild(time);
        cardBody.appendChild(participants);
        cardBody.appendChild(signUpButton);
        cardBody.appendChild(cancelSignUpButton);

        scheduleCard.appendChild(cardHeader);
        scheduleCard.appendChild(cardBody);
        scheduleContainer.appendChild(scheduleCard);
    });
}

renderSchedules();
