const fs = require('fs');

const players = fs.readFileSync('./players.json');

const playerObjects = JSON.parse(players);

console.log(playerObjects);