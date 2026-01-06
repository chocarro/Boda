const secciones = {

       'confirmacion': `
        <div class="modal-header-green">
            <h1>RSVP</h1>
            <h2>Confirmar</h2>
        </div>
        <div class="modal-body-white">
            <p>Tu presencia es nuestro mejor regalo. Por favor, confírmanos tu asistencia antes del <strong>1 de Septiembre, 2026</strong>.</p>
            
            <a href="https://wa.me/34600000000?text=¡Hola!%20Confirmo%20con%20mucha%20alegría%20mi%20asistencia%20a%20la%20boda%20de%20Sarah%20%26%20Alistair." 
               target="_blank" 
               class="btn-whatsapp-rsvp">
               ENVIAR WHATSAPP
            </a>
        </div>`,

   'portada': `
    <div class="modal-header-green">
        <h1>BIENVENIDOS</h1>
    </div>
    <div class="modal-body-white">
        <p class="texto-bienvenida-cursivo">
            Estamos muy emocionados de compartir este día tan especial con ustedes. Gracias por ser parte de nuestra historia.
        </p>
        
        <div class="countdown-minimal">
            <span class="countdown-label">FALTAN</span>
            <div id="timer-modal">
                <span id="days">00</span>D : <span id="hours">00</span>H : <span id="minutes">00</span>M
            </div>
        </div>
    </div>`,
    
    'detalles': `
        <div class="modal-header-green">
            <h1>THE FINER</h1>
            <h2>Details</h2>
        </div>
        <div class="modal-body-white">
            <div class="section-title">ITINERARIO</div>
            
            <div class="itinerary-item">
                <strong>17:30 HRS</strong>
                <p>Ceremonia de Amor en el Jardín Principal</p>
            </div>
            
            <div class="itinerary-item">
                <strong>18:30 HRS</strong>
                <p>Cóctel de Bienvenida y Canapés</p>
            </div>
            
            <div class="itinerary-item">
                <strong>20:00 HRS</strong>
                <p>Banquete, Brindis y ¡A Bailar!</p>
            </div>

            <div class="section-title">VIAJE Y ALOJAMIENTO</div>
            <div class="itinerary-item">
                <p>Recomendamos reservar su estancia cerca de la Hacienda San José en Mérida para mayor comodidad.</p>
                <a href="https://maps.google.com" target="_blank" class="btn-link-modal">VER UBICACIÓN</a>
            </div>
        </div>`,

    'dresscode': `
        <div class="modal-header-green">
            <h1>ESTILO</h1>
            <h2>Dress Code</h2>
        </div>
        <div class="modal-body-white">
            <h3>FORMAL</h3>
            <p>Sugerimos colores tierra y especialmente el tono <strong>Verde Sabia</strong>.</p>
            <p>Damas: Vestido Largo.<br>Caballeros: Traje formal.</p>
        </div>`
};

let countdownInterval;

function showInfo(id) {
    const modal = document.getElementById('modal');
    const textContainer = document.getElementById('modal-text');
    
    if (secciones[id]) {
        textContainer.innerHTML = secciones[id];
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 

        if (id === 'portada') {
            iniciarReloj();
        }
    }
}

function closeInfo() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    clearInterval(countdownInterval);
}

function iniciarReloj() {
    const weddingDate = new Date("October 12, 2026 17:30:00").getTime();

    const actualizar = () => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const d = document.getElementById("days");
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");

        if (d && diff > 0) {
            d.innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            h.innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            m.innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        }
    };

    actualizar();
    countdownInterval = setInterval(actualizar, 1000);
}

