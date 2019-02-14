let my_array = [9, 9, 8, 8];

function addOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i]++;
      break;
    } else {
      arr[i] = 0;
      if (i === 0) {
        arr.unshift(1);
      }
    }
  }
  console.log(arr);
}

addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
addOne(my_array);
