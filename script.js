const textEl=document.getElementById('text')

const text="I'm a computer engineer 💻";

let idx=1;
let speed=100;

writeText()

function writeText(){
    textEl.innerText=text.slice(0,idx)

    idx++

    setTimeout(writeText,speed)
}