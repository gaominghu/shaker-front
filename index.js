var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);
console.log('listening on http://0.0.0.0:1337');

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  socket.on('vote', function (clientTeam) {
    console.log(clientTeam);
    socket.broadcast.emit('client-vote', clientTeam);
  });
});