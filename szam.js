function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('eredmeny').innerText = "A dobott szám: " + randomNumber;
}