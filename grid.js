let num = 60;
let count = 0;
const snake_body = document.querySelector(".snake_body");
snake_body.innerText = '🤠'
snake_body.style.fontSize = `${num}px`

const donut = document.querySelector('.donut')
donut.style.fontSize = '60px'

setInterval(() => generateDonut(), 1000);

let x = 1;
let y = 1;
let dx = 1;
let dy = 1;

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowLeft") {
      if (x > 1) {
        x = x - dx;
      snake_body.style.gridColumnStart = x;
      }
  }
  if (e.key === "ArrowRight") {
    if (x < 10) {
      x = x + dx;
      snake_body.style.gridColumnStart = x;
    }
}
  if (e.key === "ArrowDown") {
    if (y < 10) {
      y = y + dy;
      snake_body.style.gridRowStart = y;
    }
}
  if (e.key === "ArrowUp") {
    if (y > 1) {
      y = y - dy;
      snake_body.style.gridRowStart = y;
    }
  }
    if (donut.style.gridColumnStart === snake_body.style.gridColumnStart && donut.style.gridRowStart === snake_body.style.gridRowStart) {
      let randomX = Math.floor(Math.random() * 10) + 1;
      let randomY = Math.floor(Math.random() * 10) + 1;
      donut.style.gridColumnStart = randomX;
      donut.style.gridRowStart = randomY;
      num += 20;
      count++
      console.log(snake_body.style.fontSize)
      snake_body.style.fontSize = `${num}px`
      if(count>10 && count <= 11){
        snake_body.innerText = '💀'
        alert('Nice job fatass, you died of diabetes')
      }
if(count > 11){
alert('Still hungry fat ass, you cant get diabetes twice. keep at it... those bones need some meat!')
}

}

});


console.log(donut.style.gridColumnStart, donut.style.gridRowStart)


function generateDonut(){
  let randomX = Math.floor(Math.random() * 10) + 1;
      let randomY = Math.floor(Math.random() * 10) + 1;
      donut.style.gridColumnStart = randomX;
      donut.style.gridRowStart = randomY;
}
