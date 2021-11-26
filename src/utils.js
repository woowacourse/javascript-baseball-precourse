const $ = (selector) => document.querySelector(selector);

const createElement = (tagName, tagText) => {
    const $create = document.createElement(tagName);
    $create.innerText = tagText;

    return $create;
};

const combineElement = (elements) => {
    const $fragment = document.createDocumentFragment();
    elements.forEach((element) => $fragment.append(element));

    return $fragment;
};

export { $, createElement, combineElement };
