document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('mode-toggle');
    const currentMode = localStorage.getItem('mode') || 'light-mode';

    document.body.classList.add(currentMode);

    toggleButton.addEventListener('click', () => {
        const newMode = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(newMode);
        localStorage.setItem('mode', newMode);
    });
});