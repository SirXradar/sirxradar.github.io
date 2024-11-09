// script.js
function toggleDescription(element) {
    element.classList.toggle('active');
    const express = require('express');
const MinecraftServer = require('minecraft-server-util');
const app = express();

const SERVER_IP = 'play.minercraftmc.com';
const SERVER_PORT = 25565;

app.get('/playerCount', async (req, res) => {
  try {
    const status = await MinecraftServer.status(SERVER_IP, SERVER_PORT);
    res.json({ onlinePlayers: status.players.online });
  } catch (err) {
    res.status(500).send('Error fetching player count');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
}
