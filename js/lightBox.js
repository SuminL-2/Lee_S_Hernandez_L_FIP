console.log('js is running');

let bioLinks = document.querySelectorAll('.members a'),
	theLightbox = document.querySelector('#lightbox');

function getMemberData() {
		theLightbox.querySelector('.lb_heading').textContent = members[this.dataset.member].name;

		theLightbox.querySelector('.lb_text').textContent = members[this.dataset.member].bio;

		theLightbox.querySelector('.lb_text2').textContent = members[this.dataset.member].skill;
	}


bioLinks.forEach(link => link.addEventListener('click', getMemberData));
