
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import RegisterActivity from './pages/RegisterActivity';
import ListActivities from './pages/ListActivities';
import RedeemHours from './pages/RedeemHours';
import { ElectronAPIProvider } from './context/ElectronAPIContext';

// Provider for date management
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


export default function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>
                <ElectronAPIProvider>
                    <Routes>
                        <Route exact path="/" component={RegisterActivity} />
                        <Route exact path="/list-activities" component={ListActivities} />
                        <Route exact path="/redeem" component={RedeemHours} />
                    </Routes>
                </ElectronAPIProvider>
            </ThemeProvider>
        </LocalizationProvider>
    );

}
