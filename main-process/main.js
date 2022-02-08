
const { app } = require('electron');
const createRootWindow = require("./src/rootWindow");
const { bindChannels } = require('./src/channels/channels');

app.setName("Comp Time App");

app.on("ready", () => {
    createRootWindow();
    bindChannels();
});
