import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
	getNotes: () => ipcRenderer.invoke('get-notes'),
	saveNote: (note: Note) => ipcRenderer.invoke('save-note', note),
});
