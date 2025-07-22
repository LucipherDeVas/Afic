/* aqui cargamos los estilos globales importando las herramientas de frameworks, por ejemplo

*/
import { Component } from 'react';
import 'todomvc-app-css/index.css';
// import '../styles/globals.css'; esto es po si tenemos propios estilos globales




// este es el componente raíz de la aplicación Next.js
// "Component" sera cualquier pagina que next.js renderice
// "pageProps" son propiedades opcionales que next.js pasara a esa pagina
function Myapp({ Component, pageProps }) {

    // aqui se renderiza el componente de la pagina actual
    // todas las paginas de Next.js pasan por este componente
    // lo que hace que los estilos globales se apliquen a todas las paginas
    return <Component {...pageProps} />
}

// exportamos este componente para que Next.js lo use automaticamente como el componente raíz de la aplicación
export default Myapp; 