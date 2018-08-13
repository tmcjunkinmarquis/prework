testNum = num => {
  var p = new Promise((resolve, reject) => {
    if (num > 10) {
      str = num.toString() + " is greater than 10, success!"
      resolve(str);
    } else {
      err = num.toString() + " is less than 10, error!"
      reject(err);
    }
  });
  return p
}

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))