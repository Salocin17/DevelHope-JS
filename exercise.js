function printName() {
    let helloName = "Hello John";
    function inner() {
        console.log(helloName);
    }
    inner()
}

console.log(printName())