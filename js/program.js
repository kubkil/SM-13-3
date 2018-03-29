// zapewnia odczytanie wartości jako string z kodowaniem utf-8; stdin - przyjmuje informacje z zewnątrz do aplikacji
process.stdin.setEncoding('utf-8');
// na zdarzenie odczytu wykonaj funkcję
process.stdin.on('readable', function() {
  // metoda .read() odczytuje co podał użytkownik an wejściu
  const input = process.stdin.read();
  if(input !== null) {
    const instruction = input.toString().trim();
    switch(instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        break;
      case '/versionNode':
        console.log('Node.js version is ' + process.versions.node + '\n');
        break;
      case '/sysLang':
        process.stdout.write('System language is ' + process.env.LANG + '\n');
        break;
      case '/versionNodeAndSysLang':
        process.stdout.write('System language is ' + process.env.LANG + '\n' + 'Node.js version is ' + process.versions.node + '\n');
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});

// if(instruction === '/exit') {
// // \n - next line?
//   process.stdout.write('Quitting app!\n');
//   process.exit();
// } else {
// //stdout - wypisuje komunikat z procesu
//   process.stderr.write('Wrong instruction!\n');
// }