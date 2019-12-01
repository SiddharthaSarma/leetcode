const numOfBurgers = function(tomatoSlices, cheeseSlices) {
  let x = tomatoSlices - 2 * cheeseSlices;
  if (x % 2) {
    return [];
  }
  x = Math.floor(x / 2);
  y = cheeseSlices - x;
  if (x < 0 || y < 0) {
    return [];
  }
  return [x, y];
};
