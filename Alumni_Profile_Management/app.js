document.addEventListener('DOMContentLoaded', function() {
    const showAddFormBtn = document.getElementById('showAddFormBtn');
    const addAlumniForm = document.getElementById('addAlumniForm');

    // Show/hide add alumni form on button click
    showAddFormBtn.addEventListener('click', function() {
        if (addAlumniForm.style.display === 'none' || addAlumniForm.style.display === '') {
            addAlumniForm.style.display = 'block';
        } else {
            addAlumniForm.style.display = 'none';
        }
    });

    // Handle form submission (Add Alumni)
    addAlumniForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Retrieve form data
        const newName = document.getElementById('newName').value;
        const newYear = document.getElementById('newYear').value;
        const newEmail = document.getElementById('newEmail').value;
        const newLocation = document.getElementById('newLocation').value;
        const newJob = document.getElementById('newJob').value;
        const newCompany = document.getElementById('newCompany').value;

        // Add your logic to save alumni data (e.g., using Firebase)
        console.log('New Alumni Data:', newName, newYear, newEmail, newLocation, newJob, newCompany);

        // Optionally clear form inputs after submission
        addAlumniForm.reset();
        addAlumniForm.style.display = 'none'; // Hide form after submission
    });
});
