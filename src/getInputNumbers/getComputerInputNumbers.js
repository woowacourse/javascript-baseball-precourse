import { NUMBER } from '../constant';

export default function getComputerInputNumbers() {
  const computerInputList = [];

  while (computerInputList.length !== NUMBER.LENGTH) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      NUMBER.RANDOM_START,
      NUMBER.RANDOM_END,
    );

    if (!computerInputList.includes(randomNumber)) {
      computerInputList.push(randomNumber);
    }
  }
  return computerInputList;
}
