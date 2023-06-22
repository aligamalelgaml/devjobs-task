import { useForm, Controller } from 'react-hook-form';
import { Stack, Divider, Container, Paper, TextField, FormControlLabel, Checkbox, Button, useMediaQuery, Modal, Typography, Box } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from '@mui/material/styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};

export default function Filter({ searchCB }) {
    const theme = useTheme();
    const defaultValues = { genericSearchText: "", locationSearchText: "", fulltimeChecked: false };
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const [open, setOpen] = React.useState(false);
    const handleOpenFilterModal = () => setOpen(true);
    const handleCloseFilterModal = () => setOpen(false);

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
            {isMediumScreen &&
                <Container>
                    <Paper sx={{ marginTop: "-20px", borderRadius: theme.shape.borderRadius }} elevation={3}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack
                                direction={"row"}
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
                                                sx={{ '&:hover': { color: theme.palette.primary.hover } }}
                                            />}
                                            label='Full-Time Only'
                                            sx={{
                                                whiteSpace: 'nowrap', // Prevents label wrapping
                                            }}
                                        />
                                    )}
                                />

                                <Button variant="contained" type="submit" sx={{ padding: "10px 30px 10px 30px", '&:hover': { backgroundColor: theme.palette.primary.main } }}>Search</Button>
                            </Stack>
                        </form>
                    </Paper>
                </Container>
            }

            {isSmallScreen &&
                <>
                    <Container>
                        <Paper sx={{ marginTop: "-20px", borderRadius: theme.shape.borderRadius }} elevation={3}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack direction={"row"}
                                    gap={3}
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
                                        placeholder='Filter by title..'
                                        required
                                        {...register('genericSearchText', { required: true })}
                                        sx={{
                                            "& input": {
                                                width: "100%",
                                                padding: "0 !important",
                                            },
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />

                                    <Button onClick={handleOpenFilterModal}>
                                        <FilterAltIcon sx={{ marginRight: '8px', color: "grey" }} />
                                    </Button>

                                    <Modal
                                        open={open}
                                        onClose={handleCloseFilterModal}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Stack gap={1} divider={<Divider orientation="horizontal" flexItem />}>

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
                                                                sx={{ '&:hover': { color: theme.palette.primary.hover } }}
                                                            />}
                                                            label='Full-Time Only'
                                                            sx={{
                                                                whiteSpace: 'nowrap', // Prevents label wrapping
                                                            }}
                                                        />
                                                    )}
                                                />

                                                <Button sx={{marginTop: "10px"}} fullWidth onClick={(e) => { handleSubmit(onSubmit)(e); handleCloseFilterModal(); }} variant='contained'>
                                                    Search
                                                </Button>
                                            </Stack>
                                        </Box>
                                    </Modal>

                                    <Button type="submit" variant='contained'>
                                        <SearchIcon />
                                    </Button>
                                </Stack>
                            </form>
                        </Paper>
                    </Container>




                </>
            }
        </>
    );
}
