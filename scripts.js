const objetoCarrito = new Carrito ();

document.addEventListener('DOMContentLoaded',() => {
  fetch('https://jsonblob.com/api/jsonBlob/981718291185942528')
  .then(response => response.json())
  .then(data => {
    guardarProducto(data);
    pintarCarrito(data.currency,objetoCarrito.obtenerProductos());
  });
  //guarda productos
  const guardarProducto = (data) => {
    data.products.forEach(producto => {
      const nuevoProducto = new Producto (producto.SKU, producto.title, producto.price);
      objetoCarrito.guardarProducto(nuevoProducto);  
    });
  };
  console.log(objetoCarrito.obtenerProductos());
  //pinta carrito
  const pintarCarrito = (currency,listaProductos) => {
    const carritoEl = document.querySelector('#contenido');
    carritoEl.innerHTML = "";
    console.log(listaProductos);
    listaProductos.forEach(product => {

      const sumarButton = document.createElement('button');
      sumarButton.innerText = '+';
      sumarButton.setAttribute('sumar-SKU', product.getSku());
      sumarButton.addEventListener('click', sumarButtonClickHandler);

      const calcularButton = document.createElement('input');
      calcularButton.setAttribute('calcular-SKU', product.getSku());
      calcularButton.setAttribute('disabled', '');
      calcularButton.setAttribute('value', 0);

      const restarButton = document.createElement('button');
      restarButton.innerText = '-';
      restarButton.setAttribute('restar-SKU', product.getSku());
      restarButton.addEventListener('click', restarButtonClickHandler);

      const tr = document.createElement('tr');
      let content = "";

      const tdtitle = document.createElement ('td');
      const title = document.createElement ('p');
      title.innerHTML= `${product.getTitle()}</br>Ref: ${product.getSku()}`;
      tdtitle.appendChild(title); 

      const tdcantidad = document.createElement ('td');
      tdcantidad.appendChild(restarButton);
      tdcantidad.appendChild(calcularButton);
      tdcantidad.appendChild(sumarButton);

      const tdprice = document.createElement ('td');
      const price = document.createElement ('p');
      price.innerHTML= `${product.getPrice()} ${currency}`;
      tdprice.appendChild(price);

      const tdcurrency = document.createElement ('td');
      const curre = document.createElement ('p');
      curre.innerHTML= `0${currency}`;
      tdcurrency.appendChild(curre);

      tr.innerHTML = content;

      tr.appendChild(tdtitle);    
      tr.appendChild(tdcantidad);
      tr.appendChild(tdprice);
      tr.appendChild(tdcurrency);
      carritoEl.appendChild(tr);          
    });
  };

  const sumarButtonClickHandler = (event) => {
    console.log(document.getElementsByClassName('calcular-SKU'))
    const calcularSku = document.getElementsByClassName('calcular-SKU');
    let acc = Number (calcularSku.innerText);
    InputEvent.innerText = acc + 1
  };
  
  






  const calcularButtonClickHandler = (event) => {
    const sku = event.target.getAttribute('element-SKU');
    console.log("ey", event.target);
    carrito.calcularProducto(sku);
    pintarCarrito (); 
  };

  const restarButtonClickHandler = (event) => {
    const sku = event.target.getAttribute('element-SKU');
    console.log("ey", event.target);
    carrito.restarProducto(sku);
    pintarCarrito (); 
  };
});