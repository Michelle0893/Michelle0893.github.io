const keys = document.querySelectorAll('.key');
const whitekeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

console.log(keys.length);


function playNote(key)  {
    let noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
}

let myName = "Michelle";
const nameSpan = document.getElementById('name');
console.log(nameSpan);
nameSpan.textContent = myName;

let myAge = 29;
const ageSpan = document.getElementById('age');
ageSpan.textContent = myAge;

let likesMusic = true; 
let likesMusicText;

if(likesMusic === true) {
    likesMusicText= 'me fascina aprender nuevas cosas';

    // Codigo si le gusta la musica
} else {
    likesMusicText = 'no me late dejar de aprender'
    // Codigo si no le gusta la musica
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j',];


const likesMusicSpan = document.getElementById('likesMusic');
likesMusicSpan.textContent = likesMusicText;

document.addEventListener('keydown', (e) => {
    //alert ('key Pressed');
    if (e.repeat) return;


    const key= e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) {
        playNote(whitekeys[whiteKeyIndex]);
    }

    if(blackKeyIndex > -1){
        playNote(blackKeys[blackKeyIndex]);
    }
        
});


    //Nos manda la tecla
    //Decidimos qué sonido le toca a la tecla
    //Tocamos la nota
