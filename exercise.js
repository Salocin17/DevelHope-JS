const isLogged = true;


const randomNum = new Promise((resolve, reject) => {
        isLogged ? resolve(Math.random()) : reject("error");
});


randomNum.then((value) => {
    const objectNum = new Promise((resolve, reject) => {
        value > 0.5 ? resolve({name: "John", age: 24}) : reject('errore');
    })
    objectNum.then((value) => {
        console.log(value);
    })
    .catch((err) => console.error(err));
})
.catch((err) => console.error(err));









