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
	"main": "main.js",

	"homepage": "./",

	"scripts": {
		"electron:start": "wait-on tcp:3000 && nodemon --exec electron .",
		"dev": "concurrently -k \"cross-env BROWSER=none yarn start\" \"yarn electron:start",
		"electron:build": "yarn build && electron-builder -c.extraMetadata.main=build/main.js"
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

### In order to build the app for distribution, follow these steps:

1 - Install these dependencies

```bash
yarn add electron-builder electron-is-dev
```

2 - In the main process, in the function that creates the root window

```javascript
const path = require("path");
const isDev = require("electron-is-dev");

function createRootWindow() {
	// Creating the main window
	const root = new BrowserWindow();

	// Loading the react app
	root.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
}
```

3 - Insert these into package.json

```json
{
	"build": {
		"extends": null,
		"appId": "com.example.electron-cra",
		"files": ["dist/**/*", "build/**/*", "node_modules/**/*", "package.json"],
		"directories": {
			"buildResources": "assets"
		}
	}
}
```
