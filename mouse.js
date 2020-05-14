const list_btns = document.querySelectorAll(".about-list h3");
const nav = document.querySelector("nav");
const title = document.querySelector(".title");
const images = document.querySelectorAll('.image');
const close = document.querySelector(".modal-inner");
const img = document.querySelector("img")
const modal = document.querySelector(".modal")

function closed(){
    modal.classList.remove('appear');
}

function expand(e){
    const src = e.currentTarget.querySelector('img').src;
    img.src=src;
    modal.classList.add('appear');
}

function enter(){
    this.parentNode.classList.add("open"); 
  
}

function leave(){
    this.parentNode.classList.remove("open");
}

function fixedMenu(){
    if(window.scrollY>=title.offsetHeight){
        nav.classList.add('fix');
        nav.style.top=0
    }else{
        nav.classList.remove('fix')
        nav.removeAttribute('style')
    }    
}

close.addEventListener("click", closed)
images.forEach((image)=>{image.addEventListener("click",expand)})

list_btns.forEach((btn)=>{btn.addEventListener("mouseenter",enter)});
list_btns.forEach((btn)=>{btn.addEventListener("mouseleave",leave)});


window.addEventListener("scroll",fixedMenu)
