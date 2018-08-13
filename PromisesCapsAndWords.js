// 2. Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order.If the array contains anything but strings, it should throw an error.

// After you make the functions with Promises, the happy path code looks like:

function isString(currentValue) {
  return typeof currentValue === 'string';
}

makeAllCaps = arr => {
  var p = new Promise((resolve, reject) => {
    if (arr.every(isString)) {
      words = arr.map(item => {
        newItem = item.toUpperCase()
        return newItem
      })
      resolve(words)
    } else {
      err = 'No, the array you passed in contained an element that was not a string!';
      reject(err)
    }
  })
  return p
}

sortWords = (wordArr) => {
  var p = new Promise((resolve, reject) => {
    answer = wordArr.sort()
    resolve(answer)
  })
  return p
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

// ['BIRD', 'PANTS', 'WOWOW']
// And the sad path should be:

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

// 'No, the array you passed in contained an element that was not a string!'