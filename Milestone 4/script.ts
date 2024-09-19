// Get reference  to the from and display area
const from = document.getElementById('resume-from') as HTMLFormElement;
const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement
const btn:any = document.getElementById("btn")

// Handle from submission
from.addEventListener('submit', (event: Event) =>{
    event.preventDefault();// prevent page reload

    // Collect input value
    //type Assertion
    const name = (document.getElementById('name') as HTMLInputElement ).value
    const email =( document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement ).value
    const education = (document.getElementById('education') as HTMLInputElement ).value
    const experience = (document.getElementById('experience') as HTMLInputElement ).value
    const skills = (document.getElementById('skills') as HTMLInputElement ).value
   

   // Generate the resume content dynamically
   const resumeHTML =  `
   <h2><b>Editable Resume<b/></h2>
   <h3>Personal Information<h/3>
   <p><b>Name:</b><span contenteditable="true">${name}</span></p>
   <p><b>Email:</b><span contenteditable="true">${email}</span>></p>
   <p><b>Phone:</b><span contenteditable="true">${phone}</span>></p>

   <h3>Education</h3>
   <p contenteditable="true"><b>Education:</b>${education}}</p>

   <h3>Experience</h3>
   <p contenteditable="true"><b>Experience:</b>${experience}</p>
 
   <h3>Skills</h3>
   <p contenteditable="true"><b>Skills:</b>${skills}</p>
     
   `;

// Display the generate resume
if(resumeOutputElement){
   resumeOutputElement.innerHTML = resumeHTML;
   resumeOutputElement.style.display = "block"
  from.style.display = "none"
  btn.style.display = "block"

  }else {
    console.error('The resume Output element is missing. ');
  }


 });
 btn.addEventListener("click",()=>{
    from.style.display = "block"
    resumeOutputElement.style.display = "none"
    btn.style.display = "none"
 })

   
   
   
   
   
   
   
   

   
   
   
    

