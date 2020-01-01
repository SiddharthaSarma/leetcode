const backspaceCompare = function(S, T) {
  const first = [];
  const second = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '#') {
      first.push(S[i]);
    } else if (first.length) {
      first.pop();
    }
  }

  for (let i = 0; i < T.length; i++) {
    if (T[i] !== '#') {
      second.push(T[i]);
    } else if (second.length) {
      second.pop();
    }
  }

  return first.join('') === second.join('');
};
