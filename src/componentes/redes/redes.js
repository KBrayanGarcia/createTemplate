let redes_container = document.querySelector('.redes__container');

let iconosRedes = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-linkedin-in'];

for (let i = 0; i < iconosRedes.length; i++) {
	redes_container.innerHTML += (`<a href="#"><i class="${iconosRedes[i]} redes__icono"></i></a>`)
}	