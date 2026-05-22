for (let n = 1; n <= 100; n++) {
  const isDivByThree = n % 3 == 0;
  const isDivByFive = n % 5 == 0;

  if (isDivByThree && isDivByFive) {
    console.log("FizzBuzz");
  } else if (isDivByThree) {
    console.log("Fizz");
  } else if (isDivByFive) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
