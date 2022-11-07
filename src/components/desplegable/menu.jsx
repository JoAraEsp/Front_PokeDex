import React from "react";
import "../styles/menuPrincipal.css";

export default function Menu() {
  return (
    <header>
   
		<div class="menu_bar">
			<a href="#" class="bt-menu"><span class="icon-list2"></span>Menú</a>
		</div>

		<nav>
			<ul>
				<li><a href="#"><span class="icon-house"></span>Inicio</a></li>
				<li><a href="#"><span class="icon-suitcase"></span>Personajes</a></li>
				<li class="submenu">
					<a href="#"><span class="icon-rocket"></span>Proyectos<span class="caret icon-arrow-down6"></span></a>
					<ul class="children">
						<li><a href="#">Cartas <span class="icon-dot"></span></a></li>
						<li><a href="#">Avances <span class="icon-dot"></span></a></li>
						<li><a href="#">Entrenadores <span class="icon-dot"></span></a></li>
					</ul>
				</li>
				<li><a href="#"><span class="icon-earth"></span>Nosotros</a></li>
				<li><a href="#"><span class="icon-mail"></span>Contacto</a></li>
			</ul>
		</nav>
	</header>
  )
}