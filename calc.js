/**
 * node calc.js sum 1 2 3
 *
 * node calc.js sub 10 5 2
 *
 * node calc.js mult 10 10 1
 *
 *  node calc.js div 10 10 1
 */
// console.log(process.argv);
// const [operator, ...argv] = process.argv.slice(2);
// const numberArgv = argv.map((number) => Number(number));

// const calculate = (op, nums) => {
//   let total = null;

//   switch (op) {
//     case "sum":
//       total = nums.reduce((acc, num) => acc + num);
//       break;
//     case "sub":
//       total = nums.reduce((acc, num) => acc - num);
//       break;
//     case "mult":
//       total = nums.reduce((acc, num) => acc * num);
//       break;
//     case "div":
//       total = nums.reduce((acc, num) => acc / num);
//       break;
//     default:
//       total = "невідомий тип операцій";
//       break;
//   }
//   return total;
// };
// const result = calculate(operator, numberArgv);
// console.log(result);
