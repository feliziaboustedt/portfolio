import express, { json } from "express";
import cors from "cors"; 
import { createServer } from "node:http"; 
import { Server } from "socket.io";
import dotenv from "dotenv";
import { messages, Message } from "./models/messages.mjs";

const app = express(); 
const port = process.env.PORT || 3001; 

dotenv.config()
app.use(json())
app.use(cors({
    credentials: true, 
}))


//Skapa node server 
const server = createServer(app); 

//Skapa socket-server(io)
const io = new Server(server, {
    cors: {
        origin: "*",
    },
})

app.get("/", (_, res) => {
    res.status(200).json({ message: "its working" })
})

// let messageDisplayed = false;

io.on("connection", (socket) => {
    
    console.log("a visitor wants to see the chat:")

    // if(!messageDisplayed) {
        io.emit("chatMessages", messages)
        // messageDisplayed = true; 

    //     socket.on("sendMessage", (newMessage:Message) => {
    //         messages.push(newMessage); 
    //         io.emit("chatMessages", messages)
    // })
// }

    socket.on("disconnect", () => {
        console.log("User disconnected", new Date());
    })

});



server.listen(port, () => {
    console.log("Hej API lever sitt eget liv"); 
});