const objetoCarrito = new Carrito ();

document.addEventListener('DOMContentLoaded',() => {
    fetch('https://jsonblob.com/api/jsonBlob/981718291185942528')
        .then(response => response.json())
        .then(data => {
            data.products.forEach(element => {
                const nuevoProducto = new Producto (element.SKU, element.title, element.price);
                objetoCarrito.guardarProducto(nuevoProducto);
            });
            
           /* //console.log(data);
            let tr = '';
            data.products.forEach(element => {
            console.log(element.SKU);

            const sumarButton = document.createElement('button');
            sumarButton.innerText = '+';
            sumarButton.setAttribute('data-sku', element.SKU);
            sumarButton.addEventListener('click', sumarClickHandler)

            



            tr += `<tr>
                <td>${element.title}</td>
                <td> 
                
                </td>

                <td>${element.price} ${data.currency}</td>
                <td>0${data.currency}</td>
            </tr>`;      

            });
            document.getElementById('contenido').innerHTML = tr*/
        });
        const pintarCarrito = () => {
            const carritoEl = document.querySelector('#contenido');
            carritoEl.innerHTML = "";
            console.log(objetoCarrito.obtenerProductos());

            objetoCarrito.obtenerProductos().forEach(element => {
                console.log(element);
                
            });
            objetoCarrito.obtenerProductos().forEach(element => {
                console.log(element);
                const tr = document.createElement('tr');
                let content = "";
                content += `<td>${element.title}</td>`;
                //content += `<td>${}</td>`;
                content += `<td>${element.price} ${data.currency}</td>`;
                content += `<td>0${data.currency}</td>`;
                tr.innerHTML = content;
                carritoEl.appendChild(tr);
            });
        }
        pintarCarrito();
   /* $.get ('https://jsonblob.com/api/jsonBlob/981718291185942528', function(datos){
        $("#contenido").html("");
        for(var i=0; i<datos.products.length; i++){
            let tr = `<tr>
                <td>`+datos.products[i].title+`</td>
                <td>
                <button>-</button>
                <input type="number" id="input" placeholder="0"/>
                <button>+</button>
                </td>
                <td>`+datos.products[i].price+' '+ datos.currency+`</td>
                <td>0 `+datos.currency+`</td>
            </tr>`;
            $("#contenido").append(tr)
        }  

    })*/

});
