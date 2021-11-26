export const $ = (selector) => document.querySelector(selector);

export function createElement(tagName, tagText) {
    const $create = document.createElement(tagName);
    $create.innerText = tagText;

    return $create;
}

export function combineElement(elements) {
    const $fragment = document.createDocumentFragment();
    elements.forEach((element) => $fragment.append(element));

    return $fragment;
}
