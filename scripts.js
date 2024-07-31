document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Optionally, you can send the form data to your email or a server here.
    
    document.getElementById('contact-form').reset();
});
