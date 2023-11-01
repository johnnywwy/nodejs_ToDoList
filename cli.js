const program = require('commander');
const api = require('./index.js')

program
  .option('-x, --xxx', 'what the x')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program
  .command('add <taskName> [添加命令]')
  .description('add a task [添加一个任务]')
  .action((...args) => {
    const words = args.slice(0, -1).join(' ')
    api.add(words)
  });

program
  .command('clear <taskName> [删除命令]')
  .description('clear a task [删除任务]')
  .action(() => {
    // const words = args.slice(0, -1).join(' ')
    console.log('this is clear');
  });

program.parse(process.argv);

console.log(program.xxx);
console.log('这里');
