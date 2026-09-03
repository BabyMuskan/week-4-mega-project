const API_BASE_URL = "http://localhost:5000/api/data";

let currentPage = 1;
const limit = 5;
let currentSearch = "";

// 1. Backend API se Data Fetch Karne Ka Function
async function loadDashboardData(page = 1, search = "") {
    try {
        const url = API_BASE_URL + "?page=" + page + "&limit=" + limit + "&search=" + encodeURIComponent(search);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("HTTP Error Status: " + response.status);
        }

        const data = await response.json();
        
        // UI Render Karein
        renderTableData(data.items);
        renderPaginationUI(data.currentPage, data.totalPages);

    } catch (error) {
        console.error("Dashboard Data Fetch Error:", error);
    }
}

// 2. Data Ko HTML Table Mein Display Karein
function renderTableData(items) {
    const tableBody = document.getElementById("tableBody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (!items || items.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3" class="text-center">No records found</td></tr>';
        return;
    }

    items.forEach(function(item) {
        const row = document.createElement("tr");
        const itemId = item._id || item.id || "-";
        const itemName = item.name || "-";
        const itemEmail = item.email || "-";

        row.innerHTML = '<td>' + itemId + '</td><td>' + itemName + '</td><td>' + itemEmail + '</td>';
        tableBody.appendChild(row);
    });
}

// 3. Pagination Controls Update Karein
function renderPaginationUI(page, totalPages) {
    currentPage = page;
    const pageIndicator = document.getElementById("pageIndicator");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (pageIndicator) {
        pageIndicator.innerText = "Page " + page + " of " + (totalPages || 1);
    }

    if (prevBtn) prevBtn.disabled = page <= 1;
    if (nextBtn) nextBtn.disabled = page >= totalPages;
}

// 4. Next & Previous Buttons Setup
document.getElementById("prevBtn")?.addEventListener("click", function() {
    if (currentPage > 1) {
        loadDashboardData(currentPage - 1, currentSearch);
    }
});

document.getElementById("nextBtn")?.addEventListener("click", function() {
    loadDashboardData(currentPage + 1, currentSearch);
});

// 5. Search Bar Filter Setup
document.getElementById("searchInput")?.addEventListener("input", function(e) {
    currentSearch = e.target.value.trim();
    loadDashboardData(1, currentSearch);
});

// Page load hone par initial data call
document.addEventListener("DOMContentLoaded", function() {
    loadDashboardData(1, "");
});