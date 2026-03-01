const form = document.querySelector(".tip");

async function addToJson(temperature) {
    let entriesText = localStorage.getItem("entries");
    if (entriesText == null) {
        let fetched = await fetch("../entries.json");
        entriesText = await fetched.text()
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


form.addEventListener("submit", async function (event) {
    console.log("ello world")
    event.preventDefault();
    const temperature = document.querySelector('input[name="temp-select"]:checked');
    if (temperature) {
        await addToJson(temperature.value)
        window.location.href = "../index.html";
    } else {
        alert("Please select a temperature");
    }
}
)



