// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for the resume button
const resumeBtn = document.querySelector('.resume-btn');
resumeBtn.addEventListener('mouseenter', () => {
    resumeBtn.style.transform = 'scale(1.05)';
});
resumeBtn.addEventListener('mouseleave', () => {
    resumeBtn.style.transform = 'scale(1)';
});
