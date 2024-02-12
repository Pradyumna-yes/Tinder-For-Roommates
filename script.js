document.getElementById('generate-link-btn').addEventListener('click', generateLink);

function generateLink() {
  const numRoommates = document.getElementById('roommateCount').value;
  const linkContainer = document.getElementById('link-container');
  const link = document.createElement('a');
  
  link.href = "#"; // Placeholder for the real link
  link.innerText = "Share this link with your roommates";
  link.onclick = function() {
    generateForms(numRoommates);
  };
  
  linkContainer.innerHTML = ''; // Clear any existing links
  linkContainer.appendChild(link);
}

function generateForms(numRoommates) {
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
  alert(`Form submitted for Roommate ${roommateNumber}`);
  // Simulate form submission and result calculation
}
