import { winnerWindow } from '../components/winnerWindow.js';
import data from '../data.js';
import { checkIsWin } from '../handlers/checkIsWin.js';
import { clickHandler } from '../handlers/clickHandler.js';
import { playersMove } from '../handlers/playersMove.js';

export const clickEvent = () => {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            if (!cell.classList.contains('clicked')) {
                cell.innerText = playersMove(data.clickCount);
                cell.style.backgroundColor = '#ff00c8';
                cell.style.color = '#ffff';
                cell.style.boxShadow = '0 0 15px #ff00c8, 0 0 30px #ff00c8';
                cell.classList.toggle('clicked');
                data.clickCount++;
                clickHandler(cells, data);

                const message = checkIsWin(data);
                if (message) {
                    winnerWindow(message);
                }
            }
        });
    });
};
