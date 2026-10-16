let seconds=0;
let interval=null;
const display=document.getElementById("display");
function updateDisplay(){
    const hours=Math.floor(seconds/3600);
    const minutes=Math.floor((seconds%3600)/60);
    const remainingSeconds=seconds%60;
    const format = (value)=>String(value).padStart(2, "0");
    display.textContent=`${format(hours)}:${format(minutes)}:${format(remainingSeconds)}`;
}
function startTimer(){
    if(interval !== null) return;
    interval=setInterval(()=>{
        seconds++;
        updateDisplay();
        },1000);
}
const startButton=document.getElementById("start");
startButton.addEventListener("click",startTimer);
const pauseButton=document.getElementById("pause");
pauseButton.addEventListener("click",()=>{clearInterval(interval);
    interval=null;
});
const resetButton=document.getElementById("reset");
resetButton.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
    seconds=0;
    lapCount=0;
    updateDisplay();
    lapList.innerHTML="";
});
const lapButton=document.getElementById("lap");
const lapList=document.getElementById("laps");
let lapCount=0;
lapButton.addEventListener("click",()=>{
    lapCount++;
    const li=document.createElement("li");
    li.textContent=`Lap ${lapCount}: ${display.textContent}`;
    lapList.appendChild(li);
});
