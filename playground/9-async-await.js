const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('numbers must be non-negative');
      }

      resolve(a+b);
    }, 2000);
  })
};

const doWork = async () => {
  const sum = await add(2, 2);
  const sum2 = await(sum, -1);
  return sum2;
}

doWork().then((res) => {
  console.log('result', res);
}).catch((e) => {
  console.log('e', e);
});