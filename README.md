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

---

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
        *   Cart { Items del carrito }
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

Almacenamiento





