const facilityDropdown = document.getElementById('facility');
    const otherFacilityInput = document.getElementById('other-facility');

    categoryDropdown.addEventListener('change', function () {
      if (this.value === 'other') {
        otherCategoryInput.classList.remove('d-none');
      } else {
        otherCategoryInput.classList.add('d-none');
      }
    });

    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', async function (event) {
      event.preventDefault(); // Prevent form submission

      const titleInput = document.getElementById('title').value.trim();
      const facilityInput = document.getElementById('facility').value.trim();
      const otherFacilityInput = document.getElementById('other-facility-input').value.trim();
      const commentInput = document.querySelector('textarea').value.trim();

      if (titleInput && commentInput) {
        let selectedFacility = facilityInput;
        if (selectedFacility === 'other') {
          selectedFacility = otherFacilityInput;
        }

        const formData = {
          title: titleInput,
          facility: selectedFacility,
          comment: commentInput
        };

        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/review');
        } else {
          alert(response.statusText);
        }
      }
    });