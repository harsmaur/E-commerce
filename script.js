// hamburger menu js
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar){  // if used to check if active already or not
    bar.addEventListener('click',()=>{
       nav.classList.add("active");
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove("active")
    })
}

// sproduct js
const main_img = document.getElementById("main-image");
const sm_img = document.getElementsByClassName("small-image")

sm_img[0].onclick = ()=>{
    main_img.src = sm_img[0].src;
}
sm_img[1].onclick = ()=>{
    main_img.src = sm_img[1].src;
}
sm_img[2].onclick = ()=>{
    main_img.src = sm_img[2].src;
}
sm_img[3].onclick = ()=>{
    main_img.src = sm_img[3].src;
}