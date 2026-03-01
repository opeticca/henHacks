let entriesText = localStorage.getItem("entries");
if (entriesText == null) {
    let fetched = await fetch("../entries.json");
    entriesText = await fetched.text();
}
let entries = JSON.parse(entriesText);
let entry = entries.at(-1);
let mainTemp = document.querySelector(".hot-cold");
let emoji = document.querySelector(".image-hot-cold");
if (entry.isHot) {
    mainTemp.innerText = "hot";
    emoji.src = "images/hot.webp";
} else {
    mainTemp.innerText = "cold";
    emoji.src = "images/cold.webp";
}