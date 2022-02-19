import { createContext } from "react";

const electron = window.require('electron');

export const ElectronAPIContext = createContext({
    ipcRenderer: electron.ipcRenderer
});


export function ElectronAPIProvider({ children }) {

    const contextData = {
        ipcRenderer: electron.ipcRenderer
    }

    return (
        <ElectronAPIContext.Provider value={contextData}>
            {children}
        </ElectronAPIContext.Provider>
    );
}
