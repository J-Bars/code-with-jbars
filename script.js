document.addEventListener('DOMContentLoaded', () => {
    addNewLine();
});

const terminal = document.getElementById('terminal');
const terminalLines = document.getElementById('terminalLines');

terminal.addEventListener('click', () => {
    const inputs = terminal.querySelectorAll('input');
    const lastInput = inputs[inputs.length - 1];
    lastInput?.focus();
});

const terminalCommands = {
    help: () => `
                    <span class="cmd">help</span> ............ Show this help message<br>
                    <span class="cmd">about</span> ........... About this portfolio<br>
                    <span class="cmd">whoami</span> .......... My personal details<br>
                    <span class="cmd">experience</span> ...... List of my job experience<br>
                    <span class="cmd">projects</span> ........ List of my projects<br>
                    <span class="cmd">techstack</span> ....... Tools and technologies used<br>
                    <span class="cmd">clear</span> ........... Clear the terminal
                `,

    about: () => `
                    I’m <strong>Jonathan Barsaga</strong>, an IT graduate and web, game developer.<br>
                    I specialize in creating web and game experiences using modern technologies.<br>
                    For more, use the <span class="cmd">whoami</span> command.
                `,

    whoami: () => `
                    <strong><i class="fas fa-user"></i> Name:</strong> Jonathan Barsaga<br>
                    <strong><i class="fas fa-graduation-cap"></i> Education:</strong> BS in Information Technology at STI College Naga<br>
                    <strong><i class="fas fa-briefcase"></i> Role:</strong> Web App and Game Developer<br>
                    <strong><i class="fas fa-map-marker-alt"></i> Location:</strong> Magarao, Camarines Sur, PH<br>
                    <strong><i class="fas fa-envelope"></i> Email:</strong> jb.jonathanbarsaga@gmail.com
                `,

    experience: () => `
                    <ul class="experience">
                        <li><strong>SK Secretary</strong> – Barangay San Pantaleon (Jan 2023 – Present)</li>
                        <li><strong>Internship</strong> – IT Support and Web Development Intern at DepEd Naga (Feb 2025 - May 2025)</li>
                        <li><strong>IT Support Staff</strong> – Gobot Law Office (Dec 2019 - Jan 2023)</li>
                    </ul>
                    `,

    projects: () => `
                    <ul>
                        <li><i class="fas fa-folder"></i> Labirinto</li>
                        <li><i class="fas fa-folder"></i> Human Resource Development System</li>
                        <li><i class="fas fa-folder"></i> mytawoo</li>
                        <li><i class="fas fa-folder"></i> Web Portfolio</li>
                    </ul>
                    `,

    techstack: () => `
                    <ul class="tech-stack">
                        <li><i class="fab fa-html5"></i> HTML</li>
                        <li><i class="fab fa-css3"></i> CSS</li>
                        <li><i class="fab fa-js-square"></i> JavaScript</li>
                        <li><i class="fab fa-php"></i> PHP</li>
                        <li><i class="fab fa-laravel"></i> Laravel</li>
                        <li><i class="fab fa-unity"></i> Unity 2D</li>
                        <li><i class="fas fa-database"></i> MySQL / SQLite</li>
                        <li><i class="fab fa-git-alt"></i> Git & GitHub</li>
                    </ul>
                    `,

    clear: () => {
        terminalLines.innerHTML = '';
        addNewLine();
        return '';
    }
};


function addNewLine() {
    const newLine = document.createElement('div');
    newLine.classList.add('terminal-line');

    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = '>';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.autocomplete = 'off';
    newInput.spellcheck = false;

    newInput.addEventListener('keydown', handleInput);

    newLine.appendChild(prompt);
    newLine.appendChild(newInput);
    terminalLines.appendChild(newLine);

    terminal.scrollTop = terminal.scrollHeight;
    newInput.focus();
}

function handleInput(e) {
    if (e.key === 'Enter') {
        const command = e.target.value.trim().toLowerCase();
        const output = document.createElement('div');
        output.classList.add('output');

        if (command in terminalCommands) {
            const result = terminalCommands[command]();
            if (result) output.innerHTML = result;
        } else {
            output.textContent = `'${command}' is not recognized as a command.`;
        }

        e.target.disabled = true;
        terminalLines.appendChild(output);
        addNewLine();
    }
}