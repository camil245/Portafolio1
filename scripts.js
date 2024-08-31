document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

      
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

    
        formMessage.innerHTML = `
            <div class="alert alert-success" role="alert">
                Gracias, ${name}. Hemos recibido tu mensaje y nos pondremos en contacto contigo en breve.
            </div>
        `;

      
        form.reset();
    });
});
