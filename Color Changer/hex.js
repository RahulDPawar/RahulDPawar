const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];
const colors = document.querySelector('.color');
function Btn(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor+=hex[0];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}
