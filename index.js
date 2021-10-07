function hasTargetSum(array, target) {
  // Write your algorithm here
 for(let i = 0; i < array.length - 2; i++) { //array.length - 2 -- i will get to the element before the last(predposlednii)
    debugger
    for(let j = i + 1; j < array.lenght - 1; j++) {
      debugger
      if(array[i] + array[j] === target) {
        debugger
        return true
      }
    }
  return false
  } 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate from the first element to the element before the last one
    iterate from the second element to the last one
    if the sum of an element and the next element equals to the target
      return true
    else 
      continue iteration

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
