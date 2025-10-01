//this is my Exercise 5 code below

let Strawhats = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji"];
console.log(Strawhats[0]); //this should be Luffy
console.log(Strawhats[1]); //this should be Zoro
console.log(Strawhats[2]); //this should be Nami
console.log(Strawhats[3]); //this should be Usopp
console.log(Strawhats[4]); //this should be Sanji

Strawhats[1] = "Chopper";
console.log(Strawhats); //this should replace Zoro with Chopper, (I might need to replace Luffy with Chopper if I misunderstood the instuctions)

Strawhats[4] = "Robin";
console.log(Strawhats); //this should replace Sanji with Robin, (I might need to replace Luffy with Chopper if I misunderstood the instuctions)
Strawhats.unshift("Franky");
console.log(Strawhats); //this should add Franky to the beginning of the array

let lastStrawhat = Strawhats.pop(); //this should remove Robin from the end of the array
console.log(Strawhats); //this should show the array without Robin
console.log(lastStrawhat); //this should show Robin