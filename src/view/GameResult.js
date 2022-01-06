import { Messages, HTML } from "../constants/constants.js";

class gameResult {

    constructor(target) {
        this.target = document.querySelector(target);
    }

    template(state) {
        let msg = "";

        if(state !== "reset") {
            if (state.strikes === 0 && state.balls === 0) {
                msg = Messages.nothing;
            } else if (state.strikes === 3) {
                msg = HTML.result;
            } else {
                if (state.balls > 0) {
                    msg += state.balls + Messages.ball + " ";
                }

                if (state.strikes > 0) {
                    msg += state.strikes + Messages.strike;
                }
            }
        }
        console.log(msg);
        return `<p>${msg}</p>`;
    }

    render(state) {
        console.log(this.target.innerHTML);
        this.target.innerHTML = this.template(state);
    }
}

export default gameResult;
