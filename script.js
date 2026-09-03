var API_URL = "https://week-4-mega-project-production-c8b9.up.railway.app";

async function fetchData() {
    var loadingEl = document.getElementById("loading");
    var statusEl = document.getElementById("status");
    
    if (loadingEl) loadingEl.style.display = "block";

    try {
        var response = await fetch(API_URL + "/api/data");
        
        if (!response.ok) {
            throw new Error("HTTP Error! Status: " + response.status);
        }

        var data = await response.json();
        console.log("Fetched Data:", data);

        if (document.getElementById("totalRecords")) {
            document.getElementById("totalRecords").innerText = data.totalRecords || 0;
        }
        if (document.getElementById("activeSessions")) {
            document.getElementById("activeSessions").innerText = data.activeSessions || 0;
        }
        if (document.getElementById("growthRate")) {
            document.getElementById("growthRate").innerText = data.growthRate || "0%";
        }

        if (statusEl) statusEl.innerText = "Data loaded successfully!";
    } catch (error) {
        console.error("Dashboard Fetch Error:", error);
        if (statusEl) statusEl.innerText = "Failed to load data from server.";
    } finally {
        if (loadingEl) loadingEl.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchData();

    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async function(e) {
            e.preventDefault();
            
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            try {
                var res = await fetch(API_URL + "/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email, password: password })
                });

                var result = await res.json();

                if (res.ok) {
                    alert("Login Successful!");
                    var modal = document.querySelector(".auth-modal-overlay");
                    if (modal) modal.style.display = "none";
                } else {
                    alert(result.message || "Login Failed");
                }
            } catch (err) {
                console.error("Login Error:", err);
                alert("Server connection failed during login.");
            }
        });
    }
});