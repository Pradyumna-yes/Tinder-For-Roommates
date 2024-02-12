document.getElementById('generate-forms-btn').addEventListener('click', generateForms);

function generateForms() {
  const numRoommates = document.getElementById('roommateCount').value;
  const formsContainer = document.getElementById('forms-container');
  formsContainer.innerHTML = ''; // Clear previous forms

  for (let i = 1; i <= numRoommates; i++) {
    const formSection = document.createElement('div');
    formSection.className = 'form-section';
    formSection.innerHTML = `
      <h3>Roommate ${i}</h3>
      <form id="roommate-form-${i}">
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Age" name="age" required />
        <input type="text" placeholder="Email" name="email" required />
        <!-- Add more input fields as necessary -->
        <button type="submit" onclick="submitForm(event, ${i})">Submit</button>
      </form>
    `;
    formsContainer.appendChild(formSection);
  }
}

function submitForm(event, roommateNumber) {
  event.preventDefault(); // Prevent form from submitting the traditional way
  const form = document.getElementById(`roommate-form-${roommateNumber}`);
  console.log(`Submitting form for Roommate ${roommateNumber}`);
  // Here, you would normally gather the data and send it to the server
  // For example, using fetch to send a POST request
  // fetch('your-backend-endpoint', { method: 'POST', body: new FormData(form) })
}
