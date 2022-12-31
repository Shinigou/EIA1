namespace DrumMachine9 {
	let sound: string[] = [
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

	let beat: string[] = [sound[0]];

	let randomBeat: string[] = [
		sound[1],
		sound[2],
		sound[3],
		sound[4],
		sound[5],
		sound[6],
	];

	let zähler: number = 0;

	let beatPlaying: boolean = false;


	window.addEventListener("load", addClickListener);

	function addClickListener() {
		document.querySelector(".pad-1").addEventListener("click", function () {
			playSample(sound[0]);
		});
		document.querySelector(".pad-2").addEventListener("click", function () {
			playSample(sound[1]);
		});
		document.querySelector(".pad-3").addEventListener("click", function () {
			playSample(sound[2]);
		});
		document.querySelector(".pad-4").addEventListener("click", function () {
			playSample(sound[3]);
		});
		document.querySelector(".pad-5").addEventListener("click", function () {
			playSample(sound[4]);
		});
		document.querySelector(".pad-6").addEventListener("click", function () {
			playSample(sound[5]);
		});
		document.querySelector(".pad-7").addEventListener("click", function () {
			playSample(sound[6]);
		});
		document.querySelector(".pad-8").addEventListener("click", function () {
			playSample(sound[7]);
		});
		document.querySelector(".pad-9").addEventListener("click", function () {
			playSample(sound[8]);
		});

		document.querySelector("#play").addEventListener("click", function () {
			if (beatPlaying == false) {
				playBeat();
			} else {
				stopBeat();
			}
		});

		document.querySelector("#mix").addEventListener("click", function () {
			
			RandomBeat()
			
		
 		});
	}

	function RandomBeat() {
		// AllGEMEIN: neuer, random Beat wird generiert

		// A. wenn Beat spielt?
		// 1. Beat stoppt
		// 1.1 icons ändern sich: stop -> play & mix -> stop
		// 1.2 random Beat spielt ab
		// 1.3 bei erneutem Click von random (also stop), stoppt RandomBeat und icon stop -> mix (?)

		// B. Wenn Beat nicht spielt?
		// 1. icon ändert sich: mix -> stop
		// 1.1 random Beat spielt ab
		// 1.2 bei erneutem Click von random (also stop), stoppt RandomBeat und icon stop -> mix (?)

		for (let i: number = 0; i > randomBeat.length; i++) {
			randomBeat[Math.floor(Math.random() * 6)]
		}

		if (beatPlaying == true) {
			stopBeat()
			beat.length = 0
			playRandomBeat()
		} else {
			document.querySelector("#mix").setAttribute("class", "fa-solid fa-pause")
			playRandomBeat()
		}	
		
	}



	// document.querySelector('#mix').setAttribute("class", "fas fa-microphone")

	function playRandomBeat() {
		beatPlaying = true;

		let myInterval: number = setInterval(() => {
			if (beatPlaying == false) {
				clearInterval(myInterval);
			}

			playSample(randomBeat[zähler]);
			zähler++;
			if (zähler === randomBeat.length) {
				zähler = 0;
			}
		}, 500);
	}

	function playSample(soundQuellle: string) {
		let sound: HTMLAudioElement = new Audio(soundQuellle);
		sound.play();
	}

	function stopBeat() {
		beatPlaying = false;
		document.querySelector("#play").setAttribute("class", "fa-solid fa-play");
		document.querySelector('#mix').setAttribute("class", "fas fa-microphone")
	}

	function playBeat() {
		beatPlaying = true; // Innerhalb dieser Funktion, also wenn play gedrückt wurde, ist der Wert der Variable verändert gesetzt!
		document.querySelector("#play").setAttribute("class", "fa-solid fa-stop");

		let Interval = setInterval(function () {
			if (beatPlaying == false) {
				// Sobald der Wert auf false ist, führe die Funktion clearInterval aus
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
}
