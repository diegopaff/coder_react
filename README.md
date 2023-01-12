## **Proyecto E-commerce**

### **Introducción**

El proyecto es una tienda online de productos varios creado para una empresa ficticia a la que llamé E-SHOP. 

La funcionalidad de la tienda se basa en:

*   Obtener una lista de productos desde una base de datos (firestore) y mostrarlas con su imagen y precio. 
*   Poder filtrar esos productos por categoría.
*   Entrar a cada producto a ver mas información.
*   Agregar producto al carrito con la cantidad de items necesario.
*   Realizar un Checkout donde se se rellena un formulario con el que se genera una orden de compra con info de comprador e items del carrito. Esta órden queda guardada también en la base de datos.

---

## **Documentación:**


### **Librerias del proyecto:**

---

*   React-router-dom (Navegación de la web)
*   React-toastify (Muestra alertas cuando se agrega al carrito)
*   Firebase (Proporciona la Firestore Database)

---

### Conección a base de datos
---

Como base de datos del E-commerce se utilizo FireStore Database proporcionado por Firebase de Google

*   En ella se crearon dos colecciones:
    *   ‘Items’ → donde se ingresaron manualmente todos los productos con la siguiente info 
        *   title, price, stock, brand, category, image, thumbnail,
    *   ‘Orders’ → donde se guardan datos del comprador y del carrito. 
        *   buyer { name, email, phone} 
        *   Cart { array con items del carrito }
        *   Total { el total de la compra }

Para conectarse a la base primero se inicializa en /src/index.js 

```javascript
npm install firebase // primero se instala firebase 

// Se importa firebase y se agrega su configuracion (info proporiconada en la consola de firestore)
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "********************************",
  authDomain: "********************************",
  projectId: "********************************",
  storageBucket: "********************************",
  messagingSenderId: "********************************",
  appId: "********************************",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

### Organización del proyecto

dentro de /src

* **/routes** 
    * Home -> muestra una imágen y un boton para redireccionar al carrito
    * Store -> 
        * Renderiza el componente <ItemListContainer/>        
    * ProductId -> ruta dinámica que muestra el detalle del producto seleccionado en la Store utilizando su id. Como también el componente itemCount.
    * Cart -> va listando los productos agregados al carrito y muestra el formulario de checkout. 

* **/components** (dentro de cada carpeta se encuentra el componente Container con la lógica y el componente presentacional)
    * NavBar -> 
        * Barra de navegación lateral con link a las rutas de la web.
        * Renderiza componente CartWidget 
    * CartWidget -> muestra la cantidad de productos agregados al carrito
    * ItemCount -> componente que consume el contexto CartContext y donde agrega productos y cantidad de los mismos a al estado Cart. 
    * ItemListContainer -> contiene la lógica para conectarse a la base de datos y obtener lista de productos filtrado. 
        ```javascript

        useEffect(() => {
            const db = getFirestore();

            // Con esta variable hago el llamado de todos los items de db
            const itemsCollection = collection(db, 'items');

            // Con esta variable hago el llamado con el filtro de category
            const FilterQuery = query(itemsCollection, where("category", "==", filter));  
        
            getDocs(filter === 'all' ? itemsCollection : FilterQuery).then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(items);
            });
        }, [filter]);
            
        ```

    *ItemList -> Componente presentacional que mapea todos los productos y los renderiza utilizando el componente ProductCard. 
    *ProductCard -> Componente presentacional que crea una Card con la info del producto, con su imagen, precio y categoia

    ```html
        <div className='card-container'>
            <Link to={`/Store/${id}`} className='product__link'>
                <ThumbnailHandler img={product.image}/>
                <p className='product__title'>{product.title}</p>
                <p className='product__price'> $ {product.price}</p>
                <span className='product__category'>{product.category}</span>
            </Link>
            
        </div>
    ```
    *Checkout -> Consume el contexto CartContext


 





