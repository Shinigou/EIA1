namespace aufg8 {
	// Arrays
	
	let sounds: string[] = [
		"mp3/hihat.mp3",
		"mp3/kick.mp3",
		"mp3/snare.mp3",
		"mp3/F.mp3",
		"mp3/G.mp3",
		"mp3/A.mp3",
		"mp3/C.mp3",
		"mp3/laugh-1.mp3",
		"mp3/laugh-2.mp3",
	];

	// Beat Array
	let beat: string[] = [sounds[0], sounds[1], sounds[2]];

	// Zähler Index Deklaration
	let zähler: number = 0;

	//SECTION - 1. addEventListener
	// Sobald die Seite lädt, wird zunächst ein clickListener installiert (das Ohr, das horcht, ob und wann etwas geklickt wurde)
	window.addEventListener("load", addClickListener);
	//!SECTION

	//SECTION - 2. addClickListener
	// Als nächstes wird diese Funktion: (addClickListener) mit dem Ladevorgang des Fensters (window) aufgerufen / ausgeführt!
	// Innerhalb dieser Funktion folgt alles, was mit dem Aufruf dieser ausgeführt werden soll: (weitere Befehle)

	//NOTE - Was passiert hier genau?
	// Mit dem document.querySelector wird das HTML-Element herausgesucht.
	// Mit dem .addeventListener wird an dieses Element eine neue, anonyme Funktion mit dem mitgegebenen Argument/Parameter 'event' drangehängt, die ausgeführt wird, soabld ein click-event passiert.
	// Ausgeführt wird dann der Funktions-Aufruf: 'playSample' mit dem (sounds[0])

	function addClickListener() {
		document
			.querySelector("#hihat")
			.addEventListener("click", function (event) {
				playSample(sounds[0]);
			});
		document.querySelector("#kick").addEventListener("click", function (event) {
			playSample(sounds[1]);
		});
		document
			.querySelector("#snare")
			.addEventListener("click", function (event) {
				playSample(sounds[2]);
			});
		document.querySelector("#F").addEventListener("click", function (event) {
			playSample(sounds[3]);
		});
		document.querySelector("#G").addEventListener("click", function (event) {
			playSample(sounds[4]);
		});
		document.querySelector("#A").addEventListener("click", function (event) {
			playSample(sounds[5]);
		});
		document.querySelector("#C").addEventListener("click", function (event) {
			playSample(sounds[6]);
		});
		document
			.querySelector("#laugh-1")
			.addEventListener("click", function (event) {
				playSample(sounds[7]);
			});
		document
			.querySelector("#laugh-2")
			.addEventListener("click", function (event) {
				playSample(sounds[8]);
			});
		document.querySelector("#play").addEventListener("click", function (event) {
			playBeat();
		});
	}
	//!SECTION

	//SECTION - 3. Zentrale Funktion
	// Beschreibung zentraler Funktion zum richtig Interpretieren von String in Audio und zum Abspielen der Dateien

	//NOTE - Wass passiert hier genau?

	// Diese zentrale Funktion 'playSample' bekommt den Parameter 'audioFile' vom Typ 'string', weil die mp3-Dateien im ersten Array als String gelistet sind
	// Mit den geschweiften Anweisungsklammern bzw. in diesen '{}' folgen dann die Anweisungen, die die Funktion ausführen soll:

	// Zunächst wird eine neue Variable mit Namen 'sound' gleichgestellt (also deklariert, dass 'sound' eine neue Audio-Datei ist und diese als HTMLAudioElement akzeptiert wird)
	// Am Ende folgt der Aufruf der Variable 'sound' mit dem Befehl: '.play()', um diese audiofiles auch wirklich abzuspielen

	function playSample(audioFile: string) {
		const sound = new Audio(audioFile) as HTMLAudioElement;
		sound.play();
	}
	//!SECTION

	//SECTION - 4. Funktion playBeat

	//NOTE - Was passier hier genau?
	// 1. Funktionsname: 'playBeat'
	// 2. keine Parameter: () <- wir beziehen uns auf nichts und wollen auch nichts hinzufügen
	// 3. Funktionsanweisungen: {}
	// Interval setzen mit der Zeit: 500 ms
	// anonyme Funktion soll bei Klicken des Playbuttons aufgerufen werden mit folgender Anweisung:
	//'playSample' Funktions aufruf mit den Parametern bzw. Variablen, auf die sich der Funktionsaufruf beziehen soll: ('beat' und 'zähler')
	// Zähler bekommt mit '++' Operator die Anweisung bei jedem Durchlauf immer einen hinzu zu zählen
	// Zähler wird mit 'if' an eine Bedingung / Condition geknüpft:
	// Sobald der Zähler bei Position 3 des Indexes vom Beat-Array ankommt, fängt dieser wieder bei 0 an

	function playBeat() {
		setInterval(function () {
			playSample(beat[zähler]);
			zähler++;
			if (zähler === 3) {
				zähler = 0;
			}
		}, 500);
	}
	//!SECTIO
}
