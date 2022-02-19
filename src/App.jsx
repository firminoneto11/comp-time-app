
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import RegisterActivity from './pages/RegisterActivity';
import ListActivities from './pages/ListActivities';
import RedeemHours from './pages/RedeemHours';
import { ElectronAPIProvider } from './context/ElectronAPIContext';


export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <ElectronAPIProvider>
                <Routes>
                    <Route exact path="/" component={ListActivities} />
                    <Route exact path="/new-activity" component={RegisterActivity} />
                    <Route exact path="/redeem" component={RedeemHours} />
                </Routes>
            </ElectronAPIProvider>
        </ThemeProvider>
    );

}
