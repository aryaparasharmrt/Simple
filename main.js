// Function to fetch GitHub data
function fetchData() {
    const apiUrl = 'https://api.github.com/users/YOUR_GITHUB_USERNAME/repos';
    const headers = {
        Authorization: 'Bearer YOUR_API_TOKEN',
    };

    // Fetch GitHub data
    fetch(apiUrl, { headers })
        .then(response => response.json())
        .then(data => {
            // Process and display the data
            console.log(data); // You can customize this part to create visualizations.

            // Extract repository names and star counts
            const repoNames = data.map(repo => repo.name);
            const starCounts = data.map(repo => repo.stargazers_count);

            // Create a bar chart using Chart.js
            createBarChart(repoNames, starCounts);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to create a bar chart
function createBarChart(labels, data) {
    const ctx = document.getElementById('repoChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Star Count',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

// Event listener for the button click
document.getElementById('fetchDataButton').addEventListener('click', fetchData);
