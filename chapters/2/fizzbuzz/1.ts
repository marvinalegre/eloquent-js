for (let i = 1; i <= 100; i++) {
  const isDivByThree = i % 3 === 0;
  const isDivByFive = i % 5 === 0;

  if (isDivByThree && isDivByFive) {
    console.log("FizzBuzz");
  } else if (isDivByThree) {
    console.log("Fizz");
  } else if (isDivByFive) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
