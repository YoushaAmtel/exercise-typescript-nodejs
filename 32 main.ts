let current_users : string[] = ["admin","zaryab","mama","bhai","iman",];

let new_users : string[] = ["admin","zaryab","urva","noor","balaj",];

new_users.forEach(new_user => {
    let new_usersLower = new_user.toLowerCase();

    let userNameTaken = current_users.some(current_users => current_users.
        toLowerCase() === new_usersLower);

        if(userNameTaken){
            console.log(`${new_user} needs to choose a new username because
            it is already taken`);
        }else{
            console.log(`${new_user} is the new member added`);
            current_users.push(new_user)
        }
    })     

    console.log(current_users);