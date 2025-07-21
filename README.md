# E-commerce Frontend (Tailwind)

Frontend para la aplicación de e-commerce construido con HTML, Tailwind CSS y JavaScript vanilla.

## Características

- 🛍️ Catálogo de productos con filtros
- 🛒 Carrito de compras
- 👤 Sistema de autenticación
- 📱 Diseño responsive
- ⭐ Carrusel de productos destacados
- 👨‍💼 Panel de administración
- 🔍 Búsqueda de productos

## Configuración

1. Edita el archivo `config.js` con la URL de tu backend:

```javascript
const API_CONFIG = {
    development: 'http://localhost:3000/api',
    production: 'https://tu-backend.herokuapp.com/api'
};
```

## Desarrollo Local

Puedes usar cualquier servidor HTTP local:

### Opción 1: VS Code Live Server
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 2: Python
```bash
python -m http.server 8000
```

### Opción 3: Node.js http-server
```bash
npx http-server -p 8000
```

Luego abre http://localhost:8000

## Páginas

- `/index.html` - Página principal y catálogo
- `/admin.html` - Panel de administración (requiere login de admin)

## Despliegue

### Opción 1: Vercel
```bash
npm i -g vercel
vercel
```

### Opción 2: Netlify
1. Sube a GitHub
2. Conecta con Netlify
3. Deploy automático

### Opción 3: GitHub Pages
1. Sube a GitHub
2. Settings → Pages → Source: main branch

## Importante

- Asegúrate de configurar la URL del backend en `config.js`
- El backend debe tener CORS habilitado para tu dominio
- En producción, usa HTTPS para ambos (frontend y backend)

## Backend

Este frontend requiere el backend API corriendo. Ver repositorio `ecommerce-server`.