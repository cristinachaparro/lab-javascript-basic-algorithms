// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Sandra";
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Gonzalo";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
  let letter = hacker1[i];
  console.log(letter.toUpperCase());
  console.log(" ");
}

for (let i = hacker2.length; i >= 0; i--) {
  let letter = hacker2[i];
  console.log(letter);
} 

for (let i = 0; i <= hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.")
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.")
    break;
  } else {
    console.log("What?! You both have the same name?")
  }
}

// BONUS 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tellus dignissim, bibendum justo a, fringilla ex. Fusce convallis purus ut hendrerit pulvinar. Donec semper ex sit amet ultrices imperdiet. Nunc sodales nisl sodales erat sodales tempor. Pellentesque ante arcu, feugiat ornare maximus ut, mattis non odio. Nunc quam orci, congue non ligula malesuada, suscipit aliquet nisl. Aenean aliquet elit eget erat rhoncus mollis. Sed sit amet libero et mauris laoreet tempor. Sed vulputate imperdiet eleifend. Sed molestie maximus sodales. In hac habitasse platea dictumst. Pellentesque pretium erat id lacus venenatis, sit amet facilisis justo aliquam. Curabitur posuere sollicitudin finibus. Praesent maximus lectus cursus, posuere lectus sed, congue metus. Proin non fringilla enim.
Nam vel arcu fringilla, semper augue eget, aliquam sapien. Donec auctor pharetra rutrum. Maecenas placerat rutrum lacinia. Donec aliquet, turpis id sollicitudin placerat, nulla est tempus elit, ac tincidunt eros est sit amet mi. Praesent finibus felis quis libero aliquet, sed tincidunt felis bibendum. Nam pretium ipsum velit, sagittis cursus nisl tempus pellentesque. Vestibulum vel ipsum diam. Cras velit justo, euismod vel molestie vitae, rutrum ac orci. Nullam rhoncus, magna eu congue suscipit, est purus dictum magna, vitae porttitor nisl nisi sed ex. Suspendisse ex nibh, pulvinar posuere interdum ac, interdum at orci. Aenean quis varius mi.
Aenean sodales felis eget nisl malesuada, eget porta metus dapibus. Vestibulum finibus maximus bibendum. Nam quis quam in ipsum auctor tincidunt. Maecenas urna velit, maximus dapibus sem at, tempus volutpat ipsum. Fusce dignissim ipsum in orci ultricies imperdiet. Ut et nunc nisl. Aenean venenatis diam sed mi varius euismod. In porttitor nulla vitae euismod rutrum. Pellentesque elementum cursus purus sed maximus. Pellentesque a aliquam nunc. Praesent vitae interdum justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean blandit lacus non purus facilisis iaculis. Praesent in rutrum tellus. Nam bibendum congue turpis, nec egestas libero sollicitudin non. Praesent nulla mi, mattis at volutpat ut, luctus id massa.`

let wordCounter = 1;
let etCounter = 0;
for (i = 0; i <= longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n" ) {
    wordCounter += 1
  }
  
  if ((longText[i] + longText[i+1] + longText[i+2] + longText[i+3]) === " et ") {
    etCounter += 1
  }
}
console.log(`The total number of words is ${wordCounter}.`);
console.log(`The total number of "et" is ${etCounter}.`);

