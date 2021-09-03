const ultimos_articulos = document.querySelector(".ultimos_articulos");

for (let i = 0; i < 8; i++) {
    let articulo = document.createElement("div");
    articulo.className = "articulo";
    articulo.innerHTML =    `<img src="imagenes/ON9NZH0.jpg" alt="">
                            <div class="descripcion">
                                <h3>Articulo ${i+1}</h3>
                                <p>Lorem ipsum dolor sit ameuam temporibus dolor dignissimos deserunt repellendus quam ullam!</p>
                            </div>`;
    ultimos_articulos.appendChild(articulo);
}