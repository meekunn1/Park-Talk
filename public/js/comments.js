const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async (event) => {
	event.preventDefault();
  const address = document.getElementById('formattedAddress').innerHTML;
	const title = document.getElementById('title').value;
  // const facility = document.getElementById('facility').value;
  const comment = document.getElementById('commentTextArea').value;
  let userID = null;
  let parkID = null;
 await fetch('/api/user', {
    method: 'GET'
  }).then((response) => {
    return (response.json());
  }).then((data) => {
    userID = (data);
  });
  await fetch(`/api/park?location=${address}`, {
    method: 'GET'
  }).then((response) => {
    return (response.json());
  }).then((data) => {
    parkID = (data.id);
  });

	if (title && comment && userID && parkID) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/review', {
    method: 'POST',
    body: JSON.stringify({ title, comment, userID, parkID }),
    headers: { 'Content-Type': 'application/json' },
    });

		if (response.ok) {
			// If successful, redirect the browser to the reviews page
      const url = `/review?location=${address}`;
      document.location.href = url;
		} else {
			alert(response.statusText);
		}
	}
});