//test array
const array = [2, 3, 4, 5, 6];

//map
Array.prototype.mapp = function (callback, options) {
  const array = this;
  const newModifiedArray = [];
  if (typeof options === "object") {
    for (let i = 0; i < array.length; i++) {
      newModifiedArray.push(callback(array[i], i, array).call(options));
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      newModifiedArray.push(callback(array[i], i, array));
    }
  }

  return newModifiedArray;
};

//map example
const newArray = array.mapp((item) => {
  return item * 2;
});
console.log(newArray);

//filter
Array.prototype.filterp = function (callback, options) {
  const array = this;
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof options === "object") {
      if (callback(array[i]).call(options)) {
        filteredArray.push(array[i]);
      }
    } else {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
  }
  return filteredArray;
};

//filter example
const filterArray = array.filterp((item) => {
  return item % 2 == 0;
});
console.log(filterArray);

//reduce
Array.prototype.reducep = function (callback, initialValue) {
  const array = this;
  initialValue = null;
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};
//reduce example

const reducedArrayValue = array.reducep((acc, curr) => {
  return acc + curr;
});
console.log(reducedArrayValue);

//console.log("null+10", null + 10);
