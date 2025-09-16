////let sara = prompt("Write your note: ");

//if (sara === "donky") {
  //console.log("she is chutya");
//} else {
  //console.log("she is good");
//}

//let price = prompt("Enter your popcorn price");
//if(price==="500"){
  //console.log("your popcorn is XXL");
//} else if (price==="400") {
 //  console.log("your popcorn is XL");
//} else if ( price==="300") {
  //console.log("your popcorn size is X");
//} else if ( price==="200"){
  //console.log("your popcorn size is L");
//}

//nesteed if else
  let citizen = prompt("Are you Indian? (yes/no)");
let voting = Number(prompt("Your age")); 

if (citizen === "yes") {
  if (voting >= 18) {
    console.log("You can vote");
  } else if (voting <= 10) {
    console.log("You are a child");
  } else {
    console.log("You cannot vote");
  }
} else {
  console.log("You are not an Indian citizen");
}
