// CALCULATE TIP
let calculateTip = () => {
let billAmount = document.getElementById("input1").value;
let serviceLevel = document.getElementById("selectID").value;
let amountPeople = document.getElementById("input2").value;

let realBillAmount = Number(billAmount);
let realAmountPeople = Number(amountPeople);
let realServiceLevel = Number(serviceLevel);

if (realBillAmount === "" || realAmountPeople == 0) {
	alert("Please enter values");
}

let a = (realBillAmount / realAmountPeople) * realServiceLevel;

console.log(a);


let giveAnswer = () => {
document.getElementById("answer").innerHTML = a;
}
}
// let appendAnswer = () => {
//     let h1 = document.createElement("h1");
// 	h1.appendChild(document.createTextNode(a));
// 	answer.appendChild(h1);
// 	billAmount = "";
// 	serviceLevel = "";
// 	amountPeople = "";
// }



button.addEventListener("click", giveAnswer);
