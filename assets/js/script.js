const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load" , function (){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});
//HEADER STICKY
window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
//Scroll Reveal
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
//Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");

hamburger.addEventListener("click" , () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})