// find duplicate in arrays

const numArray = [1, 2, 8, 9, 2, 8, 3, 5, 3];

// solution 1
// const duplicates = numArray.filter((ele, index, arr) => {
//   console.log("njnj", arr.indexOf(ele));
//   return arr.indexOf(ele) !== index;
// });

// solution 2 - O(n^2)
// const duplicates = [];

// for (let i = 0; i < numArray.length; i++) {
//   for (let j = i + 1; j < numArray.length; j++) {
//     console.log("arr 1 => ", i, j);
//     if (numArray[i] === numArray[j] && !duplicates.includes(numArray[i])) {
//       duplicates.push(numArray[i]);
//     }
//   }
// }

// solution 3 - using set - O(N)

// const seenSet = new Set();
// const duplicates = [];

// for (const num of numArray) {
//   if (seenSet.has(num)) {
//     duplicates.push(num);
//   } else {
//     seenSet.add(num);
//   }
// }

// solution 4 - using map
const frequencyMap = {};
const duplicates = [];

for (const num of numArray) {
  if (frequencyMap[num]) {
    duplicates.push(num);
  } else {
    frequencyMap[num] = true;
  }
}

// console.log("duplicates", duplicates);
