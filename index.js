
const formSubmit = (e) => {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    console.log(name.value + " 's mail address is " + email.value);
}



const mouseEnterFun = (count) => {
    if(count == 1)console.log("You entered the compound area");

    if(count == 2)console.log("You entered inside the temple");

    if(count == 3)console.log("You are near the statue");

    if(count == 4)console.log("You can escape from here");
}

const mouseOutFun = () => {
    console.log("You escaped the temple");
}

