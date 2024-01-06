ages_sample = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log('Q1 - Age Statistics')
ages = ages_sample.sort((a, b) => a - b);
console.log('Sorted ages:', ages);
// console.log('Youngest student is age:', Math.min(ages));
// console.log('Oldest student is age:', Math.max(ages));

// Without using the Math package...
let youngest = ages[0];
let oldest = ages[0];
for (i in ages) {
  youngest = ages[i] < youngest ? ages[i] : youngest;
  oldest = ages[i] > oldest ? ages[i] : oldest;
}
console.log('Youngest student is age:', youngest);
console.log('Oldest student is age:', oldest);

let median;
if (ages.length % 2 == 0) {
  median = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
} else {
  median = ages[Math.floor(ages.length / 2)] // same as Math.floor
}
console.log("Median student age:", median);

// Array.reduce will convert an array into a single value based on the callback function
mean = ages.reduce((a, b) => a + b) / ages.length;
console.log("Mean average student age:", mean);

// Since the array is sorted, we can just take the difference between the first and the last values
console.log("Range of the student age sample:", ages[ages.length - 1] - ages[0]);

// JS doesn't directly support rounding to specific decimal places
// Instead, simply multiply by the order of magnitude before rounding, then divide by the same figure
// E.g. round(3.141596 * 100) / 100 = round(314.1596) / 100 = 314/100 = 3.14
console.log("Difference between maximum age and mean age:", Math.round(Math.abs(oldest - mean) * 100) / 100);
console.log("Difference between minimium age and mean age:", Math.round(Math.abs(youngest - mean) * 100) / 100);
console.log('\n');


console.log('Q2 - Array Manipulation');
// Replace this countries array for the import once you figure out the http thing
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  // 'Greece'
]
const firstTenCountries = countries.slice(0, 10);
console.log('First ten countries:', firstTenCountries);

// Find middle country(ies)
if (countries.length % 2 == 0) {
  console.log('Middle countries:', [
    countries[(countries.length / 2) - 1],
    countries[(countries.length / 2)]
  ]);
} else {
  console.log('Middle country:', countries[Math.floor(countries.length / 2)]);
}

// Slice countries array into two parts
// The first half will always be the same, as in the odd length case it takes the middle country
// E.g. length = 10 -> first half indices: (0, 5], second half indices: (5, 10]
// or length = 9 -> first half indices: (0, 5], second half indices: (5, 9]
let firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
let secondHalf = countries.filter(country => !firstHalf.includes(country)); // this is just the remaining countries

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);