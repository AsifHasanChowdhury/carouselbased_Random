window.onscroll = function() {myFunction()};

var navbar = document.querySelector('header');
var hidebar=document.querySelector('div');
var sticky = navbar.offsetTop;
console.log(navbar);

function myFunction() {
    
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");
  }
}



// function openNav() {
//   document.getElementById("Slidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("Slidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }


const nav=document.querySelector(".slide-list");
const burger=document.querySelector(".burger");
const links=nav.querySelectorAll("a");

burger.addEventListener("click",()=>{
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
  nav.style.display='inline';
})


function mFunction(x) {
  if (x.matches) { // If media query matches
    nav.style.display='inline';
   } else {
    nav.style.display='none';
   }
 }

 var x = window.matchMedia("(max-width:821px)")
 myFunction(x) // Call listener function at run time
 x.addListener(mFunction)


$('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      autoplay:true,
      autoplayTimeout:8000,
      autoHeight:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
      })


