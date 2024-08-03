function showTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

// Handling project form submission
document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const summary = document.getElementById('project-summary').value;
    const image = document.getElementById('project-image').files[0];
    // Here you would handle form submission, e.g., send data to server or update the UI
    console.log(`Project Title: ${title}, Description: ${description}, Summary: ${summary}, Image: ${image ? image.name : 'None'}`);
    // Optionally reset the form
    document.getElementById('project-form').reset();
});

// Handling publication upload form submission
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('publication-name').value;
    const pdfFile = document.getElementById('pdf-file').files[0];
    const link = document.getElementById('publication-link').value;
    // Here you would handle form submission, e.g., send data to server or update the UI
    console.log(`Publication Name: ${name}, PDF: ${pdfFile ? pdfFile.name : 'None'}, Link: ${link}`);
    // Optionally reset the form
    document.getElementById('upload-form').reset();
});

// Handling news form submission
document.getElementById('news-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('news-title').value;
    const content = document.getElementById('news-content').value;
    // Here you would handle form submission, e.g., send data to server or update the UI
    console.log(`News Title: ${title}, Content: ${content}`);
    // Optionally reset the form
    document.getElementById('news-form').reset();
});

// Handling member form submission
document.getElementById('member-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('member-name').value;
    const bio = document.getElementById('member-bio').value;
    const contact = document.getElementById('member-contact').value;
    // Here you would handle form submission, e.g., send data to server or update the UI
    console.log(`Member Name: ${name}, Bio: ${bio}, Contact: ${contact}`);
    // Optionally reset the form
    document.getElementById('member-form').reset();
});
