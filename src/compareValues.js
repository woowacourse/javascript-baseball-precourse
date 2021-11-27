// compare input with answer
export default function compareValues(answer, input) {
  let ball = 0,
    strike = 0;

  // compare each digit by comparing through index of method
  for (let i = 0; i < input.length; i++) {
    const index = answer.indexOf(input[i]);

    // increment strike or ball
    if (index === i) strike++;
    else if (index >= 0) ball++;
  }

  return [ball, strike];
}
