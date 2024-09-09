// script.js
document.getElementById('education-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const course = document.getElementById('course').value;
    const school = document.getElementById('school').value;
    const start_date = document.getElementById('start_date').value;
    const end_date = document.getElementById('end_date').value;
    const grade = document.getElementById('grade').value;
    const logo = document.getElementById('logo').value;

    // Create the request payload
    const payload = {
        course: course,
        school: school,
        start_date: start_date,
        end_date: end_date,
        grade: grade,
        logo: logo
    };

    // Send POST request
    fetch('/resume/education', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Education added successfully! ID: ' + data.id);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error adding the education.');
    });
});
