const addCommentBtn = document.getElementById('addCommentBtn');

addCommentBtn.addEventListener('click', async (event) => {
	event.preventDefault();
  const mapLocation = document.getElementById('formattedAddress').innerHTML;
  const url = `/comments?location=${mapLocation}`;

  document.location.href = url;
});