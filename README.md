## **Proyecto E-commerce**

### **Introducción**

El proyecto es una SPA (Single Page Aplication) realizada con la librería de React Js de una tienda online de productos varios E-SHOP. 

La funcionalidad de la aplicación  para la tienda se basa en:

*   Obtener una lista de productos desde una base de datos (firestore) y mostrarlas con su imagen y precio. 
*   Poder filtrar esos productos por categoría dentro de la Store.
*   Filtrar productos creando rutas dinámicas según categoría.
*   Entrar a cada producto a ver mas información.
*   Agregar producto al carrito con la cantidad de items necesario.
*   Dese el carrito realizar un Checkout donde se rellena un formulario con el que se genera una orden de compra con info de comprador e items del carrito. Esta órden queda guardada también en la base de datos.

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
    *   ‘Items’ → donde se ingresaron manualmente todos los productos con los siguientes campos:
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
---

dentro de /src

* ### **/routes** 
    * **Home** -> muestra una imágen y un boton para redireccionar al carrito
    * **Store** -> 
        * Renderiza el componente ItemListContainer.        
    * **ProductId** -> ruta dinámica que muestra el detalle del producto seleccionado en la Store utilizando su id. Como también el componente itemCount.
    * **Cart** -> va listando los productos agregados al carrito y muestra el formulario de checkout.
    * **Category** -> va listando los productos filtrados por la categoria seleccionada. 

* ### **/components** 
    (dentro de cada carpeta se encuentra el componente Container con la lógica y el componente presentacional)
    * **NavBar** -> 
        * Barra de navegación lateral con link a las rutas de la web.
        * Renderiza componente CartWidget
        * Dentro de NavBarContainer se hace un llamado a Firestore para saber toda la lista de categorías de productos que existe.
        * Se crea de forma dinámica un CategoryLink que te redirecciona a la route category correspondiente.    
    * **CartWidget** -> muestra la cantidad de productos agregados al carrito
    * **ItemCount** -> componente que agrega productos al carrito.
    Consume el contexto CartContext y agrega productos y cantidad de los mismos a al estado Cart.
    ```javascript
        const ItemCount = ({ stock, product }) => {

            //traigo del contexto las funciones y estados que necesito
            const { AddToCart } = useContext( CartContext );
            
            const [Counter , setCounter] = useState(1);
        
            const restarItem = () => {
                Counter > 0 ? setCounter(Counter - 1) : setCounter(Counter);
            }
            const sumarItem = () => {
                Counter < stock ? setCounter(Counter + 1) : setCounter(Counter);
            }
        
            const notify = () => toast.success(`Se agregó ${Counter} ${product.title} al carrito`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        
            const onAdd = () => {
                
                AddToCart(product , Counter);
                notify();
            
            }
        
            const subTotalPrice = () => product.price * Counter
        
            return (
                
                <div className='item-Count'>
        
                    <button type="button" className="btn-agregar" onClick={onAdd}>Agregar al Carrito - ${subTotalPrice()}</button>
                    <div className="btn-group">
                        <button type="button" className="btn_counter" onClick={restarItem}>-</button>
                        <button type="button" className="count-number">{Counter}</button>
                        <button type="button" className="btn_counter" onClick={sumarItem}>+</button>
                    </div>
                    <ToastContainer />
                    
                </div>
            )}
    ```
    Importo la función AddtoCart del contexto y cuando haga clic en el botón añadir al carrito se ejecute. También se muestra un mensaje de éxito abajo a la derecha utilizando la librería React-toastify. Con la función notify() muestro el mensaje. 
    * **ItemListContaine**r -> contiene la lógica para conectarse a la base de datos y obtener lista de productos filtrado. 

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

    * **ItemList** -> Componente presentacional que mapea todos los productos y los renderiza utilizando el componente ProductCard 
    * **ProductCard** -> Componente presentacional que crea una Card con la info del producto, con su imagen, precio y categoia

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
    * **Checkout** -> Consume el contexto CartContext y mediante un formulario crea una orden de compra que se guardará en la base de datos
        * Junta la información del formulario con la del Carrito
        ```javascript
            const changeHandler = (ev) => {
            //Agarro value y name del event target para poder reutilizar el changeHandler en cada input
            const { value, name } = ev.target;
            SetBuyer({...Buyer, [name]: value}); //cada vez que hay un cambio en en el input guardo en el estado Buyer la info obtenida por el form
            SetOrder({...Order, Buyer, Cart, Total:GetTotalCart()}); // mezclo la información del comprador con la del carrito que traje del contexto
        }
    
        ```

        * Cuando apreto el submit del form me conecto con la coleccion 'orders' de firestore y creo una nueva order
        ```javascript
            const submitHandler = (ev) => {
        
                //evito que se acualice el formulario
                ev.preventDefault();

                const db = getFirestore();
                const ordersCollection = collection(db, 'orders'); //me conecto con la colleccion orders de mi firestore

                addDoc(ordersCollection, Order).then(snapshot => {
                    
                    // una vez mandado el formulario a firestore reinicio el estado Buyer
                    SetBuyer({
                        name: '',
                        email: '',
                        phone: ''
                    });
                
                    SetId(snapshot.id);// recupero el id de la orden generada
                })

            }

        ```
* ### **/context** 

    * Esta creado el CartContext 
    * Con un estado **Cart** -> donde esta destinado a guardar un array con cada producto agregado y su cantidad. 
    * Con funciones para interactuar con el estado **Cart**:
        * **GetTotalCart()** -> Retorna la suma total del carrito.
        ```javascript
        const GetTotalCart = () => { 
            const total = Cart.reduce((acumulador, product) => {
                return acumulador += product.price*product.quantity;
          }, 0)
        
        return total;  
    }
        
        ```
        * **EmptyCart()** -> Vacía el carrito
        ```javascript
            const EmptyCart = () => setCart([]);
        ```
        * **IsInCart(id)** -> Función que devuelve un booleano donde busca si ya existe un producto con la misma id en Cart.
        ```javascript
            const IsInCart = (id) => (Cart.find((product) => product.id === id));
        ```
        * **RemoveItemCart(id)** -> Borra el producto con ese id de **Cart**.
        ```javascript
            const RemoveItemCart = (id) => {
                setCart(Cart.filter((product) => product.id !== id))
            }
        ```

        * **AddToCart(product, cantidad)** -> Guarda el product en el estado con **setCart**.
        ```javascript
    const AddToCart = (product , cantidad) => {
        
            if(IsInCart(product.id)){
                setCart(Cart.map((prod) => {
                        return prod.id === product.id ? 
                        {...prod, quantity: prod.quantity + cantidad} :
                        prod;
                    }))
            } else {
                setCart([...Cart, {...product, quantity: cantidad}]);
            }
       
        }
        ```
        En el codigo se ve como si el producto agregado ya existe en el Cart, se modifica solo el atributo quantity del elemento de Cart con la suma de la nueva cantidad de ese mismo producto. En el caso que no exista en el carrito se agrega un nuevo elemento al estado Cart con los detalles del producto y la cantidad comprada. 
        

### Diseño de estilos
---

Se utiliza CSS creando un archivo .css dentro de cada componente o ruta donde contienen los estilos de dicho componente.
Para el diseño de UI se basó en un proyecto de e-commerce encontrado en la comunidad de figma [Ecommerce Website Wireframe](https://www.figma.com/community/file/1148511731251958035).

Muchas gracias.

Att. Diego Curutchet



 





