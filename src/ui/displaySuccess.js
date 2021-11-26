import {
  MSG_SUCCESS, MSG_RESTART, ID_RESTART_BUTTON, ACTION_RESTART,
} from './consts.js';

function displaySuccess(parent) {
  const heading = document.createElement('h4');
  heading.innerText = MSG_SUCCESS;

  const typography = document.createElement('span');
  typography.innerText = MSG_RESTART;

  const button = document.createElement('button');
  button.id = ID_RESTART_BUTTON;
  button.textContent = '게임 재시작';
  button.dataset.action = ACTION_RESTART;

  parent.appendChild(heading);
  parent.appendChild(typography);
  parent.appendChild(button);
}

export default displaySuccess;
