const modal = document.createElement('div');
modal.id = 'contactModal';
modal.className = 'modal';
document.body.appendChild(modal);

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modal.appendChild(modalContent);

const closeButton = document.createElement('span');
closeButton.className = 'close';
closeButton.innerHTML = '&times;';
modalContent.appendChild(closeButton);

const form = document.createElement('form');
form.action = 'https://getform.io/f/bpjmnmeb';
form.method = 'POST';
form.innerHTML = `
  <h2>Talk to us</h2>
  <label for="name">Work email*</label><br>
  <input type="text" id="name" name="name" required><br>
  
  <div class="name-fields">
    <div>
      <label for="first_name">First name*</label><br>
      <input type="text" id="first_name" name="first_name" required>
    </div>
    <div>
      <label for="last_name">Last name*</label><br>
      <input type="text" id="last_name" name="last_name" required>
    </div>
  </div>

  <div class="terms-conditions">
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
  </div>
  
  <input type="submit" value="CONTACT US">
`;

modalContent.appendChild(form);

button.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

