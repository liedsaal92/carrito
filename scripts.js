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
      sumarButton.setAttribute('sumar-sku', product.getSku());
      sumarButton.addEventListener('click', sumarButtonClickHandler);
      

      const calcularButton = document.createElement('input');
      calcularButton.setAttribute('disabled', '');
      calcularButton.setAttribute('value', 0);
      calcularButton.setAttribute('id', product.getSku ());

      const restarButton = document.createElement('button');
      restarButton.innerText = '-';
      restarButton.setAttribute('restar-sku', product.getSku());
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
        const sumarSku = event.target.getAttribute('sumar-sku');
        const calcularSku = document.getElementById(sumarSku);
        let acc = Number(calcularSku.value);
        calcularSku.value = acc + 1;
        //actualizar total
           


    };
  
    const restarButtonClickHandler = (event) => {
        const restarSku = event.target.getAttribute('restar-sku');
        const calcularSku = document.getElementById(restarSku);
        let acc = Number(calcularSku.value);
        if (acc > 0) {
            calcularSku.value = acc - 1;
        } 
    };

});