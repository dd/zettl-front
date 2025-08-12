import { contextBridge, ipcRenderer } from 'electron';
import { type Note } from '@zettl/core/types';


contextBridge.exposeInMainWorld('api', {
	getNotes: () => ipcRenderer.invoke('get-notes'),
	saveNote: (note: Note) => ipcRenderer.invoke('save-note', note),
});
