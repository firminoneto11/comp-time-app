
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import RegisterActivity from './pages/RegisterActivity';
import { IpcRendererProvider } from './context/IpcRendererContext';


export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <IpcRendererProvider>
                <Routes>
                    <Route exact path="/" component={RegisterActivity} />
                </Routes>
            </IpcRendererProvider>
        </ThemeProvider>
    );

}
