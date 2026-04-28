const SCRIPTS = require("./scripts.js");

function dominantDirection(text) {
  const dominantScript = textScripts(text).reduce((a, b) => {
    if (a.count >= b.count) {
      return a.name;
    } else {
      return b.name;
    }
  }, "");

  return SCRIPTS.filter((s) => s.name === dominantScript)[0].direction;
}

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name == name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
}

console.log(SCRIPTS);
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → ltr
