import { Grid, Paper, Typography, Switch, Box, useTheme } from '@mui/material'
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './JobPage';
import backgroundImage from '../Assets/triangles.svg';

export default function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <>
            <Paper sx={{
                backgroundColor: theme.palette.primary.main, padding: "60px", borderRadius: "0px 0px 0px 100px", backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} elevation={3}>
                <Grid
                    container
                    direction={"row"}
                    justifyContent="space-between"
                    alignItems="center"
                    padding= "20px"
                >
                    <Grid item xs>
                        <Typography sx={{ color: "white", fontWeight: "800" }} variant="h4">devjobs</Typography>
                    </Grid>

                    <Grid item xs>
                        <Box display="flex" justifyContent="flex-end" alignItems="center" color="white">
                            <Brightness7Icon />
                            <Switch
                                checked={theme.palette.mode === 'dark'}
                                onChange={colorMode.toggleColorMode}
                                sx={{marginLeft: '8px', marginRight: '8px'}}
                            />
                            <Brightness4Icon />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}