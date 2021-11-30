export const isValidLength = (value, size) => {
    return value.length === size;
}

export const isValueDuplicate = value => {
    const target = value.split('');

    return target.length !== new Set(target).size;
}

export const removeSpace = text => {
    return text.replace(/ /gi, '');
}

export const isInvalid = (value, size) => {
    if (!isValidLength(value, size)) {
        return !alert(`숫자 ${size}개를 입력해주세요.`);
    }
    if (isNaN(value)) {
        return !alert('숫자만 입력해주세요.');
    }
    if (isValueDuplicate(value)) {
        return !alert('숫자를 중복없이 입력해주세요.');
    }

    return false;
}