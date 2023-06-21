import { useForm, Controller } from 'react-hook-form';
import { Stack, Divider, Container, Paper, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from '@mui/material/styles';

export default function Filter({ searchCB }) {
    const theme = useTheme();
    const defaultValues = { genericSearchText: "", locationSearchText: "", fulltimeChecked: false }

    const {
        control,
        register,
        handleSubmit,
        reset,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        searchCB(data)
        reset(defaultValues);
    };

    return (
        <>
            <Container>
                <Paper sx={{ marginTop: "-20px", borderRadius: theme.shape.borderRadius }} elevation={3}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            gap={3}
                            divider={<Divider orientation="vertical" flexItem />}
                            alignItems="center"
                            justifyContent="space-evenly"
                            padding="20px"
                            sx={{
                                borderRadius: theme.shape.borderRadius,
                                backgroundColor: theme.palette.background.paper,
                            }}>

                            <TextField fullWidth
                                id="genericSearch"
                                variant="standard"
                                size="small"
                                placeholder='Filter by title, companies, expertise..'
                                required
                                {...register('genericSearchText', { required: true })}
                                sx={{
                                    "& input": {
                                        width: "100%",
                                        padding: "0 !important",
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <SearchIcon color="primary" sx={{ marginRight: '8px' }} />,
                                    disableUnderline: true,
                                }}
                            />

                            <TextField fullWidth
                                id="locationSearch"
                                variant="standard"
                                size="small"
                                placeholder='Filter by location..'
                                {...register('locationSearchText')}
                                sx={{
                                    "& input": {
                                        width: "100%",
                                        padding: "0 !important",
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <LocationOnIcon color="primary" sx={{ marginRight: '8px' }} />,
                                    disableUnderline: true,
                                }}
                            />

                            <Controller
                                name='fulltimeChecked'
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Checkbox
                                            checked={field.value}
                                            onChange={(e) => {
                                                field.onChange(e.target.checked); // Update field value
                                            }}
                                            sx={{'&:hover': { color: theme.palette.primary.hover }}}
                                        />}
                                        label='Full-Time Only'
                                        sx={{
                                            whiteSpace: 'nowrap', // Prevents label wrapping
                                        }}
                                    />
                                )}
                            />

                            <Button variant="contained" type="submit" sx={{ padding: "10px 30px 10px 30px",  '&:hover': { backgroundColor: theme.palette.primary.main } }}>Search</Button>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </>
    );
}
