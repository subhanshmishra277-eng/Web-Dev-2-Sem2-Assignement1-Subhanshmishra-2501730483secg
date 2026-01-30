// DOM Traversal & Selection [cite: 12, 37]
const eventForm = document.getElementById('eventForm');
const eventsList = document.getElementById('eventsList');
const demoBtn = document.getElementById('demoBtn');

// 1. Event Handling & Interaction: Add Event [cite: 14, 38]
eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    // Remove placeholder if it's the first event
    if (eventsList.querySelector('.placeholder')) {
        eventsList.innerHTML = '';
    }

    // 2. Dynamically Create Elements [cite: 13]
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <span class="delete-icon">🗑️</span>
        <h4>${title}</h4>
        <p><small>📅 ${date} | 🏷️ ${category}</small></p>
        <p>${description}</p>
    `;

    eventsList.appendChild(card);
    eventForm.reset();
});

// 3. Event Delegation: Delete Event [cite: 15, 39]
eventsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-icon')) {
        // Traverse DOM to find parent card and remove it [cite: 12]
        e.target.parentElement.remove();

        if (eventsList.children.length === 0) {
            eventsList.innerHTML = '<p class="placeholder">No events yet. Add one!</p>';
        }
    }
});

// 4. Text & Style Manipulation Demo [cite: 16, 40]
demoBtn.addEventListener('click', () => {
    const el = document.getElementById('demoElement');
    const results = document.getElementById('demoResults');
    
    // Comparing text methods [cite: 16, 35]
    results.textContent = 
        `innerHTML: ${el.innerHTML}\n` +
        `innerText: ${el.innerText}\n` +
        `textContent: ${el.textContent}`;
    
    el.style.backgroundColor = '#d1c4e9'; // Style manipulation [cite: 40]
});