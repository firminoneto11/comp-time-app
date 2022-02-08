import { createContext } from "react";

const electron = window.require('electron');

export const IpcRendererContext = createContext({
    ipcRenderer: electron.ipcRenderer
});


export function IpcRendererProvider({ children }) {

    const contextData = {
        ipcRenderer: electron.ipcRenderer
    }

    return (
        <IpcRendererContext.Provider value={contextData}>
            {children}
        </IpcRendererContext.Provider>
    );
}
