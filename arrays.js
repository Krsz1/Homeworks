  // Function with regularFunction.
function OddOrEven(num) {
    if (num % 2 === 0) {
      console.log(num + " es un numero par");
    } else {
      console.log(num + " es un numero impar");
    }
  }
  
  // Fuction with arrowFunction.
  const OddOrEvenArrow = (num) => {
    if (num % 2 === 0) {
      console.log(num + " es un numero par");
    } else {
      console.log(num + " es un numero impar");
    }
  };
  
  OddOrEvenArrow(7);