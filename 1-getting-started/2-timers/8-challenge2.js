// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter = 0;

const intervalId = setInterval(() => {
  console.log("Hello World");
  counter++;

  if (counter === 5) {
    console.log("Done");
    clearInterval(intervalId); // Stop the interval
  }
}, 1000); // 1000 milliseconds = 1 second
