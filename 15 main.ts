const myFriends: string[] = ["rushna","aqsa","saba","sumiya",];


console.log(`due to some personal reasons ms. ${myFriends[1]} will not come on my dinner`);
myFriends[1] = "komal";

for(let i = 0; i < myFriends.length; i++){
    console.log(`${i}. ${myFriends[i]}`)
}