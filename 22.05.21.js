// <!-- title: using looping for arrays and objects -->
// <!-- description: 
//     created a dummy array with some objects having people data
//     name, dob, education , etc...
//     we fetch all the details of a particular person by passing the person name as arg to a function
//      Inside the function we loop all data find the matching details and log into the console
    
// -->
// <!-- author : keerthi@1nt18is079 -->
// <!-- date : 22/05/2021 -->


let dummyArr = [
    {
         name : "sachin",
         education : "BE ISE",
         native : "Delhi",
         DOB : "18/10/2000",
         phone_no : "9874563210"
    },
    {
         name : "dhoni",
         education : "BE ISE",
         native : "bangalore",
         DOB : "12/05/2000",
         phone_no : "9874563210"
    },
    {
         name : "rohith",
         education : "BE ISE",
         native : "mysore",
         DOB : "10/10/2000",
         phone_no : "9874563210"
    },
    {
         name : "kohli",
         education : "BE ISE",
         native : "shimoga",
         DOB : "19/10/1999",
         phone_no : "7254784512"
    }
]


const details = (name) =>{

    let personDet = dummyArr.filter((person) => {return person.name == name})
    if(personDet.length > 0){
         console.log("Details of ", name);
         for(key in personDet[0]){
              console.log(`${key} is ${personDet[0][key]}`)
         }
    }
    else{
         console.log("No matches found")
    }
    
}


details("dhoni")

