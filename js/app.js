// JavaScript to dynamically update the homepage
document.addEventListener('DOMContentLoaded', function() {
    // Mock crisis data
    const crises = [
        { title: 'Flood in Bangladesh', severity: 'High', location: 'Dhaka' },
        { title: 'Earthquake in Nepal', severity: 'Severe', location: 'Kathmandu' }
    ];

    // Populate crisis section
    const crisisList = document.getElementById('crisisList');
    crises.forEach(crisis => {
        let li = document.createElement('li');
        li.textContent = `${crisis.title} (${crisis.severity}) - Location: ${crisis.location}`;
        crisisList.appendChild(li);
    });

    // Mock volunteer data
    const volunteers = [
        { name: 'John Doe', task: 'Relief Distribution', location: 'Dhaka' },
        { name: 'Jane Smith', task: 'Medical Aid', location: 'Kathmandu' }
    ];

    // Populate volunteer section
    const volunteerList = document.getElementById('volunteerList');
    volunteers.forEach(volunteer => {
        let li = document.createElement('li');
        li.textContent = `${volunteer.name} - Task: ${volunteer.task}, Location: ${volunteer.location}`;
        volunteerList.appendChild(li);
    });
});
