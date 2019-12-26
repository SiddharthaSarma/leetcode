const numJewelsInStones = function(J, S) {
  const jewels = {};
  const stones = {};
  for (let i = 0; i < J.length; i++) {
    jewels[J[i]] = 0;
  }
  for (let j = 0; j < S.length; j++) {
    if (jewels.hasOwnProperty([S[j]])) {
      jewels[S[j]]++;
    }
  }
  return Object.keys(jewels).reduce((p, c) => p + jewels[c], 0);
};
