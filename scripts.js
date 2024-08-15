const aboutMeText = "Hello! I’m Gulshan, a dedicated Information Science and Engineering student at the Global Academy of Technology, boasting a CGPA of 9.72. My academic journey and projects reflect a deep passion for technology, especially in blockchain development, machine learning, and web development. I have developed several notable projects, including CureConnect, a healthcare management system leveraging blockchain and machine learning, and a QR Code Generator that simplifies URL encoding. My work on disease prediction using machine learning and a To-Do List application with Flask showcases my practical skills and problem-solving abilities. Additionally, I have earned certifications in areas such as Python, Linux command line, blockchain, AI, and web development, underscoring my commitment to continuous learning and technological advancement. I am enthusiastic about applying my skills to innovative projects and contributing to impactful solutions in the tech industry.";
const languages = ["Gulshan", "ಗುಲ್ಶಾನ್", "गुलशन", "గుల్షాన్", "குல்ஷான்", "غولشان"];
let langIndex = 0;

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const arrowToggle = document.querySelector('.arrow-toggle');
    sidebar.classList.toggle('hidden-sidebar');
    // Update arrow direction based on sidebar state
    if (sidebar.classList.contains('hidden-sidebar')) {
        arrowToggle.innerHTML = '&#9654;'; // Right arrow
    } else {
        arrowToggle.innerHTML = '&#9664;'; // Left arrow
    }
}

function typeAboutMe(text, elementId) {
    const element = document.getElementById(elementId);
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 25); // adjust typing speed here
        }
    }
    type();
}

function changeName() {
    const nameElement = document.getElementById('name');
    setInterval(() => {
        nameElement.textContent = languages[langIndex];
        langIndex = (langIndex + 1) % languages.length;
    }, 2000); // change language every 2 seconds
}

// Ensure the "About Me" text is typed out and nav items appear when the page loads
document.addEventListener('DOMContentLoaded', () => {
    typeAboutMe(aboutMeText, 'about-me');
    changeName();
});
