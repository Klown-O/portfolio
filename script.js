// Function to toggle light/dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Optionally switch the icon based on mode
    const icon = document.querySelector('.theme-toggle i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Change to moon icon for dark mode
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Switch back to sun icon for light mode
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }
}

// Check if a theme is stored in localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
