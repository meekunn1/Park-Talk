const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;

    // Build the URL with the search input as a query parameter
    if (searchInput) {
        const url = `/review?location=${searchInput}`;

    // Redirect to the constructed URL
        window.location.href = url;
    }
});