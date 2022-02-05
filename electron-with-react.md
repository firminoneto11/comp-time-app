# How to set up a project with electron and react

1 - Create a react app

```bash
yarn create react-app myApp
```

2 - Install these dependencies

```bash
yarn add electron concurrently wait-on cross-env

yarn add nodemon -D
```

3 - Insert these scripts into package.json

```json
{
	// Main electron entrypoint
	"main": "main.js",

	// Homepage
	"homepage": "./",

	// Scripts for running the app
	"scripts": {
		"electron:start": "wait-on tcp:3000 && nodemon --exec electron .",
		"dev": "concurrently -k \"cross-env BROWSER=none yarn start\" \"yarn electron:start",
		"electron:build": ""
	}
}
```

4 - In the function that creates the main window, load the url from the default react port/url

```javascript
function createRootWindow() {
	// Creating the main window
	const root = new BrowserWindow();

	// Loading the react app
	root.loadURL("http://localhost:3000");
}
```

Now that you are all set, you might wanna use the ipcRenderer module to stablish communication between the main process and the renderer processes. To do so, you've got to enable nodeIntegration and require that module in the react components this way:

```javascript
// In the main process:
const root = new BrowserWindow({
	webPreferences: {
		contextIsolation: false,
		nodeIntegration: true, // Enable nodeIntegration
	},
});

// In the react components:
const { ipcRenderer } = window.require("electron");
```
