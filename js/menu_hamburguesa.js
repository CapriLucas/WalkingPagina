const d = document;
const w = window;
const nav = `
  <a href="index.html">Inicio</a>
  <a href="galeria.html">Galeria</a>
  <a href="viajes.html">Viajes</a>
  <a href="contacto.html">Contacto</a>
  <a href="Sobre nosotros">Sobre nosotros</a>
  <a href="https://www.instagram.com/walking.burgers/" target="_blank">
    <i class="bx bxl-instagram"></i>
  </a>
  <a href="" target="_blank">
    <i class="bx bxl-youtube"></i>
  </a>`;
let estado = false;
export function hamburgerMenu(claseBoton, claseNavHeader, claseMenu) {
	d.addEventListener("click", e => {
		const $menu = d.querySelector(claseMenu);
		if (e.target.matches(claseBoton) || e.target.matches(`${claseBoton} *`)) {
			d.querySelector(claseBoton).classList.toggle("is-active");
			if (estado) {
				$menu.innerHTML = null;
				estado = false;
			} else {
				$menu.innerHTML = nav;
				estado = true;
			}
		}
	});
}

export function responsiveHamburger(claseNavHeader, mediaQuery) {
	let breakpoint = w.matchMedia(mediaQuery);
	const responsive = e => {
		if (e.matches) {
			d.querySelector(claseNavHeader).innerHTML = `
      <button class="hamburger hamburger--collapse" type="button">
			  <span class="hamburger-box">
				  <span class="hamburger-inner"></span>
			  </span>
		  </button>`;
		} else {
			d.querySelector(claseNavHeader).innerHTML = nav;
		}
	};
	breakpoint.addListener(responsive);
	responsive(breakpoint);
}
