const calculate = (op, nums) => {
  let total = null;

  switch (op) {
    case "sum":
      total = nums.reduce((acc, num) => acc + num);
      break;
    case "sub":
      total = nums.reduce((acc, num) => acc - num);
      break;
    case "mult":
      total = nums.reduce((acc, num) => acc * num);
      break;
    case "div":
      total = nums.reduce((acc, num) => acc / num);
      break;
    default:
      total = "невідомий тип операцій";
      break;
  }
  return total;
};
module.exports = calculate;
