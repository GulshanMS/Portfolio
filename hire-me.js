// hireme.js

let currentEducationIndex = 0;
let currentExperienceIndex = 0;

function moveEducation(direction) {
    const educationItems = document.querySelectorAll('.education-item');
    const totalItems = educationItems.length;

    currentEducationIndex = (currentEducationIndex + direction + totalItems) % totalItems;
    updateEducationView();
}

function moveExperience(direction) {
    const experienceItems = document.querySelectorAll('.experience-item');
    const totalItems = experienceItems.length;

    currentExperienceIndex = (currentExperienceIndex + direction + totalItems) % totalItems;
    updateExperienceView();
}

function updateEducationView() {
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        item.style.display = index === currentEducationIndex ? 'flex' : 'none';
    });
}

function updateExperienceView() {
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.display = index === currentExperienceIndex ? 'flex' : 'none';
    });
}

// Initialize view
document.addEventListener('DOMContentLoaded', () => {
    updateEducationView();
    updateExperienceView();
});
