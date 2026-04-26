function arrayToList(array) {
  let head = null;
  for (let i = array.length - 1; i >= 0; i--) {
    const node = {
      value: array[i],
      rest: head,
    };
    head = node;
  }
  return head;
}

function listToArray(list) {
  let head = list;
  const array = [];
  while (head != null) {
    array.push(head.value);
    head = head.rest;
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, index) {
  let output;
  for (let i = 0; i <= index; i++) {
    if (list === null) return undefined;
    output = list.value;
    list = list.rest;
  }
  return output;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 0));
// → 20
