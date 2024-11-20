// Form and display area
var form = document.getElementById('resume_form') as HTMLFormElement;
var resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
   event.preventDefault(); // Prevent page reload

   // Collect input values
   const name = (document.getElementById('name') as HTMLInputElement).value;
   const email = (document.getElementById('email') as HTMLInputElement).value;
   const contact = (document.getElementById('contact') as HTMLInputElement).value; // Corrected ID
   const education = (document.getElementById('education') as HTMLTextAreaElement).value;
   const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
   const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

   // Generate the resume content dynamically
   const resumeHTML = `
   <h2><b>Editable Resume</b></h2>
   <h3><b>Personal Information</b></h3>
   <p><b>Name:</b><span contenteditable="true"> ${name}</p></span>
   <p><b>Email:</b><span contenteditable="true"> ${email}</p></span>
   <p><b>Contact:</b><span contenteditable="true"> ${contact}</p></span>

   <h3>Education</h3>
   <p contenteditable="true">${education}</p>

   <h3>Experience</h3>
   <p contenteditable="true">${experience}</p>

   <h3>Skills</h3>
   <p contenteditable="true">${skills}</p>
   `;

   // Display the generated resume
   if (resumeDisplayElement ) {
       resumeDisplayElement.innerHTML = resumeHTML;
   } else {
       console.error('The resume display element is missing');
   }
});
