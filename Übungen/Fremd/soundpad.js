var DrumMachine;
(function (DrumMachine) {
    let Sound = [
        "./assets/DrumPad/hihat.mp3",
        "./assets/DrumPad/kick.mp3",
        "./assets/DrumPad/snare.mp3",
        "./assets/DrumPad/A.mp3",
        "./assets/DrumPad/C.mp3",
        "./assets/DrumPad/F.mp3",
        "./assets/DrumPad/G.mp3",
        "./assets/DrumPad/laugh-1.mp3",
        "./assets/DrumPad/laugh-2.mp3",
    ];
    let beat = [Sound[4], Sound[5], Sound[8]];
    let zaehler = 0;
    //Funktionen
    window.addEventListener("load", addClickListenerDrumpad);
    // ---- Funktion mit Zaeler und if Condition ---
    function addClickListenerDrumpad() {
        document.querySelector(".pad-1").addEventListener("click", function () {
            playSample(Sound[0]);
        });
        document.querySelector(".pad-2").addEventListener("click", function () {
            playSample(Sound[1]);
        });
        document.querySelector(".pad-3").addEventListener("click", function () {
            playSample(Sound[2]);
        });
        document.querySelector(".pad-4").addEventListener("click", function () {
            playSample(Sound[3]);
        });
        document.querySelector(".pad-5").addEventListener("click", function () {
            playSample(Sound[4]);
        });
        document.querySelector(".pad-6").addEventListener("click", function () {
            playSample(Sound[5]);
        });
        document.querySelector(".pad-7").addEventListener("click", function () {
            playSample(Sound[6]);
        });
        document.querySelector(".pad-8").addEventListener("click", function () {
            playSample(Sound[7]);
        });
        document.querySelector(".pad-9").addEventListener("click", function () {
            playSample(Sound[8]);
        });
        document.querySelector(".Play").addEventListener("click", function () {
            playBeat();
        });
    }
    function playSample(soundQuellle) {
        let sound = new Audio(soundQuellle);
        sound.play();
    }
    function playBeat() {
        setInterval(function () {
            playSample(beat[zaehler]);
            zaehler++;
            if (zaehler === 3) {
                zaehler = 0;
            }
        }, 750);
    }
})(DrumMachine || (DrumMachine = {}));
// let pad_1: HTMLAudioElement = new Audio("./assets/DrumPad/hihat.mp3");
// let pad_2: HTMLAudioElement = new Audio("./assets/DrumPad/kick.mp3");
// let pad_3: HTMLAudioElement = new Audio("./assets/DrumPad/snare.mp3");
// let pad_4: HTMLAudioElement = new Audio("./assets/DrumPad/A.mp3");
// let pad_5: HTMLAudioElement = new Audio("./assets/DrumPad/C.mp3");
// let pad_6: HTMLAudioElement = new Audio("./assets/DrumPad/F.mp3");
// let pad_7: HTMLAudioElement = new Audio("./assets/DrumPad/G.mp3");
// let pad_8: HTMLAudioElement = new Audio("./assets/DrumPad/laugh-1.mp3");
// let pad_9: HTMLAudioElement = new Audio("./assets/DrumPad/laugh-2.mp3");
// keyboard
const sound = [
    {
        key: "A",
        sounds: "./assets/DrumPad/A.mp3",
    },
    {
        key: "C",
        sounds: "./assets/DrumPad/C.mp3",
    },
    {
        key: "F",
        sounds: "./assets/DrumPad/F.mp3",
    },
    {
        key: "G",
        sounds: "./assets/DrumPad/G.mp3",
    },
    {
        key: "H",
        sounds: "./assets/DrumPad/hithat.mp3",
    },
    {
        key: "K",
        sounds: "./assets/DrumPad/kick.mp3",
    },
    {
        key: "L",
        sounds: "./assets/DrumPad/laugh-1.mp3",
    },
    {
        key: "U",
        sounds: "./assets/DrumPad/laugh-2.mp3",
    },
    {
        key: "S",
        sounds: "./assets/DrumPad/snare.mp3",
    },
];
const keys = ["A", "C", "G", "F", "H", "K", "L", "U", "S"];
const sounds = [
    "./assets/DrumPad/A.mp3",
    "./assets/DrumPad/C.mp3",
    "./assets/DrumPad/F.mp3",
    "./assets/DrumPad/G.mp3",
    "./assets/DrumPad/hithat.mp3",
    "./assets/DrumPad/kick.mp3",
    "./assets/DrumPad.lauthe-1.mp3",
    "./assets/Drumpad/laughe-2.mp3",
    "./assets/DrumPad/snare.mp3",
];
//document.addEventListener('keydown', (e) =>{
//const id = e.key.toUpperCase();
//const Audio= document.getElementById('id')
//if(Audio)
//Audio.play();
//})
//# sourceMappingURL=soundpad.js.map