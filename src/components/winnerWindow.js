export const winnerWindow = (message) => {
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');

    const box = document.createElement('div');
    box.classList.add('modal-box');

    const msg = document.createElement('p');
    msg.innerText = message;

    const btn = document.createElement('button');
    btn.innerText = 'Reset';
    btn.classList.add('modal-button');

    btn.addEventListener('click', () => {
        location.reload();
    });

    box.append(msg, btn);
    modal.appendChild(box);
    document.body.appendChild(modal);
};
