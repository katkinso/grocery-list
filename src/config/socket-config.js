
module.exports = {

    start: function(io) {

        io.on('connection', socket => {
            // fired when client connects 
            console.log('New client connected')

            socket.on('update groceries', (grocery) => {
              socket.broadcast.emit('update groceries', grocery)
            })
            
            // fired when client leaves 
            socket.on('disconnect', () => {
              console.log('user disconnected')
            })
          })
    }
  
};