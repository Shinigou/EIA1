//ClickEvent mit Konsolenausgabe
document.querySelector("#button1").addEventListener("click", buttonClick);
function buttonClick() {
    console.log("sehr dick");
}
//ClickEvent mit HTML-Veränderung
document.querySelector("#button2").addEventListener("click", CountClicks);
let count = 0;
function CountClicks() {
    count++;
    document.querySelector("#result").innerHTML = `${count}`;
}
//# sourceMappingURL=ClickEvent.js.map