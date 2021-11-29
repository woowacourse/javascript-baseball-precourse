import { createComputerInputNumbers } from './Numbers.js';
import onInputSubmit from './Submit.js';

window.computerInputNumbers = createComputerInputNumbers();
document.getElementById('submit').addEventListener('click', onInputSubmit);
