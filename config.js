// Configuración de la API
// Cambia esto según tu entorno
const API_CONFIG = {
    // Desarrollo local
    development: 'https://tiendananuajuares-api-3de86a59b55e.herokuapp.com//api',
    
    // Producción - TiendaNanuAjuares
     production: 'https://tiendananuajuares-api-3de86a59b55e.herokuapp.com/api'
};

// Detectar entorno automáticamente
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? API_CONFIG.development 
    : API_CONFIG.production;
