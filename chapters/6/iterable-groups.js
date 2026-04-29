class Group {
  #collection;

  constructor() {
    this.#collection = [];
  }

  add(value) {
    if (!this.#collection.includes(value)) {
      this.#collection.push(value);
    }
  }

  delete(value) {
    this.#collection = this.#collection.filter((val) => val !== value);
  }

  has(value) {
    return this.#collection.includes(value);
  }

  get size() {
    return this.#collection.length;
  }

  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        const value = this.#collection[i];
        i++;
        if (value === undefined) {
          return { value: undefined, done: true };
        } else {
          return { value, done: false };
        }
      },
    };
  }

  static from(array) {
    const newGroup = new Group();
    for (let element of array) {
      newGroup.add(element);
    }
    return newGroup;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
console.log(group.size);
// → 1

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
