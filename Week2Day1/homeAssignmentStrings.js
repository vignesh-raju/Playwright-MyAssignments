//Split the string and find the length of the last word
function split(string) {
    let splitString = string.split(" ");
    let lengthOfArray = (splitString.length-1);
    console.log("The last word is",`"${splitString[lengthOfArray]}"`,"with length",splitString[lengthOfArray].length)
}
split("Hello World")

//Trim the string and find the length of the last word
function split(string) {
    let splitString = string.trim().split(" ");    
    let lengthOfArray = (splitString.length-1);
    console.log("The last word is",`"${splitString[lengthOfArray]}"`,"with length",splitString[lengthOfArray].length)
}
split(" fly me  to  the moon ")

//To check the 2 strings are anagrams
function isAnagram(string1,string2) {
let str1 = string1.trim().toLowerCase();
let str2 = string2.trim().toLowerCase();

let sortStr1 = str1.split("").sort().join("");
let SortStr2 = str2.split("").sort().join("");

return sortStr1 === SortStr2;

}
console.log(isAnagram("Hello","World"));
console.log(isAnagram('listen', 'silent'));
 
