const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	const searchInput = document.getElementById('search-input').value;

	if (searchInput) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/park', {
    method: 'POST',
    body: JSON.stringify({ searchInput }),
    headers: { 'Content-Type': 'application/json' },
    });

		if (response.ok) {
			// If successful, redirect the browser to the reviews page
      const url = `/review?location=${searchInput}`;
      document.location.href = url;
		} else {
			alert(response.statusText);
		}
	}
});