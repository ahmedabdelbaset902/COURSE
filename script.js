//////////////////////////////////////////////////////////////////

/* Add event listener to all anchor links  */

//////////////////////////////////////////////////////////////////

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-button');
    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for enrolling in the course!');
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us. We will get back to you soon!');
        contactForm.reset();
    });
});

/////////////////////////////////////////////////////////////////////////////

/*Valditon Form */

////////////////////////////////////////////////////////////////////////////

document.getElementById('enhancedContactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || message === '') {
        displayResponse('Please fill out all fields.', 'error');
        return;
    }

    displayResponse('Thank you for reaching out! We will get back to you shortly.', 'success');

   
    document.getElementById('enhancedContactForm').reset();
});


function displayResponse(message, type) {
    var responseDiv = document.getElementById('formResponse');
    responseDiv.textContent = message;
    
    if (type === 'success') {
        responseDiv.style.color = 'green';
    } else if (type === 'error') {
        responseDiv.style.color = 'red';
    }

    responseDiv.style.display = 'block';
}

    

////////////////////////////////////////////////////

/*back to top*/

////////////////////////////////////////////////////

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
