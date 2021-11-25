// querySelector wrapper
export function $(selector) {
  return document.querySelector(selector);
}

// addEventListener wrapper
export function $on(target, eventType, callback, capture) {
  target.addEventListener(eventType, callback, !!capture);
}
