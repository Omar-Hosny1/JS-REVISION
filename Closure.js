const addTo = (number) => {
  return function addTwoNums(other) {
    return number + other;
  };
};
const addToThree = addTo(3);
const addToOne = addTo(1);

console.log(addToThree(1)); // 4
console.log(addToOne(5)); // 6
