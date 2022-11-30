/*
Aufgabe: Aufg 07 EU DOM Manipulation
Datum: 27.11.2022
*/
// Declaration of populations of the countries 
const germany2008 = 82_000_000;
const germany2022 = 84_000_000;
const france2008 = 64_300_000;
const france2022 = 67_800_000;
const italy2008 = 58_800_000;
const italy2022 = 60_000_000;
const denmark2008 = 5_490_000;
const denmark2022 = 5_850_000;
let all2008 = germany2008 + france2008 + italy2008 + denmark2008;
let all2022 = germany2022 + france2022 + italy2022 + denmark2022;
// Angaben der Veränderungen im Detail pro Land
document.querySelector(".stars").addEventListener("click", function () {
    alterContent("der europäischen Union", `${all2022.toLocaleString()} Mio`, `${(all2022 / all2022) * 100} %`, `${(((all2022 - all2008) / all2008) * 100).toLocaleString()} %`, `${(all2022 - all2008).toLocaleString()} Mio`, (all2022 / all2022) * 100);
});
document.querySelector(".germany").addEventListener("click", function () {
    alterContent("Deutschland", `${germany2022.toLocaleString()} Mio`, `${(germany2022 / germany2022) * 100} %`, `${(((germany2022 - germany2008) / germany2008) * 100).toLocaleString()} %`, `${(germany2022 - germany2008).toLocaleString()} Mio`, (germany2022 / all2022) * 100);
});
document.querySelector(".france").addEventListener("click", function () {
    alterContent("Frankreich", `${france2022.toLocaleString()} Mio`, `${(france2022 / france2022) * 100} %`, `${(((france2022 - france2008) / france2008) * 100).toLocaleString()} %`, `${(france2022 - france2008).toLocaleString()} Mio`, (france2022 / all2022) * 100);
});
document.querySelector(".italy").addEventListener("click", function () {
    alterContent("Italien", `${italy2022.toLocaleString()} Mio`, `${(italy2022 / italy2022) * 100} %`, `${(((italy2022 - italy2008) / italy2008) * 100).toLocaleString()} %`, `${(italy2022 - italy2008).toLocaleString()} Mio`, (italy2022 / all2022) * 100);
});
document.querySelector(".denmark").addEventListener("click", function () {
    alterContent("Dänemark", `${denmark2022.toLocaleString()} Mio`, `${(denmark2022 / denmark2022) * 100} %`, `${(((denmark2022 - denmark2008) / denmark2008) * 100).toLocaleString()} %`, `${(denmark2022 - denmark2008).toLocaleString()} Mio`, (denmark2022 / all2022) * 100);
});
// Allgemeine Funktion mit Parametern zum Ändern der jeweiligen Daten 
function alterContent(country, population22, popRelationEU, popGrowthRateSince08, popGrowthRateTotal, chartBar) {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + country;
    document.querySelector(".p1").innerHTML = "Gesamtzahl Einwohner:innen in " + country + " in 2022";
    document.querySelector(".h2I").innerHTML = population22;
    document.querySelector(".h2II").innerHTML = popRelationEU;
    document.querySelector(".h2III").innerHTML = popGrowthRateSince08;
    document.querySelector(".h2IV").innerHTML = popGrowthRateTotal;
    document.querySelector(".chart").setAttribute("style", "height:" + chartBar + "%");
}
//# sourceMappingURL=eu.js.map