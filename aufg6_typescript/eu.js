/*
Aufgabe: Aufg 06 EU Data Output
Datum: 17.11.2022
*/
//SECTION - Variablen zur Deklaration von Einwohnerzahl 
let germany2008 = 82_000_000;
let germany2022 = 84_000_000;
let france2008 = 64_300_000;
let france2022 = 67_800_000;
let italia2008 = 58_800_000;
let italia2022 = 60_000_000;
let japan2008 = 128_000_000;
let japan2022 = 125_700_000;
let all = germany2022 + france2022 + italia2022 + japan2022;
console.log('Die Einwohnerzahl in Deutschland beträgt im Jahr 2022: ${germany2022} \n Relativ zur Gesamtzahl der Bevölkerung in der EU beträgt die Einwohnerzahl im Jahr 2022: ${germany2022 / all} %. \n Für Deutschland hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um ${germany2022 / germany2008} % verändert.');
//# sourceMappingURL=eu.js.map