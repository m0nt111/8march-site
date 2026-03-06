let pages=document.querySelectorAll(".page");
let current=0;

function nextPage(){

pages[current].classList.remove("active");

current++;

if(current<pages.length){
pages[current].classList.add("active");
}

}

function createText(){

let text=document.createElement("div");

text.innerText="С 8 марта 🌸";

text.className="fall-text";

text.style.left=Math.random()*100+"vw";

text.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(text);

setTimeout(()=>{

text.remove();

},6000);

}

setInterval(createText,300);
