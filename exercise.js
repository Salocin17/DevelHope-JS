const isLogged = true;

const randomNum = new Promise((resolve, reject) => {
  isLogged ? resolve(Math.random()) : reject(new Error("error"));
});

randomNum;
randomNum
  .then((value) => {
    const objectNum = new Promise((resolve, reject) => {
      value > 0.5
        ? resolve({ name: "John", age: 24 })
        : reject(new Error("error"));
    });
    objectNum
      .then((value) => {
        console.log(value);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("finally"));
