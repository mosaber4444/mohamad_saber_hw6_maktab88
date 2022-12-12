// const persons = [
//     john: { age: 19, year:2040};
//     jack: { age: 22, year:1};
//     jenny: { age: 21, year:2012;
// ]



let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));

