const [operator, ...argv] = process.argv.slice(2);
const numberArgv = argv.map((number) => Number(number));

module.exports = {
  operator,
  numberArgv,
};
