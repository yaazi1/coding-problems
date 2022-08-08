/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  let cost = 0;
  totalPassengers = costs.length;
  let costsOfB = [];
  for (let i in costs) {
    costsOfB.push([costs[i][1] - costs[i][0], i])
  }
  costsOfB = costsOfB.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < totalPassengers / 2; i++) {
    cost += costs[costsOfB[i][1]][1]

  }
  for (let i = totalPassengers / 2; i < totalPassengers; i++) {
    cost += costs[costsOfB[i][1]][0]

  }
  return cost;
};