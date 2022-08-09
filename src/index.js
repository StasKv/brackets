module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  function deleteBrackets(array, config) {
    for (let i = 0; i < array.length; i++) {
      for (let subarr = 0; subarr < config.length; subarr++) {
        for (let j = 0; j < config[subarr].length-1; j++) {
          if (
            array[i] == config[subarr][j] &&
            array[i + 1] == config[subarr][j + 1]
          ) {
            console.log('array[i] = ' + config[subarr][j] + ' array[i + 1]= ' + config[subarr][j + 1])
            array.splice(i, 2);
            console.log(array)
            deleteBrackets(array, config);
            
          }
        }
      }
    }
    return array.length == 0;
  }
  return deleteBrackets(arr, bracketsConfig);
}
