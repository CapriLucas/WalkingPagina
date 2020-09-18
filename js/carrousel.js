const d = document;
const imagenes = [
	'<img src="./assets/4 The Laundry 15km/marucha.jpg" alt="" />',
	'<img src="./assets/5 Voraz 27km/laMontana.jpg" alt="" />',
	'<img src="./assets/7 Burgertify 30km/contra.jpg" alt="" />',
];
let imgActual = 0;

function modificarImg(num, salto, botones) {
	botones[imgActual].classList.remove("active");
	if (salto) {
		imgActual = num;
	} else {
		imgActual += num;
		if (imgActual == -1) imgActual = 2;
		if (imgActual == 3) imgActual = 0;
	}
	botones[imgActual].classList.add("active");
}

export function carrouselDeImagenes(
	claseCarrousel,
	claseCirculos,
	leftSlide,
	rightSlide
) {
	const $carrousel = d.querySelector(claseCarrousel);
	const $botones = d.querySelectorAll(claseCirculos);
	const botones = Array.from($botones);
	console.log(botones);
	$carrousel.firstElementChild.outerHTML = imagenes[imgActual];
	botones[imgActual].classList.add("active");

	d.addEventListener("click", e => {
		if (e.target.matches(leftSlide) || e.target.matches(`${leftSlide} *`)) {
			modificarImg(-1, false, botones);
			$carrousel.firstElementChild.outerHTML = imagenes[imgActual];
		} else if (
			e.target.matches(rightSlide) ||
			e.target.matches(`${rightSlide} *`)
		) {
			modificarImg(1, false, botones);
			$carrousel.firstElementChild.outerHTML = imagenes[imgActual];
		}
		if (botones.includes(e.target)) {
			let pos = botones.indexOf(e.target);
			modificarImg(pos, true, botones);
			$carrousel.firstElementChild.outerHTML = imagenes[imgActual];
		}
	});
}
