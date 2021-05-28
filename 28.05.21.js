const playerName = document.getElementById('pName');
const playerAge = document.getElementById('age');

const playerTeam = document.getElementById('team');
const addTeam = document.getElementById('addTeam');
const addPlayer = document.getElementById('addPlayer');


const submitSearch = document.getElementById('submitSearch');
const sName = document.getElementById('sName');

teams = []
players = []

addPlayer.addEventListener('click', () =>{
    let name = playerName.value
    let age = playerAge.value
    let teamsPlayed = {...teams}

    let newPlayer = {
        name : name,
        age : age,
        teams : teamsPlayed
    }

    playerName.value = ""
    playerAge.value = ""
    teams = []

    players.push(newPlayer);
    
    console.log(players)
})

addTeam.addEventListener('click', ()=>{
    let team = playerTeam.value;
    teams.push(team);
    playerTeam.value = ""
})

submitSearch.addEventListener('click', ()=>{
    let playerName = sName.value.toLowerCase();

    let playerFound = 0;
    players.forEach(player => {
        if(player.name.toLowerCase() == playerName){
            console.log("Name :", player.name)
            console.log("Age :", player.age)
            console.log("Teams :", player.teams)
            playerFound = 1;
        }
    });

    if(playerFound == 0)console.log("No player")
})