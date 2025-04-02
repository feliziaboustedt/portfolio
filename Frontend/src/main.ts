import './style.css'
import { io, Socket } from 'socket.io-client'
import { Message } from './models/message'

const socket: Socket = io("http://localhost:3001");

const messageContainer = document.getElementById("messages") as HTMLDivElement;

socket.on("chatMessages", (messages: Message[]) => {    

    messageContainer.innerHTML = "";
    
    let delay = 0;
    
    messages.forEach((message) => {
        
        setTimeout(() => {
            const messageSpan = document.createElement("span");
            messageSpan.classList.add("chatMessage"); 
            
            if(message.intern) {
                messageSpan.classList.add("intern"); 
                messageSpan.innerHTML = `${message.intern}: ${message.message}`
            } else if (message.receiver) {
                messageSpan.classList.add("receiver"); 
                messageSpan.innerHTML = `${message.receiver}: ${message.message}`
            } else {
                messageSpan.innerHTML = message.message;  
            }
            
            messageContainer.scrollTop = messageContainer.scrollHeight;
            messageContainer.appendChild(messageSpan);
            
        }, delay);
        
        delay += 2000;
        
    });
});

function sendMessage() {
    const newMessage: Message = {
        intern: "Felizia", 
        message: `${messageContainer.innerHTML}`
    } 
    socket.emit("sendMessage", newMessage)
    
}

sendMessage();
