function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// Test cases
const example1 = ["flower", "flow", "flight"];
const example2 = ["dog", "racecar", "car"];
const example3 = ["over", "overcome", "overcome", "overcome"];

console.log(longestCommonPrefix(example1)); // Output: "fl"
console.log(longestCommonPrefix(example2)); // Output: ""
console.log(longestCommonPrefix(example3)); // Output: "over"
