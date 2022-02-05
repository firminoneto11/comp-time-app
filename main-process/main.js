
const { app } = require('electron');
const createRootWindow = require("./src/rootWindow");

app.setName("Comp Time App");

app.on("ready", createRootWindow);
