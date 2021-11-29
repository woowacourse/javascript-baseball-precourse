import { createUserInputNumbers } from './Numbers.js';
import checkInputValidation from './Check.js';

export default function onInputSubmit(e) {
  e.preventDefault();
  const userInputNumbers = createUserInputNumbers();
  const validation = checkInputValidation(userInputNumbers);

  console.log(validation);
}
