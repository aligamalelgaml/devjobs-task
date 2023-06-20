import { useForm, Controller } from 'react-hook-form';

import {
    Stack,
    Divider,
    Container,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Filter({ searchCB }) {
    const defaultValues = { genericSearchText: "", locationSearchText: "", fulltimeOnly: false }

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        searchCB(data)
        reset(defaultValues);
    };

    return (
        <>
            <Container>
                <Paper sx={{ marginTop: "-20px" }} elevation={3}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            direction="row"
                            gap={3}
                            divider={<Divider orientation="vertical" flexItem />}
                            alignItems="center"
                            justifyContent="center"
                            padding="20px"
                        >
                            <TextField
                                id="genericSearch"
                                variant="standard"
                                size="small"
                                required
                                {...register('genericSearchText', { required: true })}
                                sx={{
                                    "& input": {
                                        padding: "0 !important",
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <SearchIcon color="primary" />,
                                    disableUnderline: true,
                                }}
                            />

                            <TextField
                                id="locationSearch"
                                variant="standard"
                                size="small"
                                {...register('locationSearchText')}
                                sx={{
                                    "& input": {
                                        padding: "0 !important",
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <LocationOnIcon color="primary" />,
                                    disableUnderline: true,
                                }}
                            />

                            <Controller
                                name='fulltimeOnly'
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Checkbox
                                            checked={field.value}
                                            onChange={(e) => {
                                                field.onChange(e.target.checked); // Update field value
                                            }}
                                        />}
                                        label='Full Time Only'
                                    />
                                )}
                            />

                            <Button variant="contained" type="submit">Search</Button>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </>
    );
}
