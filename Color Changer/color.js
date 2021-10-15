const colors =["green","pink","blue","red"];
const color = document.querySelector('.color');
function Btn(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor =colors[randomNumber];
    color.textContent = colors[randomNumber];
}
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
