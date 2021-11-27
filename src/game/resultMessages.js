import { Messages } from "../constants/constants.js";

export default function resultMessages(strikes, balls) {
    let msg;

    if(strikes === 0 && balls === 0) {
        msg = Messages.nothing;
    }else if(strikes === 3) {
        msg = Messages.correct;
    }else if(strikes === 0) {
        msg = balls + Messages.ball;
    }else if(balls === 0) {
        msg = strikes + Messages.strike;
    }else {
        msg = balls + Messages.ball + " " + strikes + Messages.strike;
    }

    return msg;
}
