let map;

// Lista de proyectos con detalles
const proyectos = [
    {
        nombre: "Reserva del Lago III",
        lat: 4.9200,
        lng: -74.0288,
        area: "Desde: 52 m² Hasta: 80 m²",
        precio: "Desde: $233.300.000 hasta $412.652.000",
        direccion: "Km 4 variante Cajicá – Zipaquirá"
    },
    {
        nombre: "Reserva del Lago II",
        lat: 4.9056,
        lng: -74.0502,
        area: "Desde: 53 m² Hasta: 107 m²",
        precio: "Desde: $210.000.000 hasta $596.906.000",
        direccion: "Km 4 variante Cajicá – Zipaquirá"
    },
    {
        nombre: "Burano",
        lat: 4.6850,
        lng: -74.0568,
        area: "Desde: 59 m² con un área privada desde 53 m² aprox.",
        precio: "Apartamentos de 1 alcoba, torre de 6 pisos",
        direccion: "Transversal 18 a # 100-62"
    },
    {
        nombre: "Albura",
        lat: 4.7050,
        lng: -74.0823,
        area: "Desde: 36 m²",
        precio: "Desde: $305.167.000",
        direccion: "Carrera 68A No.105-73, Av. Suba, pirámide de telefónica"
    },
    {
        nombre: "Los Robles",
        lat: 4.7102,
        lng: -74.0805,
        area: "Desde: 36 m²",
        precio: "Desde: $305.167.000 *175 SMMLV proyectados a 2028",
        direccion: "Cra. 68a #105 - 73, Bogotá"
    },
    {
        nombre: "Corteza",
        lat: 4.7258,
        lng: -74.0952,
        area: "Desde: 84 m² Hasta: 121 m²",
        precio: "Desde: $582.000.000",
        direccion: "Carrera 68A No.105-73, Av. Suba, pirámide de telefónica"
    },
    {
        nombre: "63 Living",
        lat: 4.6663,
        lng: -74.0845,
        area: "Desde: 27 m² Hasta: 29 m²",
        precio: "Desde: $213.525.000",
        direccion: "Ak 68 #75 A-50 C.C Metropolis Local 131A"
    },
    {
        nombre: "DC Urban Apartaestudios",
        lat: 4.6785,
        lng: -74.0923,
        area: "Desde: 18 m² Hasta: 20 m²",
        precio: "Desde: $125.530.000",
        direccion: "Av. El Dorado No. 85K-93"
    },
    {
        nombre: "Vissani",
        lat: 4.6703,
        lng: -74.1102,
        area: "Desde: 33 m² hasta 136 m²",
        precio: "Desde: $372.000.000",
        direccion: "Calle 26 # 70a-45, Ciudad Salitre"
    },
    {
        nombre: "Parque de las Américas Terra",
        lat: 4.6418,
        lng: -74.0835,
        area: "Desde: 31 m² Hasta: 38 m²",
        precio: "Desde: $200.873.000",
        direccion: "Transversal 32C # 22B – 89"
    },
    {
        nombre: "CentriPark",
        lat: 4.6502,
        lng: -74.1038,
        area: "Desde: 30 m² Hasta: 40 m²",
        precio: "Desde: $209.215.500",
        direccion: "Cl. 13 #38-54"
    },
    {
        nombre: "Mazzaro",
        lat: 4.6258,
        lng: -74.0820,
        area: "Desde: 38 m²",
        precio: "Desde: $195.000.000",
        direccion: "Cl. 4b #34a-85"
    }
];

// Inicializa el mapa de Google Maps
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 4.7109, lng: -74.0721 }, // Bogotá como punto central
        zoom: 12,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#212121" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#373737" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f252e" }] }
        ]
    });

    // Agregar marcadores en el mapa
    proyectos.forEach(proyecto => {
        const marker = new google.maps.Marker({
            position: { lat: proyecto.lat, lng: proyecto.lng },
            map: map,
            title: proyecto.nombre,
            icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });

        // Ventana de información del proyecto
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="text-align:left; font-size:14px;">
                    <h3 style="color:#ffcc00;">🏢 ${proyecto.nombre}</h3>
                    <p><strong>📏 Área:</strong> ${proyecto.area}</p>
                    <p><strong>💰 Precio:</strong> ${proyecto.precio}</p>
                    <p><strong>📍 Ubicación:</strong> ${proyecto.direccion}</p>
                </div>`
        });

        // Mostrar información al hacer clic en el marcador
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}
