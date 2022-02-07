
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import RegisterActivity from './pages/RegisterActivity';


export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route exact path="/" component={RegisterActivity} />
            </Routes>
        </ThemeProvider>
    );

}
