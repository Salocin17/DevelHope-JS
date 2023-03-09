const number = 15;

const myPromise = new Promise ((resolve, reject) => {
    number > 10 ? resolve(number) : reject(error);
    } );

myPromise.then(() => console.log('success'))
        .catch(() => console.error('error'));



