
   
declare const html2pdf: any;
const form = document.getElementById('resume-from') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;
const donwloadpdf = (document.getElementById('download-pdf') as HTMLButtonElement)

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const donwload = (document.getElementById('shareable-link-container') as HTMLDivElement)
    
    const pictureInput = document.getElementById('Profilepicture') as HTMLInputElement;
    const pictureFile = pictureInput.files?.[0];
    
    function displayResume(pictureHTML: string) {
        const resumeHTML = 
            `${pictureHTML}
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>   `
        ;

        if (resumeDisplayElement) {
            donwload.style.display = "block"
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('The Resume Display Element Is Missing');
        }

        const shareableLinkContainer = document.getElementById(
            "shareable-link-container"
          ) as HTMLDivElement;
          const shareableLink = document.getElementById(
            "shareable-link"
          ) as HTMLAnchorElement;
        
        const shareableURL = `${
            window.location.origin
          }?username=${encodeURIComponent(username)}`;
          if (shareableLink) {
            shareableLink.href = shareableURL;
            shareableLink.textContent = shareableURL;}
    }

    if (pictureFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const pictureHTML = `<img src="${e.target?.result}" alt="Profile Picture" id="img">`;
          displayResume(pictureHTML);
        };
        reader.readAsDataURL(pictureFile);
      } else {
        displayResume("");
      }
    });


donwloadpdf.addEventListener("click" , ()=>{
    const options = {
        margin: 1,
        filename: 'my-document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    
      if (resumeDisplayElement) {
        html2pdf().from(resumeDisplayElement).set(options).save();
      }

})
   



