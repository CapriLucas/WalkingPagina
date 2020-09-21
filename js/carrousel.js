const d = document;
var claseImg = "carrousel-img",
	claseBotonNext = ".right-slide",
	claseBotonPrev = ".left-slide",
	items = d.querySelectorAll("." + claseImg),
	cantItems = items.length,
	posActual = 0,
	moving = true;

function setInitialClasses() {
	items[cantItems - 1].classList.add("prev");
	items[0].classList.add("active");
	items[1].classList.add("next");
}

function setEventListeners() {
	var next = d.querySelector(claseBotonNext);
	var prev = d.querySelector(claseBotonPrev);
	next.addEventListener("click", e => {
		if (!moving) {
			if (posActual === cantItems - 1) {
				posActual = 0;
			} else {
				posActual++;
			}
			moveCarrouselTo(posActual);
		}
	});
	prev.addEventListener("click", e => {
		if (!moving) {
			if (posActual === 0) {
				posActual = cantItems - 1;
			} else {
				posActual--;
			}
			moveCarrouselTo(posActual);
		}
	});
}

function desabilitarInteraccion() {
	moving = true;
	setTimeout(() => {
		moving = false;
	}, 500);
}

function moveCarrouselTo(posicion) {
	if (!moving) {
		desabilitarInteraccion();
		let posiciones = getPrevNext(posicion);
		for (let img of items) {
			img.className = claseImg;
		}
		console.log(posiciones.newPrev, posicion, posiciones.newNext);
		items[posiciones.newNext].classList.add("next");
		items[posiciones.newPrev].classList.add("prev");
		items[posicion].classList.add("active");
		console.log(items);
	}
}

function getPrevNext(posicion) {
	let newPrev, newNext;

	if (posicion === 0) {
		newPrev = cantItems - 1;
	} else newPrev = posicion - 1;
	if (posicion === cantItems - 1) {
		newNext = 0;
	} else newNext = posicion + 1;
	return { newNext, newPrev };
}

function initCarousel() {
	setInitialClasses();
	setEventListeners();
	moving = false;
}
initCarousel();
