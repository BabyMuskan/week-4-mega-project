const toast = document.getElementById("toast");

function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

const totalRecords = document.getElementById("totalRecords");
const activeSessions = document.getElementById("activeSessions");
const growthRate = document.getElementById("growthRate");

const filter = document.getElementById("filter");
const applyFilter = document.getElementById("applyFilter");

const status = document.getElementById("status");
const retryBtn = document.getElementById("retryBtn");
const loading = document.getElementById("loading");

let allData = [];
let myChart;

// ===============================
// LOADING STATE
// ===============================

function showLoading(show) {
    if (loading) {
        loading.style.display = show ? "block" : "none";
    }
}

// ===============================
// FETCH API DATA
// ===============================

async function fetchData() {

    showLoading(true);
    status.textContent = "";
    retryBtn.style.display = "none";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        allData = await response.json();

        status.textContent = "Data loaded successfully.";

        showToast("Data loaded successfully!");

        updateDashboard(allData);

    } catch (error) {

        status.textContent =
            "Unable to load data. Please try again.";

        showToast("Unable to load data. Please try again.");

        totalRecords.textContent = "—";
        activeSessions.textContent = "—";
        growthRate.textContent = "—";

        retryBtn.style.display = "block";

    } finally {
        showLoading(false);
    }
}

// ===============================
// UPDATE DASHBOARD
// ===============================

function updateDashboard(data) {

    const cleanData = data.filter(
        user => user && user.id
    );

    totalRecords.textContent = cleanData.length;

    activeSessions.textContent =
        Math.floor(cleanData.length * 0.7);

    growthRate.textContent =
        cleanData.length > 5 ? "+14.5%" : "+5.2%";

    createChart(cleanData);
}

// ===============================
// CREATE / UPDATE CHART
// ===============================

function createChart(data) {

    const ctx = document.getElementById("myChart");

    if (myChart) {
        myChart.destroy();
    }

    const labels = data.map(user => user.name);
    const values = data.map(user => user.id * 10);

    myChart = new Chart(ctx, {
        type: "bar",

        data: {
            labels: labels,

            datasets: [{
                label: "Records",
                data: values,
                borderWidth: 1
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// ===============================
// FILTER
// ===============================

applyFilter.addEventListener("click", function () {

    const selectedFilter = filter.value;

    let filteredData;

    if (selectedFilter === "all") {
        filteredData = allData;

    } else if (selectedFilter === "recent") {
        filteredData = allData.slice(0, 5);

    } else {
        filteredData = allData.slice(5);
    }

    updateDashboard(filteredData);

    showToast("Filter applied successfully!");
});

// ===============================
// RETRY
// ===============================

retryBtn.addEventListener("click", function () {
    fetchData();
});

// ===============================
// LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const emailInput =
            document.getElementById("email");

        const passwordInput =
            document.getElementById("password");

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Empty form validation
        if (!email || !password) {
            showToast("Please enter email and password.");
            return;
        }

        try {

            const response = await fetch(
                "https://week-4-mega-project-production.up.railway.app/api/auth/login"
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            // Wrong email/password
            if (!response.ok) {
                showToast(
                    data.message || "Invalid email or password."
                );
                return;
            }

            // Save JWT token
            localStorage.setItem("token", data.token);

            showToast("Login successful!");

            const modal =
                document.querySelector(".auth-modal-overlay");

            if (modal) {
                modal.style.display = "none";
            }

        } catch (error) {

            showToast(
                "Unable to connect to server. Please try again."
            );
        }
    });
}

// ===============================
// START DASHBOARD
// ===============================

fetchData();