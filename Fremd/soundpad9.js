var DrumMachine9;
(function (DrumMachine9) {
    let sound = [
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
    let beat = [sound[4], sound[5], sound[8]];
    let zähler = 0;
    window.addEventListener("load", addClickListener);
    function playSample(soundQuellle) {
        let sound = new Audio(soundQuellle);
        sound.play();
    }
    //----------------------------------------------Interval 
    let beatPlaying = false;
    function playBeat() {
        beatPlaying = true;
        let myInterval = setInterval(() => {
            if (beatPlaying == false) {
                clearInterval(myInterval);
            }
            ;
            playSample(beat[zähler]);
            zähler++;
            if (zähler === 3) {
                zähler = 0;
            }
        }, 500);
        document.querySelector('#play').setAttribute('class', 'fa-regular fa-circle-stop"');
    }
    function stopBeat() {
        beatPlaying = false;
        document.querySelector('#play').setAttribute('class', 'fa-solid fa-play');
    }
    // ----------------- generate random beat on micro ⬇
    // document.querySelector("#mix").addEventListener("click", function () {
    // 	beat;
    // 	while (sound[4].length < 3) {
    // 		// i need help, i think i understood this but not completely ಥ_ಥ
    // 		var r = Math.floor(Math.random() * 10);
    // 		beat.push(sound[r]);
    // 	}
    // });
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
            }
            else {
                stopBeat();
            }
        });
    }
})(DrumMachine9 || (DrumMachine9 = {}));
//# sourceMappingURL=soundpad9.js.map