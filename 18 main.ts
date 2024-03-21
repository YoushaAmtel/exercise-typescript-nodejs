let myPlaces: string [] = ["Karachi","Lahore","Islamabad","Maree","Pishawar","Quetta",];
console.log(myPlaces);

// making a copy of an array
let copyofarray = myPlaces.slice();
let sortedarray = copyofarray.sort();
console.log(sortedarray);

// printing original array
console.log(myPlaces);

// reversing original array
// first we have make a copy of orignal array
let copyofarray2 = myPlaces.slice();
let reverseoriginalarray = copyofarray2.reverse();
console.log(reverseoriginalarray);

//printing original array
console.log(myPlaces);

//reverse the order of original array
let reverseOriArray2 = myPlaces.reverse();
console.log(reverseOriArray2);

let againReverse = reverseOriArray2.reverse();
console.log(againReverse);     // same as original array

//printing original array
console.log(myPlaces);

//sorting original array
let sortOriArray = myPlaces.sort();
console.log(sortOriArray);

let reversesortedarray = sortOriArray.reverse();
console.log(reversesortedarray);