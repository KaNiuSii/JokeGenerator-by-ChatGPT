async function getJoke() {
    const endpoint = "https://v2.jokeapi.dev/joke/Any";
    
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const joke = data.type === "single" ? data.joke : `${data.setup} ... ${data.delivery}`;
        document.getElementById('joke').innerText = joke;
    } catch (err) {
        console.error("Error fetching joke:", err);
        document.getElementById('joke').innerText = "Failed to fetch a joke. Please try again!";
    }
}

// Fetch a joke on initial page load
getJoke();
