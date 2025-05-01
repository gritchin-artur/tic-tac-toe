export const userName = (i, dom, data) => {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    const modalBox = document.createElement('div');
    modalBox.classList.add('modal-box');

    const promptText = document.createElement('p');
    promptText.innerText = `Player ${i}, enter your name`;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Your name...';
    input.classList.add('modal-input');

    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Submit';
    submitBtn.classList.add('modal-button');

    submitBtn.addEventListener('click', () => {
        const name = input.value.trim();
        if (name) {
            if (i === 1) {
                data.playerX = name;
                dom.playerX.innerText = `Player X: ${name}`;
                document.body.removeChild(overlay);
            }
            if (i === 2) {
                data.playerO = name;
                dom.playerO.innerText = `Player O: ${name}`;
                document.body.removeChild(overlay);
            }
        } else {
            alert('Please enter a name');
        }
    });

    modalBox.append(promptText, input, submitBtn);
    overlay.appendChild(modalBox);
    document.body.appendChild(overlay);
};
