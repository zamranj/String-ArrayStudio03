const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(",").sort();
let cabinet2 = equipment.split(",").sort();
let cabinet3 = pets.split(",").sort();
let cabinet4 = sleepAids.split(",").sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2,cabinet3,cabinet4];
console.log(cargoHold);



//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectACabinet = input.question("Select a cabinet (1-4): ");

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(selectACabinet > 0 && selectACabinet < 5){
  let index = selectACabinet - 1
  console.log(`You picked cabinet[${selectACabinet}] ${cargoHold[index]}`)
}else{
  console.log(`You have entered an invalid number.`)
}


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let pickCabinet = input.question("Select a cabine (1-4): ");
index = pickCabinet -1;
let item = input.question("Select an item: ");
if(index >= 0 && index < 4){
   let temp = cargoHold[index];
   if(temp.includes(item)){
     console.log(`Cabinet ${pickCabinet} DOES contain ${item}.`)
   }
   
}else{
  console.log(`Cabinet ${pickCabinet} DOES NOT contain ${item}.”`)
}
