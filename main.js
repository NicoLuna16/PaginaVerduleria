const contenedorCards = document.getElementById("contenedor_cards");
let cardsHTML = "";

for (let prod of prods) {
    cardsHTML += crearCards(prod);
}
contenedorCards.innerHTML = cardsHTML;

function crearCards(prod) {
    let card = document.createElement('div');
    card.classList.add('card');

    let name = document.createElement('p');
    let image = document.createElement('img');
    let precio = document.createElement('p');
    let tipo = document.createElement('p');

    name.innerText = prod.name;
    image.src = prod.image;
    precio.innerText = `Precio: ${prod.precio}`;
    tipo.innerText = `Tipo: ${prod.tipo}`;

    card.append(name, image, precio, tipo);
    return card.outerHTML;
}

const inputBuscar = document.getElementById('lblbuscar');
inputBuscar.addEventListener('input', function () {
    const textoBusqueda = inputBuscar.value.toLowerCase();
    const productosFiltrados = prods.filter(prod => prod.name.toLowerCase().includes(textoBusqueda));

    let cardsHTML = "";
    for (let prod of productosFiltrados) {
        cardsHTML += crearCards(prod);
    }
    contenedorCards.innerHTML = cardsHTML;
});

function renderizarProductos(productos) {
    let cardsHTML = "";
    for (let prod of productos) {
        cardsHTML += crearCards(prod);
    }
    contenedorCards.innerHTML = cardsHTML;
}


function filtrarProductos() {
    const textoBusqueda = document.getElementById('lblbuscar').value.toLowerCase();
    const chkFruta = document.getElementById('chkFruta').checked;
    const chkVerdura = document.getElementById('chkVerdura').checked;


    let productosFiltrados = prods.filter(prod => {
        const nombreLower = prod.name.toLowerCase();
        const cumpleBusqueda = nombreLower.includes(textoBusqueda);

        if (chkFruta && chkVerdura) {
            return cumpleBusqueda && (prod.tipo === 'Fruta' || prod.tipo === 'Verdura');
        } else if (chkFruta) {
            return cumpleBusqueda && prod.tipo === 'Fruta';
        } else if (chkVerdura) {
            return cumpleBusqueda && prod.tipo === 'Verdura';
        } else {
            return cumpleBusqueda; 
        }
    });

    renderizarProductos(productosFiltrados);
}


document.getElementById('lblbuscar').addEventListener('input', filtrarProductos);


document.getElementById('chkFruta').addEventListener('change', filtrarProductos);
document.getElementById('chkVerdura').addEventListener('change', filtrarProductos);


renderizarProductos(prods);