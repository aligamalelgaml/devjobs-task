
import { Container, Stack, Box, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Header from './Header';

/**
 * Helper function that grabs the correct json object from an array with {titleToMatch} title. This is due to the structure of the API JSON response.
 */
const getJobHighlights = (array, titleToMatch) => {
    return array.find(obj => obj.title === titleToMatch);
};


export default function JobDetails() {
    const theme = useTheme();
    const location = useLocation(); // Get current job object from state passed via react link.
    const { job } = location.state; 

    const qualifications = getJobHighlights(job.job_highlights, "Qualifications"); 
    const responsibilities = getJobHighlights(job.job_highlights, "Responsibilities");

    return (
        <>
            <Header />

            <Container>
                <Stack direction={"row"} sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                    marginTop: "-15px",
                    width: "40vw",
                    marginX: "auto",
                    display: "flex",
                    justifyContent: "space-between"
                }}>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>

                        <div style={{ width: "100px", borderRadius: 2 }}>
                            <img src={job.thumbnail} alt="company logo" style={{ objectFit: "cover", width: "100%", height: "100%", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                            </img>
                        </div>

                        <div style={{ marginLeft: "30px", alignSelf: "center" }}>
                            <Stack>
                                <Typography variant="h5" sx={{ fontWeight: "700" }} gutterBottom>
                                    {job.company_name}
                                </Typography>

                                <Typography variant="body1" color="text.secondary">
                                    LINK PLACEHOLDER
                                </Typography>
                            </Stack>
                        </div>

                    </Box>


                    <div style={{ marginRight: "30px", alignSelf: "center" }}>
                        <Button variant='contained' sx={{ color: "primary.btn", backgroundColor: "secondary.main", fontWeight: "550", textTransform: 'capitalize', '&:hover': { backgroundColor: theme.palette.primary.hover } }}>
                            Company Website
                        </Button>
                    </div>
                </Stack>
            </Container>

            <Container>
                <Stack sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                    marginTop: "20px",
                    width: "40vw",
                    marginX: "auto",
                    padding: "20px"
                }}>
                    <div>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {(job.detected_extensions.posted_at && job.detected_extensions.schedule_type) && <>{job.detected_extensions.posted_at} &#x2022; </>}
                            {job.detected_extensions.schedule_type}
                        </Typography>
                    </div>

                    <div>
                        <Stack direction={"row"} sx={{ display: "flex", justifyContent: "space-between" }}>

                            <div>
                                <Typography variant="h5" sx={{ fontWeight: "650" }}>
                                    {job.title}
                                </Typography>

                                <Typography variant="body2" color="primary" sx={{ fontWeight: "700" }}>
                                    {job.location}
                                </Typography>
                            </div>

                            <div>
                                <Button variant="contained" sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }}>Apply Now</Button>
                            </div>
                        </Stack>

                        <div style={{ marginTop: "20px" }}>
                            <Typography variant='body1'>
                                {job.description}
                            </Typography>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <Typography variant='h6' fontWeight={"600"} gutterBottom>
                                Requirements
                            </Typography>

                            {qualifications.items.map((item, index) => <li key={index}>{item}</li>)}
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <Typography variant='h6' fontWeight={"600"} gutterBottom>
                                Responsibilities
                            </Typography>
                            {responsibilities.items.map((item, index) => <li key={index}>{item}</li>)}
                        </div>
                    </div>
                </Stack>
            </Container>


            <Stack sx={{
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
                marginTop: "20px",
                width: "100vw",
                padding: "20px"
            }}>

                <Container sx={{ width: "42vw" }}>
                    <Stack direction={"row"} sx={{justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <Typography variant="h6" sx={{ fontWeight: "650" }}>
                                {job.title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "700" }}>
                                {job.company_name}
                            </Typography>
                        </div>

                        <div>
                            <Button variant="contained" sx={{ marginRight:"5px", '&:hover': { backgroundColor: theme.palette.primary.hover } }}>Apply Now</Button>
                        </div>
                    </Stack>
                </Container>
            </Stack>
        </>
    );
}
