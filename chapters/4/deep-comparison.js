function deepEqual(x, y) {
  if (typeof x == "object" && x != null && typeof y == "object" && y != null) {
    const xProps = Object.keys(x),
      yProps = Object.keys(y);
    if (xProps.length !== yProps.length) {
      return false;
    }
    for (let prop of xProps) {
      if (!yProps.includes(prop)) {
        return false;
      }
      if (x[prop] !== y[prop]) {
        if (
          typeof x[prop] == "object" &&
          x != null &&
          typeof y[prop] == "object" &&
          y != null
        ) {
          return deepEqual(x[prop], y[prop]);
        } else {
          return false;
        }
      }
    }
    return true;
  } else {
    return x === y;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
