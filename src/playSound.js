const fireSound = new Audio('/src/sounds/fire_shot.mp3');
const hitSound = new Audio('/src/sounds/shot_hit.mp3');
const missSound = new Audio('/src/sounds/shot_miss.mp3')

function playSound(sound) {
    // Reset the sound to start if played multiple times
    sound.currentTime = 0;
    sound.play();
}

export { fireSound, hitSound, missSound, playSound };