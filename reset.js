const fs = require('fs');
if (fs.existsSync('./output/team.html')) {
  fs.unlinkSync('./output/team.html');
  console.log('/output/ folder reset!');
}