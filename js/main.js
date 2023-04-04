(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/

const banner = document.querySelector('#banner-t');
const bannerText = banner.querySelector('#banner-t p');
const bannerWidth = banner.offsetWidth;
let offset = 0;

function loopBanner() {
  offset -= 1;
  if (offset < -bannerWidth) {
    offset = 0;
  }
  bannerText.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(loopBanner);
}

loopBanner();