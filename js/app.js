import { carrouselDeImagenes } from "./carrousel.js";
import {
	hamburgerMenu,
	responsiveHamburger,
	clickEnlace,
} from "./menu_hamburguesa.js";

const d = document;
d.addEventListener("DOMContentLoaded", e => {
	hamburgerMenu(".hamburger", ".navegador", ".menu");
	responsiveHamburger(".navegador", "(max-width: 640px)");
	clickEnlace(".menu");
	carrouselDeImagenes(".carrousel", ".circulo", ".left-slide", ".right-slide");
});

/*	responsiveMedia(
		"video-jon",
		"(min-width: 1024px)",
		`<iframe width="618" height="506" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="" allowfullscreen></iframe>`,
		`<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank">Video de JonMircha</a>`
	); */
