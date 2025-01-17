const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Handle socket connection
io.on("connection", function(socket) {
    console.log("Client connected:", socket.id);
    
    // Listen for 'send-location' event from client
    socket.on("send-location", function(data) {
        console.log(`Received location from ${socket.id}:`, data);
        
        // Emit the location to all clients
        io.emit("receive-location", { id: socket.id, ...data });
    });

    // Handle socket disconnection
    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

// Serve the main page
app.get("/", function(req, res) {
    res.render("index");
});

// Start the server
server.listen(8000, function() {
    console.log("App started at localhost:8000");
});
