# RealPoint
Real-Point is a real-time location tracking application, inspired by services like Ola, Uber, and Zomato. It allows users to track the location of objects (such as drivers, delivery personnel, or services) on a map in real-time. The backend is built using Node.js, Express.js, and WebSocket for efficient communication.

# Features

Real-Time Location Tracking: Display user/device locations on an interactive map powered by Leaflet.

WebSocket Integration: Enable real-time updates between clients and the server.

Scalable Backend: Built using Node.js and Express.js for fast and lightweight performance.

# Tech Stack

Backend: Node.js, Express.js

Real-Time Communication: Socket.IO (WebSocket)

Frontend Map Library: Leaflet.js

View Engine: EJS (Embedded JavaScript)

# Installation

Follow these steps to set up the project locally:

Clone the repository:

git clone https://github.com/<your-username>/real-point.git
cd real-point

Install dependencies:

npm install

Start the application:

npm start

Open your browser and navigate to:

http://localhost:8000

# Project Structure

real-point/
├── public/
│   ├── css/
│   │   └── style.css  # Styles for the map and page
│   ├── js/
│   │   └── script.js  # Client-side JavaScript
├── views/
│   └── index.ejs           # Main HTML file
├── app.js                      # Main backend server
├── package.json               # Project dependencies
└── README.md                  # Project documentation

# Usage

Start the Application:
Ensure the app is running locally or deployed on a server.

Real-Time Location Updates:

Open the app in multiple tabs or devices.

Share location updates via WebSocket using navigator.geolocation (browser location API).

Visualize Movement:
Watch markers on the map update as locations are sent and received.

# How It Works

Backend:

The server listens for location updates from clients via WebSocket.

Broadcasts the updates to all connected clients.

Frontend:

Leaflet.js displays a map in the browser.

Markers represent users or objects on the map.

Real-time updates adjust marker positions dynamically.

# Key Files

app.js:

Sets up the Express.js server.

Handles WebSocket connections via Socket.IO.

Serves static files and renders views.

script.js:

Manages the client-side WebSocket connection.

Sends geolocation updates to the server.

Updates the map with real-time marker positions.

style.css:

Defines styles for the map container.

