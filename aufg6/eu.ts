/*
Aufgabe: Aufg 06 EU Data Console Output
Datum: 20.11.2022 
*/

namespace aufg6 {
	const germany2008: number = 82_000_000;
	const germany2022: number = 84_000_000;

	const france2008: number = 64_300_000;
	const france2022: number = 67_800_000;

	const italy2008: number = 58_800_000;
	const italy2022: number = 60_000_000;

	const denmark2008: number = 5_490_000;
	const denmark2022: number = 5_850_000;

	let all: number = germany2022 + france2022 + italy2022 + denmark2022;

	console.log(
		`Die Einwohnerzahl in Deutschland beträgt im Jahr 2022: ${germany2022.toLocaleString()}. \nRelativ zur Gesamtzahl in der EU beträgt die Einwohnerzahl in Deutschland im Jahr 2022: ${
			(germany2022 / all) * 100
		} %. \nFür Deutschland hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um ${
			((germany2022 - germany2008) / germany2008) * 100
		} % verändert.`
	);

	console.log(
		`Die Einwohnerzahl in Frankreich beträgt im Jahr 2022: ${france2022.toLocaleString()}. \nRelativ zur Gesamtzahl in der EU beträgt die Einwohnerzahl in Frankreich im Jahr 2022: ${
			(france2022 / all) * 100
		} %. \nFür Frankreich hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um ${
			((france2022 - france2008) / france2008) * 100
		} % verändert.`
	);

	console.log(
		`Die Einwohnerzahl in Italien beträgt im Jahr 2022: ${italy2022.toLocaleString()}. \nRelativ zur Gesamtzahl in der EU beträgt die Einwohnerzahl in Italien im Jahr 2022: ${
			(italy2022 / all) * 100
		} %. \nFür Italien hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um ${
			((italy2022 - italy2008) / italy2008) * 100
		} % verändert.`
	);

	console.log(
		`Die Einwohnerzahl in Dänemark beträgt im Jahr 2022: ${denmark2022.toLocaleString()}. \nRelativ zur Gesamtzahl in der EU beträgt die Einwohnerzahl in Dänemark im Jahr 2022: ${
			(denmark2022 / all) * 100
		} %. \nFür Dänemark hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um ${
			((denmark2022 - denmark2008) / denmark2008) * 100
		} % verändert.`
	);
}
