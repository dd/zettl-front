import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
	ping: () => ipcRenderer.invoke('ping'),
	sendNote: (note: string) => ipcRenderer.send('save-note', note),
});
