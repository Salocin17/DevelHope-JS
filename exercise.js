
const printHello = () => console.log('Hello');

const repeatHello = (callback) =>  setInterval(callback, 1000);

repeatHello(printHello);
