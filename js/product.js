(() => {
   let 
      overlay = document.querySelector('.prod-desc')
      moreBtn = document.querySelector('.learnMore')
      descript = document.querySelector('.description');



   const descriptions = [
      [`A perfect original taste classic Billy Beer`]
   
   ]

   function showOverlay () {
      overlay.classList.toggle ('moving');

      descriptions.textContent = descriptions[this.dataset.offset][0];
   }

   moreBtn.addEventListener('click', showOverlay);

})();