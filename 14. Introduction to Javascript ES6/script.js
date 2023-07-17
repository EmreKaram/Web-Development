alert("Hello World!");
var myName = "Emre Karamahmut";
var myAge = 21;

print("My name is: " + myName + " ,and my age is: " + myAge);

var e = 9 % 6; //3 9 un 3 e bolumunden kalan

function getMilk (money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy" + calcBottles(money, costPerBottle) + " bottles of milk");
  console.log("moveUp");
  console.log("moveUp");
  return calcChange(money, 1.5);
}

function calcBottles (startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange (startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your " + getMilk(5, 1.5) + " change.");