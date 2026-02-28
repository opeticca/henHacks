const tip = document.querySelector(".tip");

function addToJson(temperature, date){
    let json= ("/entries.json").load();
    const fs= require(fs);
    
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const temperature = document.querySelector('input[name="temp-select"]:checked');
    addToJson(temperature.value, time.value);
}

