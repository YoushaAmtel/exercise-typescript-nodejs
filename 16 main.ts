const myFriends: string []= ["rushna","komal","saba","sumiya",];
console.log(myFriends);


console.log(`we have 3 more friends to invite on dinners/n`)


//adding three more friends
//add at beginning
myFriends.unshift("zaryab");
console.log(myFriends);

//add at middle
myFriends.splice(2, 0, "iman");

//add at last
myFriends.push("sunny");
console.log(myFriends);

// print all friends alongwith message
for (let i = 0; i < myFriends.length; i++){
    console.log(`Mr&Ms. ${myFriends[i]} you are invite to my dinner`)
}