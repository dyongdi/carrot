function $(selector) {
  return document.querySelector(selector)
}

const _ = {
  minX: 0,
  maxX: 700,
  minY: 0,
  maxY: 150
}

function randomCoordinates(min, max) {
  return Math.random() * (max - min) + min;
};

function displayNone(element) {
  addClassList(element, 'display-none');
}

function displayFlex(element) {
  removeClassList(element, 'display-none');
}

function addClassList(element, className) {
  element.classList.add(className);
}

function removeClassList(element, className) {
  element.classList.remove(className);
}

export { $, _, randomCoordinates, displayNone, displayFlex, addClassList, removeClassList };