// Get reference  to the from and display area
var from = document.getElementById('resume-from');
var resumeOutputElement = document.getElementById('resumeOutput');
var btn = document.getElementById("btn");
// Handle from submission
from.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input value
    //type Assertion
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n   <h2><b>Editable Resume<b/></h2>\n   <h3>Personal Information<h/3>\n   <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n   <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span>></p>\n   <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span>></p>\n\n   <h3>Education</h3>\n   <p contenteditable=\"true\"><b>Education:</b>").concat(education, "}</p>\n\n   <h3>Experience</h3>\n   <p contenteditable=\"true\"><b>Experience:</b>").concat(experience, "</p>\n \n   <h3>Skills</h3>\n   <p contenteditable=\"true\"><b>Skills:</b>").concat(skills, "</p>\n     \n   ");
    // Display the generate resume
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHTML;
        resumeOutputElement.style.display = "block";
        from.style.display = "none";
        btn.style.display = "block";
    }
    else {
        console.error('The resume Output element is missing. ');
    }
});
btn.addEventListener("click", function () {
    from.style.display = "block";
    resumeOutputElement.style.display = "none";
    btn.style.display = "none";
});
