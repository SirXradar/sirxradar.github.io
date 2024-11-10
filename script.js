async function fetchPlayerCount(serverId, elementId) {
  try {
      const response = await fetch(`https://api.minetools.eu/ping/${serverId}`);
      const data = await response.json();
      
      if (data.players && data.players.online !== undefined) {
          document.getElementById(elementId).textContent = `${data.players.online} players online`;
      } else {
          document.getElementById(elementId).textContent = 'Server offline';
      }
  } catch (err) {
      console.error('Error fetching player count:', err);
  }
}

// Initial fetch and then update every 10 seconds
function updatePlayerCounts() {
  fetchPlayerCount('MultiXNetwork_IP', 'playerCountMultiXNetwork');
  fetchPlayerCount('play.minercraftmc.com', 'playerCountMinerCraft');
}

// Fetch every 10 seconds
setInterval(updatePlayerCounts, 10000);
// Initial fetch on page load
updatePlayerCounts();
