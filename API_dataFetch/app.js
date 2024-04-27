  // Function to fetch data from JSONPlaceholder API
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to display fetched data in cards
  function displayData(data) {
    const container = document.getElementById('dataContainer');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${data.title || data.name || data.id}</h3>
      <p>${data.body || data.url || data.email}</p>
    `;
    container.appendChild(card);
  }

  // Fetch data from three different endpoints
  async function fetchDataAndDisplay() {
    const endpoints = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/users/1',
      'https://jsonplaceholder.typicode.com/comments/1'
    ];

    for (const endpoint of endpoints) {
      const data = await fetchData(endpoint);
      displayData(data);
    }
  }

  // Call the function to fetch and display data
  fetchDataAndDisplay();
