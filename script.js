function generateForms() {
  const numRoommates = document.getElementById('roommateCount').value;
  const formsContainer = document.getElementById('forms-container');
  formsContainer.innerHTML = ''; // Clear any existing forms

  for (let i = 0; i < numRoommates; i++) {
    const formSection = document.createElement('div');
    formSection.innerHTML = `
      <h3>Roommate ${i + 1}</h3>
      <input type="text" placeholder="Name" name="name_${i}" required />
      <input type="text" placeholder="Age" name="age_${i}" required />
      // Add more input fields as needed
    `;
    formsContainer.appendChild(formSection);
  }
}

// Attach generateForms function to the button's click event
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('generate-forms-btn').addEventListener('click', generateForms);
});
