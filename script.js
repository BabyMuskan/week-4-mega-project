// 1. Live Railway Backend URL Configuration
const BASE_URL = 'https://week-4-mega-project-production.up.railway.app';

// DOM Elements (Apne HTML IDs ke hisab se modify kar lein)
document.addEventListener('DOMContentLoaded', () => {
    fetchData(); // Page load hote hi data bring karein
});

// 2. GET Request: Backend se Data Fetch aur Display Karna
async function fetchData() {
    try {
        const response = await fetch(`${BASE_URL}/api/data`); // Apne backend ka route name check karein
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched Data from Live Database:', data);
        
        // Data ko DOM / Table / Chart mein Render karein
        renderDataToUI(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// 3. POST Request: Naya Data MongoDB / Backend par Send Karna
async function addData(newItemData) {
    try {
        const response = await fetch(`${BASE_URL}/api/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItemData)
        });

        if (!response.ok) {
            throw new Error(`Failed to save data. Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Data added successfully:', result);

        // UI reload karein taaki naya item screen par show ho jaye
        fetchData();
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

// 4. DELETE Request: Data Remove Karna
async function deleteData(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/data/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Failed to delete data. Status: ${response.status}`);
        }

        console.log(`Item with ID ${id} deleted successfully`);
        fetchData(); // Refresh UI list
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

// 5. Helper Function: Screen/DOM par Data Render Karna
function renderDataToUI(items) {
    const container = document.getElementById('data-container'); // Apne HTML element ki ID yahan dein
    if (!container) return;

    container.innerHTML = ''; // Container clear karein

    if (items.length === 0) {
        container.innerHTML = '<p>No records found.</p>';
        return;
    }

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-card';
        itemDiv.innerHTML = `
            <h3>${item.title || item.name || 'Item'}</h3>
            <p>${item.description || ''}</p>
            <button onclick="deleteData('${item._id}')">Delete</button>
        `;
        container.appendChild(itemDiv);
    });
}