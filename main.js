//start header
let nav=document.querySelector(".nav")
let menu=document.querySelector(".menu")
let openMenu=document.querySelector(".open")
let closeMenu=document.querySelector(".close")

openMenu.addEventListener("click",()=>{
  openMenu.style.cssText=("display:none");
  closeMenu.style.cssText=("display:flex");
  nav.style.cssText=("display:flex");
})
closeMenu.addEventListener("click",()=>{
  openMenu.style.cssText=("display:flex");
  closeMenu.style.cssText=("display:none");
  nav.style.cssText=("display:none");
})
// end header
//start slider

let slider=Array.from(document.querySelectorAll(".slider img"))
// for(let i=0;i<10000;i+=1000){
//   setInterval(() => {
//   let date=new Date();
//   console.log(date.getSeconds())
  

//   {setInterval(() => {
//     slider[0].style.cssText=("opacity:1")
//     console.log("slider0")
//   }, 1000);
//   setInterval(() => {
//     slider[1].style.cssText=("opacity:1")
//     console.log("slider1")
//   }, 3000);
//   setInterval(() => {
//     slider[2].style.cssText=("opacity:1")
//     console.log("slider2")
//   }, 8000);}
//   console.log("helo")
// }, 1000);
// }

//end slider