const playerName = document.getElementById('pName');
const playerAge = document.getElementById('age');

const playerTeam = document.getElementById('team');
const addTeam = document.getElementById('addTeam');
const addPlayer = document.getElementById('addPlayer');


const submitSearch = document.getElementById('submitSearch');
const sName = document.getElementById('sName');

let validTeams = /(rcb)|(csk)|(rr)|(kkr)|(dd)|(mi)|(srh)|(kxip)/gi
let validAge = /^[1-4][1-9]/

teams = []
players = []

addPlayer.addEventListener('click', () =>{
    let name = playerName.value
    let age = playerAge.value
    let teamsPlayed = {...teams}
    if(age.match(validAge)){
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
    }
    else console.log("Enter valid age")

    
})

addTeam.addEventListener('click', ()=>{
    let team = playerTeam.value;
    if(team.match(validTeams)){
        teams.push(team);
        playerTeam.value = ""
    }
    else console.log("Enter valid team name")
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