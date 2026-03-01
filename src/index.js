const tip = document.querySelector(".tip");

async function addToJson(temperature, date){
    let entriesText= localStorage.getItem("entries");
    if(entriesText == null){
        let fetched = await fetch("/entries.json");
        entriesText= await fetched.text()
    }
    let currentdate = (new Date()).toISOString();
    let entries = JSON.parse(entriesText); 
    let isHot = (temperature === "hot");
    
    entries.push(
        {
            "isHot": isHot,
            "date": currentdate,
        }
    ) 

    localStorage.setItem("entries", JSON.stringify(entries));
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const temperature = document.querySelector('input[name="temp-select"]:checked');
    addToJson(temperature.value, time.value);
}

