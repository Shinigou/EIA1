var aufg9;
(function (aufg9) {
    // Mp3 Collection
    let sounds = [
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
    let beat = [sounds[6], sounds[5], sounds[4], sounds[3], sounds[2], sounds[1], sounds[0]];
    let randomBeat = [sounds[0], sounds[1], sounds[2], sounds[3], sounds[4], sounds[5], sounds[6]];
    // Zähler Index beginnend bei 0
    let zähler = 0;
    window.addEventListener("load", addClickListener);
    // alle ClickListener hinzufügen
    function addClickListener() {
        document.querySelector("#hihat").addEventListener("click", function () {
            playSample(sounds[0]);
        });
        document.querySelector("#kick").addEventListener("click", function () {
            playSample(sounds[1]);
        });
        document.querySelector("#snare").addEventListener("click", function () {
            playSample(sounds[2]);
        });
        document.querySelector("#F").addEventListener("click", function () {
            playSample(sounds[3]);
        });
        document.querySelector("#G").addEventListener("click", function () {
            playSample(sounds[4]);
        });
        document.querySelector("#A").addEventListener("click", function () {
            playSample(sounds[5]);
        });
        document.querySelector("#C").addEventListener("click", function () {
            playSample(sounds[6]);
        });
        document.querySelector("#laugh-1").addEventListener("click", function () {
            playSample(sounds[7]);
        });
        document.querySelector("#laugh-2").addEventListener("click", function () {
            playSample(sounds[8]);
        });
        document.querySelector("#play").addEventListener("click", function () {
            if (beatPlaying == false) {
                playBeat();
            }
            else {
                stopBeat();
            }
        });
        document.querySelector("#random").addEventListener("click", function () {
            playRandomBeat();
        });
    }
    //-----------------------------Funktionen--------------------------------------//
    function playSample(audioFile) {
        const sound = new Audio(audioFile);
        sound.play();
    }
    let beatPlaying = false;
    function playBeat() {
        beatPlaying = true;
        let Interval = setInterval(function () {
            if (beatPlaying == false) {
                clearInterval(Interval);
            } // <-  1. If-Condition hat nur den Sinn: Den Interval (den loop des beats) zu beenden
            playSample(beat[zähler]);
            zähler++;
            if (zähler === beat.length) {
                zähler = 0;
            }
        }, 500);
        document.querySelector("#play").setAttribute("class", "fa-solid fa-stop");
    }
    function stopBeat() {
        beatPlaying = false;
        document.querySelector("#play").setAttribute("class", "fa-solid fa-play");
    }
    // 1.
    function playRandomBeat() {
        deleteBeat();
        for (let i = 0; i <= randomBeat.length; i++) {
            beat.push(randomBeat[Math.floor(Math.random() * 7)]);
        }
    }
    // 2.
    function deleteBeat() {
        stopBeat2();
        beat = [];
    }
    function stopBeat2() {
        beatPlaying = false;
    }
    // 1. playRandomBeat wird aufgerufen
    // 2. playRandomBeat -> ruft deleteBeat (deleteBeat -> ruft stopBeat auf => stoppt den Beat) und geht in for Schleife mit neu erzeugtem random Beat
})(aufg9 || (aufg9 = {}));
//# sourceMappingURL=drumpad.js.map