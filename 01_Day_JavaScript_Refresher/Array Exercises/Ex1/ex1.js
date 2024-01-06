console.log("Q1");
emptyArr = Array();
console.log("empty array:", emptyArr);
console.log('\n');

console.log("Q2");
arr1 = Array(7).fill(0);
for (let i in arr1) {
  arr1[i] += parseInt(i) + 1;
}
console.log("array:", arr1);
console.log('\n');

console.log("Q3");
console.log("array length:", arr1.length);
console.log('\n');

console.log("Q4");
console.log("first element:", arr1[0]);
// [1, 2, 3, 4, 5, 6, 7]. Length is 7. Middle element (4) has index 3. parseInt() rounds down, so parseInt(7/2) == 3
console.log("middle element:", arr1[parseInt(arr1.length / 2)]); // parseInt rounds down
console.log("last element:", arr1[arr1.length - 1]);
console.log('\n');

console.log("Q5");
const mixedDataTypes = [
  "cat",
  "mouse",
  ["Peter", "Stephen", "Albert"],
  {
    electron: "negative",
    proton: "positive",
    neutron: "neutral"
  },
  true,
  undefined
]
console.log("mixed data types:", mixedDataTypes);
console.log("mixed data types length:", mixedDataTypes.length);
console.log('\n');

console.log("Qs. 6 -> 10");
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("array:", itCompanies);
console.log("array length:", itCompanies.length);
console.log("first, middle, last:", itCompanies[0], itCompanies[parseInt(itCompanies.length - 1) / 2], itCompanies[itCompanies.length - 1]);
itCompanies.forEach(co => console.log(co));
console.log("\n");

console.log("Q11");
/* 
Array.prototype.forEach enacts a callback function call for each element
The paramterers (co, i) are the element and index, respectively. If there are multiple parameters, they must be in parentheses
The function sets the value at index i to the initial string value after having all its characters mapped to their uppercase versions
The String.split ... Array.join is a common pattern, as map and forEach etc. can only be used on arrays
Each company string is split into an array of its characters, which are uppercased, then joined together back into a string
*/
capitalisedITCompanies = itCompanies.slice();
itCompanies.forEach((co, i) => capitalisedITCompanies[i] = co.split('').map(char => char.toUpperCase()).join(''));
console.log(capitalisedITCompanies);
console.log("\n");

console.log("Q12");
console.log(`${itCompanies.slice(0, length - 1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);
console.log('\n');

console.log("Q13");
function checkCompany(company) {
  return itCompanies.includes(company) ? company + " exists." : company + " not found.";
};
for (co of ["Apple", "Tesla", "AMD", "Microsoft"]) {
  console.log(checkCompany(co));
}
console.log("\n");

console.log("Q14");
const filteredCos = [];
itCompanies.forEach(co => {
  co.split('o').length <= 2 ? filteredCos.push(co) : 0;
});
console.log("Companies with fewer than two 'o's in their name:");
console.log(filteredCos.join(", "));
console.log("\n");

console.log("Q14 - Filter Method");
res = itCompanies.filter(co => {
  return co.split('o').length <= 2;
}).join(", ");
console.log("Companies with fewer than two 'o's in their name:");
console.log(res);
console.log("\n");

console.log("Q15");
console.log("Companies sorted alphabetically");
alphabetisedItCompanies = itCompanies.sort();
console.log(alphabetisedItCompanies);
/*
Sorts in alphabetical order. With numbers, it sorts by code, which means sorts by the first digit not the magnitude.
To sort an array of numbers in ascending order, you use a callback function like this: nums.sort( (a, b) => a - b ); .
This iterates over the list of numbers, with a and b being the current (a) and next (b). If a - b is positive, then they're swapped.
Similarly for descending order, you would do b - a for the return expression
Bit of a strange one to understand, read the docs
*/
console.log("\n");

console.log("Q16");
console.log("Companies sorted alphabetically and reversed");
reversedItCompanies = alphabetisedItCompanies.reverse();
console.log(reversedItCompanies);
console.log("\n");

console.log("Q17-18");
console.log("Back to initial order of companies as shown below:")
console.log(itCompanies);
console.log("First three companies")
console.log(itCompanies.slice(0, 3));
console.log("Last three companies")
console.log(itCompanies.slice((itCompanies.length - 3)));
console.log("\n");

console.log("Q19");
let centralIndex = parseInt(itCompanies.length / 2);
console.log("Middle company: " + itCompanies.slice(centralIndex, centralIndex + 1));
console.log("\n");

console.log("Q20-22");
console.log("Result after the removal of first, middle and last companies:");
itCompanies.pop();
itCompanies.shift();
centralIndex = parseInt(itCompanies.length / 2);
console.log(itCompanies.slice(0, centralIndex).concat(itCompanies.slice(centralIndex + 1)));
console.log("\n");

console.log("Q23");
console.log("Result after the removal of all companies:");
while (itCompanies.length > 0) {
  itCompanies.pop();
}
console.log("itCompanies:", itCompanies);
console.log("\n");