const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');;
const formatMessage = require('./utils/messages')
const { userJoin , getCurrentUser, userLeave , getRoomUsers } = require('./utils/users')

const app = express();

const server = http.createServer(app);

const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

const botName = 'Candid Bot';


// Run when  client connects
io.on('connection',socket=>{

    //console.log('New Web-Sockket Connection');
    
    socket.on('joinRoom',({username, room})=>{
         
      const user = userJoin(socket.id,username,room);

      socket.join(user.room);

    // Welcome to current user
    socket.emit('message',formatMessage(botName,'Welcome to Candid!'));  // only displays to a single client

    // Broadcast when a user connects
    socket.broadcast.to(user.room).emit('message',formatMessage(botName,`${user.username} has joined the chat`));                    // to all the client  except the one thats connecting

   // io.emit() // to all the client

   // Send users adn room info
   io.to(user.room).emit('roomUsers',{
    room: user.room,
    users: getRoomUsers(user.room)
   })
    })

   // Listen for chat message
   socket.on('chatMessage',msg=>{
      // console.log(msg);
      const user =  getCurrentUser(socket.id);

      io.to(user.room).emit('message',formatMessage(user.username,msg));
   })

     // Runs when clients disconnects
   socket.on('disconnect',()=>{

    const user = userLeave(socket.id);
    if(user)
    {
        io.to(user.room).emit('message',formatMessage(botName,`${user.username} has left the chat`));
        
        // Send users and room info
        io.to(user.room).emit('roomUsers',{
            room: user.room,
            users: getRoomUsers(user.room)
           })

    }
   });
})
const PORT = 3000 || process.env.PORT;

server.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`));