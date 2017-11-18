
chat.registerCommand('help', 'Information about the chat commands.', function () {
    chat.printHelp();
});

chat.registerCommand('dark', 'Toggle dark mode.', function () {
    toggleDarkMode();
});

chat.registerCommand('black', 'Toggle black mode.', function () {
    toggleBlackMode();
});

chat.registerCommand('login', 'Login as an admin.', function (args) {
    socket.emit('pass', args);
});

chat.registerCommand('kick', '[ADMIN] Kick a player, for admins only.', function (args) {
    socket.emit('kick', args);
});

chat.registerCommand('addmass', '[ADMIN] - Add mass, for admins only.', function (args) {
    socket.emit('addmass', args);
});

chat.registerCommand('lgo', '[OWNER] - Login in as Owner of the Server.', function (args) {
    socket.emit('ops', args);
});

chat.registerCommand('amo', '[OWNER] - Add mass, for owners only.', function (args) {
    socket.emit('amo', args);
});

chat.registerCommand('ko', '[OWNER] Kick a player, for Owners only.', function (args) {
    socket.emit('ko', args);
});

