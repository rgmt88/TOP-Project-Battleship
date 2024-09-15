import fireSoundFile from './sounds/fire_shot.mp3';
import hitSoundFile from '/sounds/shot_hit.mp3';
import missSoundFile from '/sounds/shot_miss.mp3';

const fireSound = new Audio(fireSoundFile);
const hitSound = new Audio(hitSoundFile);
const missSound = new Audio(missSoundFile);

function playSound(sound) {
    // Reset the sound to start if played multiple times
    sound.currentTime = 0;
    sound.play();
}

export { fireSound, hitSound, missSound, playSound };