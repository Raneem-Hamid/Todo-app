let Name = prompt("Please enter your name");
let gender = prompt("pleas enter your gender");
if (gender !== "male" && gender !== "female") {
      gender = prompt(" please the gender only male or female");
}
let text;
if (gender === "male") {
      text = ("Mr.")
}
else if (gender ==="female") {
      text = ("Ms.")
}
// else {
//       text = (" ")
// }
let age = prompt("pleas enter your age");
if (age <= 0) {
      age = prompt("pleas enter your real age");
}
let skip = confirm("do you want to see the welcoming message?");
if ( skip  ) {
      let welcoming = alert(" welcome " + text + "\t" +Name )

}


