let users2 : string [] = ["admin","yousha","mamma","zaryab",]

    users2 = [];
  console.log(users2)

          if(users2.length > 0){

          

        for(let i = 0; i < users2.length; i++) {
            if (users2[i] === "admin"){
                console.log("hello admin, would you like to see a stutus report?")
           
           
            } else {
                console.log (`hello ${users2[i]}, thank you for loging would you loke to see
                a status report?`)
            }
        }
    }else{
        console.log(`we need to find some users!`)
    }