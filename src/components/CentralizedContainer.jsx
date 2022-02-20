
// React Imports
import { Fragment } from 'react';

// MUI Imports
import {
    CssBaseline, Box, Container
} from '@mui/material'


export default function CentralizedContainer({ children }) {

    return (
        <Fragment>
            <CssBaseline />
            <Container fixed sx={{ width: "100%", mt: "1rem" }}>
                <Box>
                    {children}
                </Box>
            </Container>
        </Fragment>
    );
};
