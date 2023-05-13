class CalculatorOop {
  constructor(operator, numberArgv) {
    (this.operator = operator), (this.numberArgv = numberArgv);
  }
  calculate(op, nums) {
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
  }
  init() {
    return this.calculate(this.operator, this.numberArgv);
  }
}

const [operator, ...argv] = process.argv.slice(2);
const numberArgv = argv.map((number) => Number(number));

module.exports = new CalculatorOop(operator, numberArgv);
