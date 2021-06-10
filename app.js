function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}

function playSound(e){
    const key2=document.querySelector(`div[data-key="${e.target.childNodes[0].nodeValue}"]`);
    const audio = document.querySelector(`audio[data-key="${1}"]`);
    if(!audio)return ;//stop the function running;
    audio.currentTime=0;//rewind the sound from start
    key2.classList.add('playing');
    audio.playbackRate=10
    audio.play();
    audio.playbackRate=10

    // key2.innerHTML="hi"

   console.log(key2)

   console.log(e.target.childNodes[0].nodeValue.toString())
}
const keys=document.querySelectorAll('.key')
keys.forEach(key=>key.addEventListener('transitionend',removeTransition))

keys.forEach(key=>key.addEventListener('click',playSound))
