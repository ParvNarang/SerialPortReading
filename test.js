const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: '/dev/cu.usbmodem14101', baudRate: 9600 })

// const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))
// parser.on('data', console.log)
//const parse = port.pipe(new ReadlineParser({ delimiter: '\n' }));
var delayInMilliseconds = 3000; //1 second

setTimeout(function () {
    //your code to be executed after 1 second
    port.write('o');
    const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))
    parser.on('data', console.log)
}, delayInMilliseconds);
setTimeout(function () {
    //your code to be executed after 1 second
    port.write('f');
    const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))
    parser.on('data', console.log)
}, delayInMilliseconds);
