var form = document.getElementById('resume-from');
var resumeDisplayElement = document.getElementById('resumeOutput');
var donwloadpdf = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var username = document.getElementById("username").value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var donwload = document.getElementById('shareable-link-container');
    var pictureInput = document.getElementById('Profilepicture');
    var pictureFile = (_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    function displayResume(pictureHTML) {
        var resumeHTML = "".concat(pictureHTML, "\n            <h2><b>Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ").concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>   ");
        if (resumeDisplayElement) {
            donwload.style.display = "block";
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('The Resume Display Element Is Missing');
        }
        var shareableLinkContainer = document.getElementById("shareable-link-container");
        var shareableLink = document.getElementById("shareable-link");
        var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        if (shareableLink) {
            shareableLink.href = shareableURL;
            shareableLink.textContent = shareableURL;
        }
    }
    if (pictureFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var pictureHTML = "<img src=\"".concat((_a = e.target) === null || _a === void 0 ? void 0 : _a.result, "\" alt=\"Profile Picture\" id=\"img\">");
            displayResume(pictureHTML);
        };
        reader.readAsDataURL(pictureFile);
    }
    else {
        displayResume("");
    }
});
donwloadpdf.addEventListener("click", function () {
    var options = {
        margin: 1,
        filename: 'my-document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    if (resumeDisplayElement) {
        html2pdf().from(resumeDisplayElement).set(options).save();
    }
});
