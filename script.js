function generateForms() {
  const numRoommates = document.getElementById('roommateCount').value;
  const formsContainer = document.getElementById('forms-container');
  formsContainer.innerHTML = ''; // Clear previous forms
  
  for (let i = 0; i < numRoommates; i++) {
    const formSection = document.createElement('div');
    formSection.className = 'form-section';
    formSection.innerHTML = `
      <h3>Roommate ${i + 1}</h3>
      <form id="roommate-form-${i}">
        <!-- Add your input fields for roommate details here -->
        <input type="text" placeholder="Name" name="name" required>
        <input type="email" placeholder="Email" name="email" required>
        <!-- Add more fields as needed -->
        <button type="submit">Submit</button>
      </form>
    `;
    formsContainer.appendChild(formSection);
  }
}

// Add more JavaScript to handle form submissions, validate input, and calculate compatibility scores.
