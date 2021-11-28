export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    document.getElementById("result").innerHTML = "나는 play버튼";
    return "나는 play";
  };
}
