// Configuración de la API
// Cambia esto según tu entorno
const API_CONFIG = {
    // Desarrollo local
    development: 'http://localhost:3000/api',
    
    // Producción - TiendaNanuAjuares
    production: 'https://tiendananuajuares-api.herokuapp.com/api'
};

// Detectar entorno automáticamente
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? API_CONFIG.development 
    : API_CONFIG.production;