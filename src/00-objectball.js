//Part 1: Building the Object
    //define a function called gameObject
    //the function should CONTAIN and RETURN the object
        //TOP LEVEL: 2 Keys (home, away)
        //for each top key, create an object containing 3 keys: "teamName", "colors", and "players"
            //keyName key contains a string 
            //colors key contains an array 
            //players key contains an object 
                //each player name (as a string) will be the key
                    // stats for each player name: "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"

function gameObject() {
  return {
    home:{
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 11,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away:{
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}


//Step 2: Building Functions
//Function one: numPointsScored
    //takes in an argument of player's name
    //returns the number of points scored for that player
function numPointsScored(playerName) {
    let object = gameObject();
    const player = object.home.players[playerName] || object.away.players[playerName];
    return player ? player.points : "Player not Found";
}

console.log(`Points: ${numPointsScored("Alan Anderson")}`);

//Function two: shoeSize
    //takes in an argument of player's name
    //returns the shoe size for that player
function shoeSize(playerName){
    let object = gameObject();
    const player = object.home.players[playerName] || object.away.players[playerName];
    return player ? player.shoe : "Player not Found";
}
console.log(`Shoe Size: ${shoeSize("Alan Anderson")}`);

//Function three: teamColors
    //takes in an argument of player's name
    //returns an array of that teams colors
function teamColors(teamName){
    let object = gameObject();
    const colors = object.home.teamName === teamName ? object.home.colors : object.away.colors;
    return colors ? colors : "Colors not Found";
}
console.log(teamColors("Charlotte Hornets"));

//Function four: teamNames
    //operates on the object
    //returns team names
function teamNames(){
    let object = gameObject();
    return [object.home.teamName, object.away.teamName];
}
console.log(teamNames());

//Function five: playerNumbers
    //takes in an argument of a team name
    //returns an array of the jersey numbers for that team
function playerNumbers (teamName){
  let object = gameObject();
  let jerseyNumbers = [];
  const team = object.home.teamName === teamName ? object.home.players : object.away.players;
  for (const player in team){
    jerseyNumbers.push(team[player].number);
  }
  return jerseyNumbers;
}
console.log(playerNumbers("Brooklyn Nets"));

//Function six: playerStats
    //takes in an argument of a player's name 
    //returns an object of that player's stats
function playerStats(playerName) {
  let object = gameObject();
  const player = object.home.players[playerName] || object.away.players[playerName];
  return player ? player : "Player not Found";
}

console.log(playerStats("Alan Anderson"));

//Function seven: bigShoeRebounds
    //returns the number of rebounds associated with the player that has the largest shoe size
        //First, find the player with the largest shoe size
        // Then, return that player's number of rebounds
        // Remember to think about return values here
function bigShoeRebounds() {
  let object = gameObject();
  let largestShoe = 0;
  let playerRebounds = 0;
  //loops through teams and provide the players in each team
  for (const team in object){
    const players = object[team].players;
    //loops through each player in the team (both)
    for (const playerName in players){
      const player = players[playerName];
    //update for the player who has larger shoe size
      if (player.shoe > largestShoe){
        largestShoe = player.shoe;
        playerRebounds = player.rebounds;
      }
    }
  }
  return playerRebounds;
}

console.log(`Player with Largest Shoe Rebounds: ${bigShoeRebounds()}`);

//Bonus Questions
//Question 1
  //mostPointsScored function for player who has the most points
function mostPointsScored(){
  let object = gameObject();
  let maxPoints = 0;
  let topPlayer = "";
  //loops through teams and provide the players in each team
  for (const team in object){
    const players = object[team].players;
    //loops through each player in the team (both)
    for (const playerName in players){
      const player = players[playerName];
      //update the player with the most points
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topPlayer = playerName;
    }
  }
}
    return topPlayer;
}

console.log(`Player with Most Points: ${mostPointsScored()}`);

//Question 2
  //winningTeam function for team with most points
function winningTeam(){
  let object = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  //home team points
  for (const player in object.home.players){
    homePoints += object.home.players[player].points;
  }
  //away team points
  for (const player in object.away.players){
      awayPoints += object.away.players[player].points;
  }
  return homePoints > awayPoints ? object.home.teamName : object.away.teamName;
}

console.log(`Team with Most Points: ${winningTeam()}`);


//Question 3
  //playerWithLongestName function for player with longest name
function playerWithLongestName(){
let object = gameObject();
  let longestName = "";
  //loops through teams and provide the players in each team
  for (const team in object){
    const players = object[team].players;
    //loops through each player in the team (both)
    for (const playerName in players){
      //update the player with the longest name
      if (playerName.length > longestName.length) {
        longestName = playerName;
    }
  }
}
    return longestName;
}

console.log(`Player with Longest Name: ${playerWithLongestName()}`);


//Super Bonus Question
//doesLongNameStealATon function 
  //returns true if the player with the longest name had the most steals
function doesLongNameStealATon(){
  let object = gameObject();
  const longestNamePlayer = playerWithLongestName();
  let maxSteals = 0;
  let playerWithMostSteals = "";
  //loops through teams and provide the players in each team
  for (const team in object){
    const players = object[team].players;
    //loops through each player in the team (both)
    for (const playerName in players){
      const steals = players[playerName].steals;
      //update the player with the longest name
      if (steals > maxSteals) {
        maxSteals = steals;
        playerWithMostSteals = playerName;
      }
    }
  }
  return longestNamePlayer === playerWithMostSteals ? true : false;
}

console.log(`Player with Longest Name is Player with Most Steals? : ${doesLongNameStealATon()}`);