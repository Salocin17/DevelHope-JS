const printHello = () => console.log("Hello");

function repeatHello (callback) { 
    const repeat = setInterval(callback, 1000);
    setTimeout(() => clearInterval(repeat), 5000);
}

repeatHello(printHello);
