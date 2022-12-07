// Arrays
namespace Drumpad {

  // Arrays

	let sounds: string[] = [

		'mp3/hihat.mp3',
		'mp3/kick.mp3',
		'mp3/snare.mp3',
		'mp3/F.mp3',
		'mp3/G.mp3',
		'mp3/A.mp3',
		'mp3/C.mp3',
		'mp3/laugh-1.mp3',
		'mp3/laugh-2.mp3',
	];
	
	let beat: string[] = [sounds[0], sounds[1], sounds[2]];
	
	let zähler: number = 0;
	
	
	
	// Funktionen 
	
	window.addEventListener('load', addClickListener);
	
	
	function addClickListener() {
		document.querySelector('#hihat').addEventListener('click', function (event) {
			playSample(sounds[0]);
		});
		document.querySelector('#kick').addEventListener('click', function (event) {
			playSample(sounds[1]);
		});
		document.querySelector('#snare').addEventListener('click', function (event) {
			playSample(sounds[2]);
		});
		document.querySelector('#F').addEventListener('click', function (event) {
			playSample(sounds[3]);
		});
		document.querySelector('#G').addEventListener('click', function (event) {
			playSample(sounds[4]);
		});
		document.querySelector('#A').addEventListener('click', function (event) {
			playSample(sounds[5]);
		});
		document.querySelector('#C').addEventListener('click', function (event) {
			playSample(sounds[6]);
		});
		document.querySelector('#laugh-1').addEventListener('click', function (event) {
			playSample(sounds[7]);
		});
		document.querySelector('#laugh-2').addEventListener('click', function (event) {
			playSample(sounds[8]);
		});
		document.querySelector('#play').addEventListener('click', function (event) {
			playBeat();
			console.log('test')
		});
	}
	
	function playSample(audioFile: string) {
		const sound = new Audio(audioFile) as HTMLAudioElement;
		sound.play();
	}
	
	function playBeat() {
		setInterval(function () {
			playSample(beat[zähler]);
			zähler++;
			if (zähler === 3) {
				zähler = 0;
			}
		}, 500);
	}

}
