namespace aufg9 {
	// Mp3 Collection

	let sound: string [] = [
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


	// Beat
	let beat: string [] = [sound[6], sound[5], sound[4], sound[3], sound[2], sound[1], sound[0]];
	
	let randomBeat: string [] = [sound[0], sound[1], sound[2], sound[3], sound[4], sound[5], sound[6]];

	// Zähler Index beginnend bei 0
	let zähler: number = 0;

	window.addEventListener("load", addClickListener);

	// alle ClickListener hinzufügen

	function addClickListener() {
		document.querySelector("#hihat").addEventListener("click", function () {
			playSample(sound[0]);
		});
		document.querySelector("#kick").addEventListener("click", function () {
			playSample(sound[1]);
		});
		document.querySelector("#snare").addEventListener("click", function () {
			playSample(sound[2]);
		});
		document.querySelector("#F").addEventListener("click", function () {
			playSample(sound[3]);
		});
		document.querySelector("#G").addEventListener("click", function () {
			playSample(sound[4]);
		});
		document.querySelector("#A").addEventListener("click", function () {
			playSample(sound[5]);
		});
		document.querySelector("#C").addEventListener("click", function () {
			playSample(sound[6]);
		});
		document.querySelector("#laugh-1").addEventListener("click", function () {
			playSample(sound[7]);
		});
		document.querySelector("#laugh-2").addEventListener("click", function () {
			playSample(sound[8]);
		});

		document.querySelector("#play").addEventListener("click", function () {

			// ⬇ bei click auf den playButton wird zunächst eine Bedingung abgefragt, bevor etwas ausgeführt wird:

			// wenn die Bedingung erfüllt ist, also (beatPlaying == flase), dann rufe die funktion playBeat auf 
			// (ist erfüllt, wenn Play NICHT gedrückt wurde!)
			// wenn die Bedingung nicht erfüllt ist, also (beatPlaying == true), dann rufe die funtkion stopBeat auf 
			// (ist erfüllt, wenn Play gedrückt wurde!)	
			if (beatPlaying == false) {
				playBeat();
			} else {
				stopBeat();
			}
		});

		document.querySelector("#random").addEventListener("click", function () {

			
			if (beatPlaying == false) {
				playRandomBeat();
			}
			else {
				stopBeat2()
			}
		});
		
	
	}

	//-----------------------------Funktionen--------------------------------------//

	// ⬇ Funktion playSample sorgt dafür, dass 1. die mp3-files als Audiodateien von typescript interpretiert bzw. erkannt werden
	// und 2. diese auch abgespielt werden
	function playSample(audioFile: string) {
		const sound = new Audio(audioFile) as HTMLAudioElement;
		sound.play();
	}

	// ⬇ diese Variable bedeutet: standardmäßig (wenn die Seite geladen wird) ist der Wert false aktiv und zu diesem Zeitpunkt, ist noch keine Funktion playBeat ausgeführt worden!
	let beatPlaying = false;

	// ⬇ Funktion playBeat: was passiert, wenn PlayButton betätigt wird?
	function playBeat() {
		beatPlaying = true; // Innerhalb dieser Funktion, also wenn play gedrückt wurde, ist der Wert der Variable verändert gesetzt!
		document.querySelector("#play").setAttribute("class", "fa-solid fa-stop");

		let Interval = setInterval(function () {
			if (beatPlaying == false) // Sobald der Wert auf false ist, führe die Funktion clearInterval aus
			 {
				clearInterval(Interval);
			} // ⬆ 1. If-Condition hat nur den Sinn, den Interval (den loop des beats) zu beenden -> sobald auf stop gedrückt wurde, wichtig

			// ⬇ Erst durch den folgenden Funktionsaufruf inkl. Inhalt: 'playSample(beat[zähler])' wird die Variable beat abgespielt!
			playSample(beat[zähler]);
			zähler++;
			if (zähler === beat.length) {
				zähler = 0;
			}
		}, 500);
	}

	// ⬇ Funktion stopBeat: was passiert, wenn StopButton betätigt wird?
	function stopBeat() {
		beatPlaying = false; 
		// die Wertveränderung sorgt dafür, dass der beat nicht mehr abgespielt wird 
		// (es ist wieder der standarmäßige Zustand aktiv)

		document.querySelector("#play").setAttribute("class", "fa-solid fa-play");
	}



	// ----------------ab hier alles zum random button --------------------------//

	function playBeat2() {
		beatPlaying = true; // Innerhalb dieser Funktion, also wenn play gedrückt wurde, ist der Wert der Variable verändert gesetzt!
		document.querySelector('#random').setAttribute('class','fa-solid fa-stop')

		let Interval = setInterval(function () {
			if (beatPlaying == false) // Sobald der Wert auf false ist, führe die Funktion clearInterval aus
			 {
				clearInterval(Interval);
			} // ⬆ 1. If-Condition hat nur den Sinn, den Interval (den loop des beats) zu beenden -> sobald auf stop gedrückt wurde, wichtig

			// ⬇ Erst durch den folgenden Funktionsaufruf inkl. Inhalt: 'playSample(beat[zähler])' wird die Variable beat abgespielt!
			playSample(randomBeat[zähler]);
			zähler++;
			if (zähler === randomBeat.length) {
				zähler = 0;
			}
		}, 500);
	}
	
	function stopBeat2() {
		beatPlaying = false;
		document.querySelector("#random").setAttribute("class", "fa-solid fa-shuffle");
		document.querySelector('#play').setAttribute('class', 'fa-solid fa-play')
		}

	// 1.
	function playRandomBeat() {
		stopBeat2();
		beat = []; // Ursprungsbeat leeren 
	
		// ⬇ for Schleife, um den random Beat endlos abzuspielen 
		// random Beat wird generiert und ans Ende des Ursprungs-beat angehängt
		for (let i:number = 0; i > randomBeat.length; i++) {
			beat.push(randomBeat[Math.floor(Math.random() * 7)]);
		}

		// ⬇ Funktionsaufruf zum Abspielen des neu generierten Beats
		playBeat2();
		
	}



		



	// 1. playRandomBeat wird aufgerufen
	// 2. playRandomBeat -> ruft deleteBeat (deleteBeat -> ruft stopBeat auf => stoppt den Beat) und geht in for Schleife mit neu erzeugtem random Beat
	

}
