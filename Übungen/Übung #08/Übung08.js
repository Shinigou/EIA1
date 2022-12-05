var colors = [
    "rgb(1,88,224)",
    "#ff0088",
    "yellow",
    "rgba(0,0,100,0.5)", // blau transparebnt
];
// function definition (was wird im Detail gemacht?)
document.querySelector('button').addEventListener('click', function () {
    alterBackground(colors[0]);
    colors.push(colors[0]);
    colors.shift();
    // colors.push(colors[0]); -> Fügt ein weiteres Element am Ende hinzu
    // colors.unshift(colors[1]); -> Fügt ein weiteres Element am Anfang hinzu 
    // colors.pop(); -> Löscht letztes Element
    // colors.shift(); -> Löscht erstes Element
});
// function Aufruf (was wird gemacht?)
function alterBackground(color) {
    document.body.style.background = color;
}
//# sourceMappingURL=%C3%9Cbung08.js.map