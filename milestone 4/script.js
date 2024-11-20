// Form and display area
var form = document.getElementById('resume_form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value; // Corrected ID
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n   <h2><b>Editable Resume</b></h2>\n   <h3><b>Personal Information</b></h3>\n   <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</p></span>\n   <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</p></span>\n   <p><b>Contact:</b><span contenteditable=\"true\"> ").concat(contact, "</p></span>\n\n   <h3>Education</h3>\n   <p contenteditable=\"true\">").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p contenteditable=\"true\">").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p contenteditable=\"true\">").concat(skills, "</p>\n   ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
