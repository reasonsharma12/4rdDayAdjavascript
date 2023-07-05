//callback
function calculateSumCallback(number, callback) {
    if (number.length === 0) {
      callback(null, 0);
    } else {
      let sum = number.reduce((acc, num) => acc + num, 0);
      callback(null, sum);
    }
  }
  
  const number = [1, 2, 3, 4];
  calculateSumCallback(number, (err, result) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Sum:', result);
    }
  });
  //promice
  function calculateSumPromise(numberss) {
    return new Promise((resolve, reject) => {
      if (numberss.length === 0) {
        reject('Empty array');
      } else {
        let sum = numberss.reduce((acc, num) => acc + num, 0);
        resolve(sum);
      }
    });
  }
  const numberss = [1, 2, 3, 4];
  calculateSumPromise(numbers)
    .then(result => {
      console.log('Sum:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  //asynch
  async function calculateSumAsync(numbers) {
    if (numbers.length === 0) {
      throw new Error('Empty array');
    } else {
      let sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum;
    }
  }
  
  const numbers = [1, 2, 3, 4];
  (async () => {
    try {
      const result = await calculateSumAsync(numbers);
      console.log('Sum:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  })();
  
  