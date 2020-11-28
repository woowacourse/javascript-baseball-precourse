export default function HandleResult() {
  let _blockInput = false;

  this.IsCorrect = function () {
    _blockInput = true;
    BlockBeforeRestart();
    DisplaySuccessMessage();
    HandleRestartButton();
  }
}