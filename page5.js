// Add event listener to the form for submit
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent form submission for validation
    event.preventDefault();
  
    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic validation: Check if all fields are filled
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all the fields.");
      return; // Stop further validation
    }
  
    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // If everything is valid, submit the form (for demo purposes, we log the values)
    console.log('Form submitted:', { name, email, message });
  
  });
  