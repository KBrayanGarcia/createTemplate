let burger_container = document.querySelector('.navBar__burger-container');
let enlaces_container = document.querySelector('.navBar__enlaces-container');
let arrow_container = document.querySelector('.navBar__icon-arrow');
let subEnlaces_container = document.querySelector('.navBar__enlace-subEnlaces');
burger_container.addEventListener('click', () => {
	if (enlaces_container.classList.contains('mostrar')) {
		enlaces_container.classList.remove('mostrar');
	} else {
		enlaces_container.classList.add('mostrar');
	}
});

arrow_container.addEventListener('click', () => {
	if (subEnlaces_container.classList.contains('mostrar')) {
		subEnlaces_container.classList.remove('mostrar');
	} else {
		subEnlaces_container.classList.add('mostrar');
	}
	if (arrow_container.classList.contains('reverse')) {
		arrow_container.classList.remove('reverse');
	} else {
		arrow_container.classList.add('reverse');
	}
})
