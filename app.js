function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}

function playSound(e){
    const key2=document.querySelector(`div[data-key="${e.target.childNodes[0].nodeValue}"]`);
    // const back=document.querySelector(`div[data-key="${key2.nextElementSibling.textContent}"]`);
    

    const audio = document.querySelector(`audio[data-key="${1}"]`);
    if(!audio)return ;//stop the function running;
    audio.currentTime=0;//rewind the sound from start
    key2.classList.add('playing');
    audio.play();
    audio.playbackRate=10

    console.log(e.target)

}
const keys=document.querySelectorAll('.key')
console.log(keys)
keys.forEach(key=>key.addEventListener('transitionend',removeTransition))

keys.forEach(key=>key.addEventListener('click',playSound))






























// const card=document.querySelector('.card')
// // const back=document.querySelector('.back')
// const front=document.querySelectorAll('.front')
// console.log(front)
// function frontFunct(e){
//     const key1=document.querySelector(`div[data-key="${e.target.childNodes[0].nodeValue}"]`);
//     const key2=document.querySelector(`div[data-key="${e.target.nextElementSibling.childNodes[0].nodeValue}"]`);
//     console.log(key1)
//     // console.log(key2)
//     // // front.style.display="none";
//     // back.style.display="block"
//     // back.classList.add('playing');
    
//     }

// front.forEach(fr=>fr.addEventListener('click',frontFunct))

// back.addEventListener('click',()=>{
//     front.style.display="inline-block";
//     back.style.display="none";
//     front.classList.remove('playing');

    
//     })