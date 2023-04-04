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




const imageSlider = document.querySelector(".image-slider");
let currentImageIndex = 0;

function scrollImages() {
  currentImageIndex++;

  if (currentImageIndex >= 3) {
    currentImageIndex = 0;
  }

  const newPosition = -currentImageIndex * 100;
  imageSlider.style.top = `${newPosition}%`;
}

setInterval(scrollImages, 5000);

const dots = document.querySelectorAll(".dot");

function setActiveDot(index) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
}


function setActiveDot(index) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
}

function handleDotClick(event) {
    const index = parseInt(event.target.dataset.index, 10);
    currentImageIndex = index;
    const newPosition = -currentImageIndex * 100;
    imageSlider.style.top = `${newPosition}%`;
    setActiveDot(index);
    }
    
    dots.forEach((dot) => {
    dot.addEventListener("click", handleDotClick);
    });
    
    setActiveDot(0); // Set the first dot as active initially
    
    // Update scrollImages function to set the active dot as well
    function scrollImages() {
    currentImageIndex++;
    
    if (currentImageIndex >= 3) {
    currentImageIndex = 0;
    }
    
    const newPosition = -currentImageIndex * 100;
    imageSlider.style.top = `${newPosition}%`;
    setActiveDot(currentImageIndex);
    }
	
//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/