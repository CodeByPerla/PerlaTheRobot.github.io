document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add your form submission logic, like sending the form data to a server
    // For now, let's just log the form data to the console
    let formData = new FormData(this);
    formData.forEach(function(value, key) {
        console.log(key + ': ' + value);
    });
    // You can also reset the form after submission
    // this.reset();
});
