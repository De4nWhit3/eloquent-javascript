import { SCRIPTS } from "./scripts.js";

console.log(computeDirection("Hello!"));
console.log(computeDirection("Hey, مساء الخير"));

function computeDirection(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter((script) => {
        return script.name != "none";
    });

    scripts = scripts.reduce((prev, current) => {
        return prev.count > current.count ? prev : current;
    });

    return scripts.name;
}

/* Count the characters that belong to each script */
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);

        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

/* Find script for a particular character */
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}