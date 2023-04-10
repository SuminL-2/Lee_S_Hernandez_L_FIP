console.log('js is running');

let moreBtn = document.querySelectorAll('.des-btn'),
	lightbox = document.querySelector('#lb-desc');


let beer = {
   classic: {
      name: 'Billy Classic',
      info: 'This is the beer that started it all - a timeless classic that never goes out of style. With its rich, malty flavor and satisfying hoppy finish, this brew is sure to please even the most discerning beer aficionado. Whether you are enjoying it with friends at a BBQ or sipping it by the fire on a chilly evening, this beer is the perfect companion for any occasion.',
   },

   light: {
      name: 'Billy Light',
      info: 'Looking for a refreshing beer that will not weigh you down? Look no further than our Light Alcohol Beer. With a crisp, clean taste and just the right amount of alcohol, this brew is perfect for those who want to enjoy the flavor of a great beer without the added calories. Whether you are hitting the gym or just looking to cut back on your alcohol intake, this beer is the perfect choice for any active lifestyle.'
   },

   zero: {
      name: 'Loui Hernandez',
      info: 'Want to enjoy a cold beer without any guilt? Our Zero Calories Beer is the answer. With its light, refreshing taste and zero calories, this brew is the perfect choice for anyone looking to stay on track with their fitness goals. Whether you are lounging by the pool or hitting the beach with friends, this beer is the perfect way to stay hydrated and refreshed while still enjoying the taste of a great brew. So go ahead, indulge in a guilt-free beer and toast to your health and wellness!'
   }
}


function getBeerData() {
		lightbox.querySelector('.lb_heading').textContent = beer[this.dataset.beer].name;

		lightbox.querySelector('.lb_text').textContent = beer[this.dataset.beer].info;
	}

moreBtn.forEach(link => link.addEventListener('click', getBeerData));


