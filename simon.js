let gameSeq=[];
let userSeq=[];
let btns=["purple","red","blue","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");  
document.addEventListener("keydown",function(event){
   if(started==false){
    console.log("game is started",event.key);
    started=true;
    levelUp();
   };
});
//for blinking of button
function btnFlash(btn){
    btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},200);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}


//for moving to next level
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level${level} `;
//chose random button
let randindex=Math.floor(Math.random()*btns.length);
let randColor=btns[randindex];
let randbtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randbtn);
}
function checkAns(index){
 
  if(userSeq[index]==gameSeq[index]){
if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,250);

}
  }
  else{
      h2.innerHTML=`Game over! your score was<b>${level}</b><br>Press  any key to start`; 
  document.querySelector("body").style.color="red";
  setTimeout(function(){
    document.querySelector("body").style.color="white";
  },150)
  
      reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    useColor=btn.getAttribute("id");
    userSeq.push(useColor);
    console.log(useColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns ){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}
