const canConstruct = function(ransomNote, magazine) {
  const magazineMap = {};
  const ransomMap = {};
  for (let i = 0; i < magazine.length; i++) {
    magazineMap.hasOwnProperty(magazine[i]) ? magazineMap[magazine[i]] += 1 : magazineMap[magazine[i]] = 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    ransomMap.hasOwnProperty(ransomNote[i]) ? ransomMap[ransomNote[i]] += 1 : ransomMap[ransomNote[i]] = 1;
  }
  console.log(magazineMap, ransomMap)
  for (var obj in ransomMap) {
    if (!magazineMap[obj]) {
      return false;
    }
    if (magazineMap[obj] < ransomMap[obj]) {
      return false;
    }
  }
  return true;
};
