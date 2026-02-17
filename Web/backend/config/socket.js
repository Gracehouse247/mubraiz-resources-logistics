const { Server } = require('socket.io');
const Message = require('../models/Message');

let io;

const init = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*", // In production, restrict this to your frontend URL
            methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        console.log(`📡 New Grid Node Connected: ${socket.id}`);

        // Chat Support Logic
        socket.on('join_support', (userId) => {
            socket.join(`support_${userId}`);
            socket.join('all_admins');
            console.log(`💬 User ${userId} joined support grid.`);
        });

        socket.on('send_message', async (data) => {
            try {
                // Persist to DB
                const msg = await Message.create({
                    senderId: data.senderId,
                    senderName: data.senderName,
                    recipientId: data.recipientId,
                    content: data.content,
                    type: data.type || 'text'
                });

                // Broadcast to recipient
                if (data.recipientId === 'admin_room') {
                    io.to('all_admins').emit('new_message', msg);
                } else {
                    io.to(`support_${data.recipientId}`).emit('new_message', msg);
                }
            } catch (err) {
                console.error('Chat Persistence Error:', err);
            }
        });

        socket.on('disconnect', () => {
            console.log(`🔻 Node Disconnected: ${socket.id}`);
        });
    });

    return io;
};

const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized!");
    }
    return io;
};

module.exports = { init, getIO };
