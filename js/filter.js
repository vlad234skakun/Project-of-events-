const eventsStore = [
    
    {
      title: "INFJ Personality Type- Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title: "NYC AI Users- AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date: new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: undefined, // количество участников не указано, поэтому можно оставить undefined
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 75,
    },
    {
      title: "All Nations- Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      attendees: undefined, // можно также указать участников, если информация доступна
      category: "Health and Wellbeing",
      distance: 15,
    },
    
  ];


document.addEventListener("DOMContentLoaded", () => {
    // Массив с данными мероприятий
    // Получаем все фильтры
    const filters = document.querySelectorAll('.filter-select');
    const searchInput = document.querySelector(".input-search");
    const searchButton = document.querySelector(".button-search");
    const searchResultsContainer = document.querySelector("#search-results");
      
    
    // Функция форматирования даты
    function formatDate(date) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const dayOfMonth = date.getDate();
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        return `${day}, ${month} ${dayOfMonth}, ${hours}:${minutes} ${ampm}`;
    }
    

    // // Добавляем обработчик на кнопку поиска
    searchButton.addEventListener("click", (event) => {
        event.preventDefault(); // Чтобы форма не отправлялась
        const query = searchInput.value;
        searchEvents(query);
    });

    // Функция для поиска
    function searchEvents(query) {
        // Преобразуем запрос в нижний регистр для нечувствительности к регистру
        const searchQuery = query.toLowerCase();

        // Фильтруем мероприятия по названию
        const filteredEvents = eventsStore.filter(event => {
            return event.title.toLowerCase().includes(searchQuery);
        });

        // Отображаем результаты поиска
        // displaySearchResults(filteredEvents);  Пока что надо доработать
        displayFilteredEvents(filteredEvents); // Отображаем отфильтрованные события
    }

    // Функция для отображения результатов поиска
    // function displaySearchResults(events) {
    //     if (events.length === 0) {
    //         searchResultsContainer.innerHTML = "<p>No events found</p>";
    //     } else {
    //         searchResultsContainer.innerHTML = events.map(event => `
    //             <div class="search-result-item">
    //                 <h3>${event.title}</h3>
    //                 <p>${event.description}</p>
    //             </div>
    //         `).join('');
    //     }
    // }

    // Добавляем обработчик на кнопку поиска
    searchButton.addEventListener("click", (event) => {
        event.preventDefault(); // Чтобы форма не отправлялась
        const query = searchInput.value;
        searchEvents(query);
    });
    

    
    
    // Функция для фильтрации событий
    function filterEvents() {
        let filteredEvents = eventsStore;

        // Функция для форматирования даты в строку 'YYYY-MM-DD'
        function formatEventDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц в формате 02, 03 и т.д.
        const day = String(date.getDate()).padStart(2, '0'); // День в формате 02, 03 и т.д.
        return `${year}-${month}-${day}`;
        }
        
    
        // Проходим по всем фильтрам и применяем фильтрацию
        filters.forEach(filter => {
            const filterValue = filter.value; // Получаем значение фильтра
    
            if (filterValue) {
                switch (filter.dataset.filter) {
                    case 'date':
                        // Фильтрация по дате
                        filteredEvents = filteredEvents.filter(event => formatEventDate(event.date) === filterValue);
                        break;
                    case 'type':
                        // Фильтрация по типу мероприятия
                        filteredEvents = filteredEvents.filter(event => event.type === filterValue);
                        break;
                    case 'distance':
                        // Фильтрация по дистанции (только для офлайн мероприятий)
                        filteredEvents = filteredEvents.filter(event => event.distance === parseInt(filterValue));
                        break;
                    case 'category':
                        // Фильтрация по категории
                        filteredEvents = filteredEvents.filter(event => event.category === filterValue);
                        break;
                    default:
                        break;
                }
            }
        });
    
        // Отображаем отфильтрованные события
        displayFilteredEvents(filteredEvents);
    }
    
    // Функция для отображения отфильтрованных событий
    function displayFilteredEvents(events) {
        const eventsContainer = document.querySelector(".events-container");
    
        if (eventsContainer) {
            // Если нет подходящих событий, показываем сообщение
            if (events.length === 0) {
                eventsContainer.innerHTML = "<p>No events found</p>";
            } else {
                // Отображаем отфильтрованные события
                eventsContainer.innerHTML = events.map(createEventCard).join("");
            }
        } else {
            console.error("Контейнер '.events-container' не найден");
        }
    }
    
    // Добавляем слушатели на изменение каждого фильтра
    filters.forEach(filter => {
        filter.addEventListener("change", filterEvents);
    });
    
    
    // Функция для создания карточки мероприятия
    function createEventCard(event) {
        return `
            <div class="event-item">
                <div class="image-container">
                    <img class="event-image" src="${event.image}" alt="${event.title}">
                </div>
                <div class="texteventcard-container">
                    <div class="event-date-container">
                        <img src="/icons/calendarIcon.svg" alt="Calendar Icon">
                        <p>${formatDate(event.date)}</p>
                    </div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-location">
                    ${event.type === "online" ? event.description : `${event.description} (${event.distance} km)`}
                    </p>
                    <p class="event-attendees">${event.attendees ? event.attendees : 0} attendees</p>
                </div>
            </div>
        `;
    }
    
    // Функция для отображения всех мероприятий (в events-container)
    function displayAllEvents() {
        const eventsContainer = document.querySelector(".events-container");
        if (eventsContainer) {
            eventsContainer.innerHTML = eventsStore.map(createEventCard).join("");
        } else {
            console.error("Контейнер '.events-container' не найден");
        }
    }

    displayAllEvents();  // Отображаем все мероприятия
    displayFilteredEvents(eventsStore); // Отображаем все события при загрузке страницы
});    


