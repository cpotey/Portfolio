// var imageArray = [
//   "",
//   "",
// ];

// var size = imageArray.length;
// var x = Math.floor(size*Math.random());

// console.log(imageArray[x]);

// document.querySelector('.header-container').style.backgroundImage = "url(" + imageArray[x] + ")";

//   LazyLoad bg_images
// document.addEventListener("DOMContentLoaded", function() {
//     var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  
//     if ("IntersectionObserver" in window) {
//       let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             lazyBackgroundObserver.unobserve(entry.target);
//           }
//         });
//       });
  
//       lazyBackgrounds.forEach(function(lazyBackground) {
//         lazyBackgroundObserver.observe(lazyBackground);
//       });
//     }
//   });