let accrdion = new Audio("./MP3_Sounds/Accordion.mp3");
let drm = new Audio("./MP3_Sounds/Drum.mp3");
let flte = new Audio("./MP3_Sounds/Flute.mp3");
let guitr = new Audio("./MP3_Sounds/Guitar.mp3");
let lte = new Audio("./MP3_Sounds/Lute.mp3");
let lyr = new Audio("./MP3_Sounds/Lyre.mp3");
let mandlin = new Audio("./MP3_Sounds/Mandolin.mp3");
let ocrina = new Audio("./MP3_Sounds/Ocarina.mp3");
let pian = new Audio("./MP3_Sounds/Piano.mp3");
let saxphone = new Audio("./MP3_Sounds/Saxophone.mp3");
let trmpet = new Audio("./MP3_Sounds/Trumpet.mp3");
let violn = new Audio("./MP3_Sounds/Violin.mp3");

let soundActive = false;

guitar.onclick = () => {
    if (soundActive === false) {
        guitr.play();
        guitr.loop = true;
        guitar.textContent = "Stop";
        soundActive = true;
    }
    else {
        guitr.pause();
        guitar.textContent = "Play";
        soundActive = false;
    }
}

drum.onclick = () => {
    if (soundActive === false) {
        drm.play();
        drm.loop = true;
        drum.textContent = "Stop";
        soundActive = true;
    }
    else {
        drm.pause();
        drum.textContent = "Play";
        soundActive = false;
    }
}

accordion.onclick = () => {
    if (soundActive === false) {
        accrdion.play();
        accrdion.loop = true;
        accordion.textContent = "Stop";
        soundActive = true;
    }
    else {
        accrdion.pause();
        accordion.textContent = "Play";
        soundActive = false;
    }
}

saxophone.onclick = () => {
    if (soundActive === false) {
        saxphone.play();
        saxphone.loop = true;
        saxophone.textContent = "Stop";
        soundActive = true;
    }
    else {
        saxphone.pause();
        saxophone.textContent = "Play";
        soundActive = false;
    }
}

flute.onclick = () => {
    if (soundActive === false) {
        flte.play();
        flte.loop = true;
        flute.textContent = "Stop";
        soundActive = true;
    }
    else {
        flte.pause();
        flute.textContent = "Play";
        soundActive = false;
    }
}

piano.onclick = () => {
    if (soundActive === false) {
        pian.play();
        pian.loop = true;
        piano.textContent = "Stop";
        soundActive = true;
    }
    else {
        pian.pause();
        piano.textContent = "Play";
        soundActive = false;
    }
}

trumpet.onclick = () => {
    if (soundActive === false) {
        trmpet.play();
        trmpet.loop = true;
        trumpet.textContent = "Stop";
        soundActive = true;
    }
    else {
        trmpet.pause();
        trumpet.textContent = "Play";
        soundActive = false;
    }
}

violin.onclick = () => {
    if (soundActive === false) {
        violn.play();
        violn.loop = true;
        violin.textContent = "Stop";
        soundActive = true;
    }
    else {
        violn.pause();
        violin.textContent = "Play";
        soundActive = false;
    }
}

mandolin.onclick = () => {
    if (soundActive === false) {
        mandlin.play();
        mandlin.loop = true;
        mandolin.textContent = "Stop";
        soundActive = true;
    }
    else {
        mandlin.pause();
        mandolin.textContent = "Play";
        soundActive = false;
    }
}

lute.onclick = () => {
    if (soundActive === false) {
        lte.play();
        lte.loop = true;
        lute.textContent = "Stop";
        soundActive = true;
    }
    else {
        lte.pause();
        lute.textContent = "Play";
        soundActive = false;
    }
}

ocarina.onclick = () => {
    if (soundActive === false) {
        ocrina.play();
        ocrina.loop = true;
        ocarina.textContent = "Stop";
        soundActive = true;
    }
    else {
        ocrina.pause();
        ocarina.textContent = "Play";
        soundActive = false;
    }
}

lyre.onclick = () => {
    if (soundActive === false) {
        lyr.play();
        lyr.loop = true;
        lyre.textContent = "Stop";
        soundActive = true;
    }
    else {
        lyr.pause();
        lyre.textContent = "Play";
        soundActive = false;
    }
}






