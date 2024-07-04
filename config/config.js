var fs = require('fs');
function getUserHome() {
  return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
}
var serverConfigPath = getUserHome() + '/api-config.json';
console.log(serverConfigPath)

var selectedConfigPath;
if (fs.existsSync(serverConfigPath)) {
  selectedConfigPath = serverConfigPath;
  console.log('config is taken from ' + selectedConfigPath);
} else {
  console.log('CONFIG FILE DOESNT EXIST @ ' + selectedConfigPath);
  process.exit();
}

var finalJSONConfig = JSON.parse(fs.readFileSync(selectedConfigPath));
finalJSONConfig.jwtSecret = 'pragati';

module.exports = finalJSONConfig;
