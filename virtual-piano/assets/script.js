
const piano = document.querySelector('.piano');
let mouseDown = 0;

piano.addEventListener('mousedown', (event) => {

    if (event.target.classList.contains('piano-key')) {
        ++mouseDown;
        event.target.classList.add('active');
        const note = event.target.dataset.note;
        const src = `./assets/audio/${note}.mp3`;
        playAudio(src);
    }
});

document.body.onmouseup = function () {
    if (mouseDown == 1) { --mouseDown; }
}


const pianoКeys = document.querySelectorAll('.piano-key');

pianoКeys.forEach(element => {

    element.addEventListener('mouseover', function (event) {
        if (mouseDown == 1) {
            const note = event.target.dataset.note;
            const src = `./assets/audio/${note}.mp3`;
            playAudio(src);
            element.classList.add('active');
        }
    });

    element.addEventListener('mouseout', function (event) {

        element.classList.remove('active');

    });
    element.onmouseup = function () {
        element.classList.remove('active');
    }

});




window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        playAudio(`./assets/audio/d.mp3`);
    }
    playAudio(`./assets/audio/${String.fromCharCode(event.keyCode)}.mp3`);


});


const fullscreen = document.querySelector('.fullscreen');
const body1 = document.querySelector('body');


fullscreen.addEventListener('click', function (event) {
    if (document.fullscreenElement == null) {
        body1.requestFullscreen()

    } else {

        document.exitFullscreen()

    }
});

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}


const btn_letters = document.querySelector('.btn-letters');
const btn_notes = document.querySelector('.btn-notes');

btn_letters.addEventListener('click', function (event) {

    pianoКeys.forEach(element => {
        element.classList.add('piano-key1');
    });
    btn_letters.classList.add('btn-active');
    btn_notes.classList.remove('btn-active');
});

btn_notes.addEventListener('click', function (event) {

    pianoКeys.forEach(element => {
        element.classList.remove('piano-key1');
    });
    btn_notes.classList.add('btn-active');
    btn_letters.classList.remove('btn-active');
});