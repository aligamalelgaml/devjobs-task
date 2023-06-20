import { Grid, Paper, Typography, useTheme } from '@mui/material'
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './JobPage';


export default function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);



    return (
        <>
            <Paper sx={{ backgroundColor: theme.palette.primary.main, padding: "60px", borderRadius: "0px 0px 0px 100px" }} elevation={3}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs>
                        <Typography sx={{ color: "white", marginLeft: "50px", fontWeight: "800" }} variant="h4">devjobs</Typography>
                    </Grid>

                    <Grid item xs>
                        <Box display="flex" justifyContent="flex-end" alignItems="center" marginRight="50px" color="white">
                            {theme.palette.mode} mode
                            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

        </>
    )

}