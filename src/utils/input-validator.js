export const isValueDuplicate = value => {
    const target = value.split('');
    return target.length !== new Set(target).size;
}

export const isValid = value => {
    if (isValueDuplicate(value)) {
        return !alert('숫자를 중복없이 입력해주세요.');
    }
}
