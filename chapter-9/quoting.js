let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
let pattern = /(^|\W)'|'(\W|$)/g;
console.log(text.replace(pattern, '$1"$2'));
// → "I'm the cook," he said, "it's my job."