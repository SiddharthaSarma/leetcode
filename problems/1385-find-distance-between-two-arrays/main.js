const findTheDistanceValue = function(arr1, arr2, d) {
  let ans = 0;
  for (let i = 0; i < arr1.length; i++) {
    let ok = 1;
    for (let j = 0; j < arr2.length; j++) {
      ok &= Math.abs(arr1[i] - arr2[j]) > d;
    }
    ans += ok;
  }
  return ans;
};
