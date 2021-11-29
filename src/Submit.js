import { createUserInputNumbers } from './Numbers.js';

export default function onInputSubmit(e) {
  e.preventDefault();
  const userInputNumbers = createUserInputNumbers();

  console.log(userInputNumbers);
}
