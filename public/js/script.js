const socket = io();

// Emit geolocation updates
if (navigator.geolocation) {
    console.log("Geolocation supported");
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Geolocation: ${latitude}, ${longitude}`); // Debug log
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.error("Geolocation error:", error);
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000,
        }
    );
} else {
    console.error("Geolocation is not supported by your browser.");
}

// Initialize the map
const map = L.map("map").setView([0, 0], 16);
console.log("Map initialized");

// Add OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Dhruv"
}).addTo(map); 

// Object to store markers by client ID
const markers = {};

// Listen for location updates from the server
socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    console.log(`Received location for client ${id}: ${latitude}, ${longitude}`);
    
    // Center the map on the received coordinates
    map.setView([latitude, longitude], 16);

    // Update existing marker or create a new one
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});
