// import Scrollbar from 'smooth-scrollbar';
// import { gsap }  from 'gsap/all';


const Title1 = document.getElementById('title1');
const Title2 = document.getElementById('title2');
const Title3 = document.getElementById('title3');
const Subtitle = document.getElementById('subtitle');
const circleSvg = document.querySelector('.cursor-follow');

const titleLetters1 = Title1.innerHTML = Title1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
const titleLetters2 = Title2.innerHTML = Title2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
const titleLetters3 = Title3.innerHTML = Title3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// let tl = gsap.timeline();
let mouseX = 0
let mouseY = 0

// const options = {
    // 'alwaysShowTracks': true
// }

// Scrollbar.init(document.querySelector('.container'), options);


// tl.to('#title1 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '0.1'})
// tl.to('#title2 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '0.2'})
// tl.to('#title3 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '0.3'})


window.addEventListener('mousemove', (event) => {


    mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
    mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
})

const mouseMove = () => {

    circleSvg.style.top = mouseY
    circleSvg.style.left = mouseX

    window.requestAnimationFrame(mouseMove)
}

mouseMove()


