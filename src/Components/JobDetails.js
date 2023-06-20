
import { Container, Stack, Box, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Header from './Header';

const getJobHighlights = (array, titleToMatch) => {
    return array.find(obj => obj.title === titleToMatch);
};


export default function JobDetails() {
    const location = useLocation();
    const theme = useTheme();
    const { job } = location.state;

    const qualifications = getJobHighlights(job.job_highlights, "Qualifications");
    const responsibilities = getJobHighlights(job.job_highlights, "Responsibilities");
    const benefits = getJobHighlights(job.job_highlights, "Benefits");


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
                            <img src={job.thumbnail} style={{ objectFit: "cover", width: "100%", height: "100%", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
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
                            {job.detected_extensions.posted_at && <>{job.detected_extensions.posted_at} &#x2022; </>}
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

                        <div style={{marginTop: "20px"}}>
                                <Typography variant='body1'>
                                    {job.description}
                                </Typography>
                        </div>

                        <div>
                            {console.log(qualifications)}
                        </div>

                        <div>
                            {console.log(responsibilities)}
                        </div>

                    </div>
                </Stack>
            </Container>



        </>
    );
}
