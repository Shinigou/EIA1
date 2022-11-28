/*
Aufgabe: Aufg 07 EU DOM Manipulation
Datum: 27.11.2022
*/
//SECTION - Declaration of populations of the countries 
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
//!SECTION
//SECTION - Function EU
document.querySelector(".stars").addEventListener("click", AlterContentEU);
function AlterContentEU() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in der europäischen Union";
    document.querySelector(".h2I").innerHTML = `${all2022.toLocaleString()} Mio`;
    document.querySelector(".p1").innerHTML = "";
    document.querySelector(".h2II").innerHTML = `${(all2022 / all2022) * 100} %`;
    document.querySelector(".h2III").innerHTML = `${(((all2022 - all2008) / all2008) * 100).toLocaleString()} %`;
    document.querySelector(".h2IV").innerHTML = `${(all2022 - all2008).toLocaleString()} Mio`;
    document.querySelector(".chart").setAttribute("style", "height:" + (all2022 / all2022) * 100 + "%");
    // Manipulation vom Style-Attribute "height" der chart bar -> passt sich dynamisch an  
}
//!SECTION
//SECTION - Function Germany
document
    .querySelector(".germany")
    .addEventListener("click", AlterContentGermany);
function AlterContentGermany() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Deutschland";
    document.querySelector(".h2I").innerHTML = `${germany2022.toLocaleString()} Mio`;
    document.querySelector(".p1").innerHTML = "";
    document.querySelector(".h2II").innerHTML = `${((germany2022 / all2022) * 100).toLocaleString()} %`;
    document.querySelector(".h2III").innerHTML = `${(((germany2022 - germany2008) / germany2008) * 100).toLocaleString()} %`;
    document.querySelector(".h2IV").innerHTML = `${(germany2022 - germany2008).toLocaleString()}`;
    document.querySelector(".chart").setAttribute("style", "height:" + (germany2022 / all2022) * 100 + "%");
}
//!SECTION
//SECTION - Function Italy
document
    .querySelector(".italy")
    .addEventListener("click", AlterContentItaly);
function AlterContentItaly() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Italien";
    document.querySelector(".h2I").innerHTML = `${italy2022.toLocaleString()} Mio`;
    document.querySelector(".p1").innerHTML = "";
    document.querySelector(".h2II").innerHTML = `${((italy2022 / all2022) * 100).toLocaleString()} %`;
    document.querySelector(".h2III").innerHTML = `${(((italy2022 - italy2008) / italy2008) * 100).toLocaleString()} %`;
    document.querySelector(".h2IV").innerHTML = `${(italy2022 - italy2008).toLocaleString()} Mio`;
    document.querySelector(".chart").setAttribute("style", "height:" + (italy2022 / all2022) * 100 + "%");
}
//!SECTION
//SECTION - Function Denmark
document
    .querySelector(".denmark")
    .addEventListener("click", AlterContentDenmark);
function AlterContentDenmark() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Dänemark";
    document.querySelector(".h2I").innerHTML = `${denmark2022.toLocaleString()} Mio`;
    document.querySelector(".p1").innerHTML = "";
    document.querySelector(".h2II").innerHTML = `${((denmark2022 / all2022) * 100).toLocaleString()} %`;
    document.querySelector(".h2III").innerHTML = `${(((denmark2022 - denmark2008) / denmark2008) * 100).toLocaleString()} %`;
    document.querySelector(".h2IV").innerHTML = `${(denmark2022 - denmark2008).toLocaleString()}`;
    document.querySelector(".chart").setAttribute("style", "height:" + (denmark2022 / all2022) * 100 + "%");
}
//!SECTION
//SECTION - Function France
document
    .querySelector(".france").addEventListener("click", AlterContentFrance);
function AlterContentFrance() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Frankreich";
    document.querySelector(".h2I").innerHTML = `${france2022.toLocaleString()} Mio`;
    document.querySelector(".p1").innerHTML = "";
    document.querySelector(".h2II").innerHTML = `${((france2022 / all2022) * 100).toLocaleString()} %`;
    document.querySelector(".h2III").innerHTML = `${(((france2022 - france2008) / france2008) * 100).toLocaleString()} %`;
    document.querySelector(".h2IV").innerHTML = `${(france2022 - france2008).toLocaleString()}`;
    document.querySelector(".chart").setAttribute("style", "height:" + (france2022 / all2022) * 100 + "%");
}
//!SECTION
//# sourceMappingURL=eu.js.map