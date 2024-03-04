const ipAddressElement = document.getElementById('ip-address');
const languageElement = document.getElementById('language');
const osElement = document.getElementById('os');

// Get user's IP address, language, and OS
fetch('/api/whoami')
  .then(response => response.json())
  .then(data => {
    ipAddressElement.textContent = data.ipaddress;
    languageElement.textContent = data.language;
    osElement.textContent = `${data.software.name} ${data.software.version}`;
  });