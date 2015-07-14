function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 3));

function isEqual(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  };
}

console.log(isEqual(10, 12));

function discountPercentage(amount, discount) {
   if (discount > 100 || discount < 0) {
     return "Please choose a discount between 100 and 0.";
   } else {
     return amount * (discount / 100);
   }
}

console.log(discountPercentage(200, 40));


function stringCapitalize(string) {
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i].charAt(0);
    var rest = words[i].slice(1);
    words[i] = firstLetter.toUpperCase() + rest;
  };
  return words.join(" ");
}

console.log(stringCapitalize("boba fett is the greatest bounty hunter in the galaxy."));


function evenNumbers(num) {
  if (num > 100 || num < 0) {
  return "Please choose a number between 100 and 0.";
  } else {
  //loop to check if each number below number selected is even.
    var evenSting = 0;
    for (var i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        //return each number that is even
        console.log(i);
      };
    };
  };
};

evenNumbers(60);


function isDivisible(x, y) {
  if (x % y === 0) {
    return true;
  } else {
    return false;
  };
}

console.log(isDivisible(144, 12));


function oddNumbers(num) {
  if (num > 100 || num < 0) {
    return "Please choose a number between 100 and 0.";
  } else if (num < 40) {
    for (var i = 0; i < 40; i++) {
      if (i % 2 === 1) {
        console.log(i);
      };
    };
  } else if (num > 40) {
    for (var j = 40; j < num; j++) {
      if (j % 2 === 1) {
        console.log(j);
      };
    };
  };
};

oddNumbers(75);
