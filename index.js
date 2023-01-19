const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved")
    })
})