const softwareInfo = require('ua-parser-js');

function getInfo(req, res) {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const os = req.headers['user-agent'];

  const software = softwareInfo(os);

  res.json({
    ipaddress: ipAddress,
    language: language,
    software,
  });
}

module.exports = {getInfo};