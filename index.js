
// const formSubmit = (e) => {

//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     console.log(name.value + " 's mail address is " + email.value);
// }



// const mouseEnterFun = (count) => {
//     if(count == 1)console.log("You entered the compound area");

//     if(count == 2)console.log("You entered inside the temple");

//     if(count == 3)console.log("You are near the statue");

//     if(count == 4)console.log("You can escape from here");
// }

// const mouseOutFun = () => {
//     console.log("You escaped the temple");
// }



// let childDivs = document.querySelectorAll(".child");


// var gameStarted = false;
// var resultCount;   
// let instructions = document.querySelector("#instructions");
 

// childDivs.forEach((child, id) => {
//     child.addEventListener('click', e => {
//         if(!gameStarted){
//             resultCount = Math.floor(Math.random() * 9);
//             console.log(resultCount);
//             gameStarted = true;
//             e.target.style.backgroundColor = "green";
//             instructions.innerText = "Find the matching box";
//         }else{
//             if(id === resultCount){
//                 console.log('You win');
//                 instructions.innerText = "You win";
//                 instructions.style.backgroundColor = "green";
//                 e.target.style.backgroundColor = "green";
//             }
//             else{
//                 console.log('You loose');
//                 instructions.innerText = "You loose";
//                 instructions.style.backgroundColor = "red";
//                 e.target.style.backgroundColor = "red";
//                 childDivs[resultCount].style.backgroundColor = "green";
//             } 
//             gameStarted = false;
//             resultCount = -1;
            
//             setTimeout(timeoutHandler, 2000 );
//         }

//     })
// })

// const timeoutHandler = () => location.reload();



//23/04/2021

const list = document.querySelector("#list");

const button = document.querySelector("#btn");
var songs = [];

button.addEventListener('click', e =>{

    let songName = document.querySelector("#songName");
    let singer = document.querySelector("#singer");
    let songLyrics = document.querySelector("#songLyrics");



    const newSong = {
        name : songName.value,
        singer : singer.value,
        lyrics : songLyrics.value,
        showDetails : function show(){
            console.log("Song name : " , this.name);
            console.log("singer : " , this.singer);
            console.log("Song lyrics : " , this.lyrics);
        }
    }

    songs.push(newSong);
    

    let li = document.createElement("li");
    

    li.addEventListener('click' ,e => {
        newSong.showDetails();
    })


    
    li.textContent = newSong.name;
    // songName.value = "";
    // singer.value = "";
    // songLyrics.value = "";


    list.appendChild(li);
})

const dispButton = document.querySelector("#btnDisp");

dispButton.addEventListener('click', e=>{
    songs.forEach(song => {
        console.log("Song name : " , song.name);
        console.log("singer : " , song.singer);
        console.log("Song lyrics : " , song.lyrics);
    })
})