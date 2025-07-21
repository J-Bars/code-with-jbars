window.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.getElementById('terminal-input');
    terminalInput.focus();

    const terminalContainer = document.querySelector('.profile-terminal');
    terminalContainer.addEventListener('click', () => {
        terminalInput.focus();
    });
});
