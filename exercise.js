

const printHello = () => { console.log('Hello') };

const printAsyncName = (callback, myName) => {
    setTimeout(callback, 1000);
    setTimeout(() => console.log(myName), 2000);
}

printAsyncName(printHello, 'Nicolas');
