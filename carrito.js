class Carrito {
    constructor(productos = []) {
      this.productos = productos;

    }
    guardarProducto (producto){
      this.productos.push(producto);
    }
    obtenerProductos (){
      return this.productos;
    }

    actualizarUnidades(sku, unidades) {
      // Actualiza el número de unidades que se quieren comprar de un producto
      
    }

    obtenerInformacionProducto(sku) {
      // Devuelve los datos de un producto además de las unidades seleccionadas
      // Por ejemplo
      // {
      //   "sku": "0K3QOSOV4V",
      //   "quantity": 3
      // } 
    }

    obtenerCarrito() {
        return this.productos.reduce((acc, producto) => {
            return acc += producto.price;
          }, 0);  


      // Devuelve información de los productos añadidos al carrito
      // Además del total calculado de todos los productos
      // Por ejemplo:
      // {
      //   "total": "5820",
      //   "currency: "€",
      //   "products" : [
      //     {
      //       "sku": "0K3QOSOV4V"
      //       ..
      //     }
      //    ]}
      // }
    }
  }
