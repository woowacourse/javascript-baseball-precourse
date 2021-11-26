export default function resultMessages(strikes, balls) {
    let messages;

    if(strikes === 0 && balls === 0) {
        messages = "낫싱";
    }else if(strikes === 3) {
        messages = "🎉 정답을 맞추셨습니다! 🎉";
    }else if(strikes === 0) {
        messages = balls + "볼";
    }else if(balls === 0) {
        messages = strikes + "스트라이크";
    }else {
        messages = balls + "볼 " + strikes + "스트라이크";
    }

    return messages;
}
