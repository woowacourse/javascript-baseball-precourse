let computerInputNumbers = [];

init();

function init() {
  document.querySelector('h3').style.display = 'none';
  document.querySelector('#result').innerText = '';
  computerInputNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}
