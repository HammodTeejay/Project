const theOneFunc = () => {
  console.log();
};

setTimeout(theOneFunc, 4 * 1000);

// solution
const func = (come) => {
  console.log("Come back after" + come + "second");
};

// Hello after 4 seconds

setTimeout(fun, 4 * 1000, 4);

// Hello after 8 seconds

setTimeout(fun, 8 * 1000, 8);

// You can define only ONE function
