
let pattern = /\w ca[rt]s?/;
verify(pattern, ["my car", "bad cats"], ["camper", "high art"]);

pattern = /pr?ops?/;
verify(pattern, ["pop culture", "mad props"], ["plop", "prrrop"]);

pattern = /ferr(et|y|ari)/;
verify(pattern, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

pattern = /cious\b/;
verify(pattern, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

pattern = /\s[.]/;
verify(pattern, ["bad punctuation ."], ["escape the period"]);

pattern = /^\S{3,}$/;
verify(pattern, ["Siebentausenddreihundertzweiundzwanzig"],
              ["no", "three small words"]);

pattern = /^(red|wob)/;
verify(pattern, ["red platypus", "wobbling nest"],
              ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no){
    // Ignore unfinished exercises
    if(regexp.source == "...") return;
    
    for(let str of yes){
        if(!regexp.test(str)){
            console.log(`Failure to match '${str}'`);
        }
    }
    
    for(let str of no){
        if(regexp.test(str)){
            console.log(`Unexpected match for '${str}'`);
        }
    }

    for(let str of yes){
        if(regexp.test(str)){
            console.log(`Matched: '${str}'`);
        }
    }
}