//map
Array.prototype.mapp = function (callback, options) {
  const array = this;
  const newModifiedArray = [];
  for (let i = 0; i < array.length; i++) {
    newModifiedArray.push(callback(array[i], i, array));
  }
  return newModifiedArray;
};

//filter
Array.prototype.filterp = function (callback, options) {
  const array = this;
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

const array = [2, 3, 4, 5, 6];
const newArray = array.mapp((item) => {
  return item * 2;
});
console.log(newArray);

const filterArray = array.filterp((item) => {
  return item % 2 == 0;
});
console.log(filterArray);
