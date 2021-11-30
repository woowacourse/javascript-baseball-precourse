import { ALERT_MESSAGE } from '../constant.js';

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
        return ALERT_MESSAGE['SIZE_ERROR'];
    }
    if (isNaN(value)) {
        return ALERT_MESSAGE['TYPE_ERROR'];
    }
    if (isValueDuplicate(value)) {
        return ALERT_MESSAGE['DUPLICATE_ERROR'];
    }

    return false;
}