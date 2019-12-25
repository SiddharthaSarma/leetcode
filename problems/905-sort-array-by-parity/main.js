const sortArrayByParity = function(A) {
  const even = [];
  const odd = [];
  A.forEach(e => e % 2 ? odd.push(e) : even.push(e));
  return [...even, ...odd];
};
