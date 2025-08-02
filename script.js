// script.js
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').innerText = data.name;
    document.getElementById('code').innerText = data.referralCode;
    document.getElementById('donations').innerText = data.donationTotal;
  });
