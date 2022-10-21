console.log(/\bcat\b/.test("con cat enate"));

// let pattern = /boo+(hoo+)+/i; // i case insensitive
// console.log(pattern.test("Booohoohoo"));

// let pattern = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(pattern.test("1-30-2003 8:45")); // {5,} - means 5 or more times

// let pattern = /neighbou?r/;

// console.log(pattern.test("neighbour"));
// console.log(pattern.test("neighbor"));

// let pattern = /'\d+'/; // one or more digits
// console.log(pattern.test("'123'"));
// console.log(pattern.test("''"));
// pattern = /'\d*'/;
// console.log(pattern.test("'123'"));
// console.log(pattern.test("''"));

// let pattern = /[^01]/; // match anything that is not a 0 or a 1
// console.log(pattern.test("101010001"));
// console.log(pattern.test("10101010h10"));

// let pattern = /^\d\d-\d\d-\d\d\d\d \d\d:\d\d$/;
// console.log(pattern.test("01-20-2003 15:20"));

// let pattern = /abc/;
// let pattern2 = new RegExp("abc");

// console.log(pattern.test("1123abcde"));
// console.log(pattern.test("abxcde"));
// console.log(pattern2.test("abcde"));
// console.log(pattern2.test("abxcde"));

