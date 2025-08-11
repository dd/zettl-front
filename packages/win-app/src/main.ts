import { app, BrowserWindow } from 'electron';
import path from 'path';
// import { createRequire } from 'module';
// const htmlPath = await import.meta.resolve('@zettl/editor/dist/index.html');
// const require = createRequire(import.meta.url);
// const htmlPath = require.resolve('@zettl/editor/dist/index.html');


function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	console.log(process.env.NODE_ENV)
	if (process.env.NODE_ENV === 'development') {
		win.loadURL('http://localhost:5173');
	} else {
		win.loadFile(require.resolve('@zettl/editor/dist/index.html'));
	}
}

app.whenReady().then(createWindow);
