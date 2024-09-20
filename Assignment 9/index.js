async function sortEvents(criteria, ascending = true) {
    const events = await fetchEvents();

    const sortedEvents = events.sort((a, b) => {
        if (criteria === 'price') {
            return ascending ? a.price - b.price : b.price - a.price;
        } else if (criteria === 'date') {
            return ascending ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        }
    });

    renderFilteredEvents(sortedEvents);
}

async function fetchEvents() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                    {
                        "id": 1,
                        "imageUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        "title": "Summer Music Festival",
                        "price": 50,
                        "date": "August 20, 2021",
                        "location": "Central Park, New York City",
                        "company": "Music Festivals Inc."
                    },
                    {
                        "id": 2,
                        "imageUrl": "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        "title": "Food and Wine Expo",
                        "price": 75,
                        "date": "September 25, 2021",
                        "location": "Moscone Center, San Francisco",
                        "company": "Food and Wine Events LLC"
                    },
                    {
                        "id": 3,
                        "imageUrl": "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        "title": "Comic Con",
                        "price": 35,
                        "date": "October 15, 2021",
                        "location": "Los Angeles Convention Center",
                        "company": "Comic Con International"
                    },
                    {
                        "id": 4,
                        "imageUrl": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwZGVzaWduJTIwZmFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                        "title": "Art and Design Fair",
                        "price": 20,
                        "date": "November 12, 2021",
                        "location": "Navy Pier, Chicago",
                        "company": "Art and Design Expo LLC"
                    },
                    {
                        "id": 5,
                        "imageUrl": "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                        "title": "Holiday Market",
                        "price": 5,
                        "date": "December 3, 2021",
                        "location": "Union Square, New York City",
                        "company": "Holiday Markets Inc."
                    },
                    {
                        "id": 6,
                        "imageUrl": "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                        "title": "Concert in the Park",
                        "price": 20,
                        "date": "August 20, 2022",
                        "location": "Central Park, New York City",
                        "company": "Live Nation"                 
                    },
                    {
                        "id": 7,
                        "imageUrl": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                        "title": "Food and Wine Festival",
                        "price": 50,
                        "date": "September 15-18, 2022",
                        "location": "Union Square, San Francisco",
                        "company": "Taste of San Francisco"
                    },
                    {
                        "id": 8,
                        "imageUrl": "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        "title": "Summer Beach Party",
                        "price": 15,
                        "date": "July 3, 2022",
                        "location": "Venice Beach, Los Angeles",
                        "company": "LA Beach Parties"
                    },
                    {
                        "id": 9,
                        "imageUrl": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        "title": "Angular Nation Expo",
                        "price": 35,
                        "date": "October 1-3, 2022",
                        "location": "Google Hall, San Fransico",
                        "company": "ArtExpo NY"
                    },
                    {
                        "id": 10,
                        "imageUrl": "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        "title": "Sports and Adventure Expo",
                        "price": 20,
                        "date": "May 20-22, 2022",
                        "location": "McCormick Place, Chicago",
                        "company": "Google"
                    }

            ]);
        }, 1000);
    });
}

async function renderEvents() {
    const events = await fetchEvents();

    const eventContainer = document.getElementById('event-list');
    eventContainer.innerHTML = ''; 

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        eventCard.innerHTML = `
        <img src="${event.imageUrl}" alt="${event.title}" loading="lazy"/>
        <h2>${event.title}</h2>
        <p>Price: $${event.price}</p>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <p>Company: ${event.company}</p>
        <button onclick="addToFavorites(${event.id})">Add to Favorites</button>
      `;

        eventContainer.appendChild(eventCard);
    });
}

renderEvents();

async function filterEvents() {
    const events = await fetchEvents();

    const filterDate = document.getElementById('filter-date').value;
    const filterLocation = document.getElementById('filter-location').value.toLowerCase();

    const filteredEvents = events.filter(event => {

        const isDateMatch = !filterDate || new Date(event.date) >= new Date(filterDate);

        const isLocationMatch = !filterLocation || event.location.toLowerCase().includes(filterLocation);

        return isDateMatch && isLocationMatch;
    });

    renderFilteredEvents(filteredEvents);
}

async function renderFilteredEvents(eventList) {
    const eventContainer = document.getElementById('event-list');
    eventContainer.innerHTML = '';

    eventList.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        eventCard.innerHTML = `
        <img src="${event.imageUrl}" alt="${event.title}" loading="lazy"/>
        <h2>${event.title}</h2>
        <p>Price: $${event.price}</p>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <p>Company: ${event.company}</p>
        <button onclick="addToFavorites(${event.id})">Add to Favorites</button>
      `;

        eventContainer.appendChild(eventCard);
    });
}

document.getElementById('apply-filters').addEventListener('click', filterEvents);

async function addToFavorites(eventId) {
    const events = await fetchEvents();
    const favoriteEvent = events.find(event => event.id === eventId);

    const favoritesList = document.getElementById('favorites-list');

    const listItem = document.createElement('li');
    listItem.textContent = favoriteEvent.title;
    listItem.setAttribute('data-id', eventId);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = async () => await removeFromFavorites(eventId); 
    listItem.appendChild(removeButton);

    favoritesList.appendChild(listItem);
}

async function removeFromFavorites(eventId) {
    const favoritesList = document.getElementById('favorites-list');
    const listItem = document.querySelector(`li[data-id="${eventId}"]`);
    favoritesList.removeChild(listItem);
}

async function sortEvents(criteria, ascending = true) {
    const events = await fetchEvents();

    const sortedEvents = events.sort((a, b) => {
        if (criteria === 'price') {
            return ascending ? a.price - b.price : b.price - a.price;
        } else if (criteria === 'date') {
            return ascending ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        }
    });

    renderFilteredEvents(sortedEvents);
}
