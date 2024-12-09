function addEducation() {
    const educationContainer = document.getElementById("educationContainer") as HTMLElement;
    const newEducationInput = document.createElement("input");
    newEducationInput.type = "text";
    newEducationInput.className = "education";
    newEducationInput.placeholder = "Degree, Institution";
    educationContainer.appendChild(newEducationInput);
}

function addExperience() {
    const experienceContainer = document.getElementById("experienceContainer") as HTMLElement;
    const newExperienceInput = document.createElement("input");
    newExperienceInput.type = "text";
    newExperienceInput.className = "experience";
    newExperienceInput.placeholder = "Job Title, Company";
    experienceContainer.appendChild(newExperienceInput);
}

function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;

    const educationInputs = document.getElementsByClassName("education");
    const experienceInputs = document.getElementsByClassName("experience");
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(',').map(skill => skill.trim());

    let educationList = '';
    for (let i = 0; i < educationInputs.length; i++) {
        const educationInput = educationInputs[i] as HTMLInputElement; // Cast to HTMLInputElement
        if (educationInput.value) {
            educationList += `<p>${educationInput.value}</p>`;
        }
    }

    let experienceList = '';
    for (let i = 0; i < experienceInputs.length; i++) {
        const experienceInput = experienceInputs[i] as HTMLInputElement; // Cast to HTMLInputElement
        if (experienceInput.value) {
            experienceList += `<p>${experienceInput.value}</p>`;
        }
    }

    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
    resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <h3>Education</h3>
        ${educationList}
        <h3>Work Experience</h3>
        ${experienceList}
        <h3>Skills</h3>
        <p>${skills.join(', ')}</p>
    `;
}