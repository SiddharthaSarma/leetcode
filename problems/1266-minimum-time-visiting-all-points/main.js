const minTimeToVisitAllPoints = function(points) {
  let time = 0;
  for (let i = 1; i < points.length; i++) {
    time += Math.max(Math.abs(points[i][1] - points[i - 1][1]), Math.abs(points[i][0] - points[i - 1][0]))
  }
  return time;
};
