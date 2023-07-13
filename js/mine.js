// const header = document.getElementById(".nav-bar2");
// window.onscroll = function () {
//   var top = window.scrollY;
//   if (top >= 150) {
//     header.classList.add(".navbarDark");
//   } else {
//     header.classList.remove(".navbarDark");
//   }
// };

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document .body .removeChild("loader");
    })
})


//  const headerEl=document.querySelector('.nav-bar2');
//      window.addEventListener('scroll',function(){
//             if(window.scrollY > 670){
//          headerEl.classList.add('nav2');
//             }
//             else  if(window.scrollY < 660){
//                 headerEl.classList.remove('nav2');
//             }
//         })
