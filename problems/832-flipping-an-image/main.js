const flipAndInvertImage = function(A) {
  return A.map(e => e.reverse().map(a => a ? 0 : 1))
};
