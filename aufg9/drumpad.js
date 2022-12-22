var aufg9;
(function (aufg9) {
    // Arrays
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
    // Beat Array
    let beat = [sounds[0], sounds[1], sounds[2]];
    // Zähler Index Deklaration
    let zähler = 0;
    window.addEventListener("load", addClickListener);
    function addClickListener() {
        document
            .querySelector("#hihat")
            .addEventListener("click", function () {
            playSample(sounds[0]);
        });
        document.querySelector("#kick").addEventListener("click", function () {
            playSample(sounds[1]);
        });
        document
            .querySelector("#snare")
            .addEventListener("click", function () {
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
        document
            .querySelector("#laugh-1")
            .addEventListener("click", function () {
            playSample(sounds[7]);
        });
        document
            .querySelector("#laugh-2")
            .addEventListener("click", function () {
            playSample(sounds[8]);
        });
        document.querySelector("#play").addEventListener("click", function () {
            playBeat();
        });
    }
    function playSample(audioFile) {
        const sound = new Audio(audioFile);
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
})(aufg9 || (aufg9 = {}));
//# sourceMappingURL=drumpad.js.map