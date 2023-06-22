
import { Container, Stack, Box, Typography, Button, useMediaQuery, Avatar } from '@mui/material';
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

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const containerWidth = isSmallScreen ? '90%' : '80%';

    const qualifications = getJobHighlights(job.job_highlights, "Qualifications");
    const responsibilities = getJobHighlights(job.job_highlights, "Responsibilities");

    return (
        <>
            <Header />

            {isMediumScreen &&
                <Container>
                    <Stack gap={3} direction={"row"} sx={{
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                        marginTop: "-15px",
                        width: containerWidth,
                        marginX: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>

                        <Box sx={{ display: "flex", flexDirection: "row" }}>

                            <div style={{ width: "100px", borderRadius: 2 }}>
                                <img src={job.thumbnail || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABnFJREFUeF7tnFtIlV0QhmcjRal1ESGCSpRkJ9SEEKkIyVN46E5IsqjURCvFStQkvBApLe1kByERS1Cx6CTdeJFgkRcpmkEXakQHRCjECCst/HkHPtn5u62Rf8H6YRbsC/f+Zr5Z77PemXWlKzU1dZp0WaOAS4FYw4ILUSB28VAglvFQIArENgUsq0dniAKxTAHLylGHKBDLFLCsHHWIArFMAcvKUYcoEMsUsKwcdYgCsUwBy8pRhygQyxSwrBx1iAKxTAHLylGHKBDLFLCsHHWIArFMAcvKUYcoEMsUsKwcdYgCsUwBy8pRhygQyxSwrBx1iAKxTAHLylGHKBDLFLCsHHWIArFMAcvKUYcoEMsUsKwcdYgCsUwBy8pRhygQyxSwrBx1iAKxTAHLylGH/N+BREVF0fHjx3kb09PT9PnzZ2pra6MnT55QdXU1DQ4O0o0bN+bcZl5eHm3fvp2uXLlCXV1dM88EBwfTgQMHaM2aNTQxMUFPnz6lpqYm8vb2pvr6+n/lqqmpoU2bNtHmzZvp2LFj/Lu/vz9dvnyZKisrqaenhwICAujQoUO0fv16mpycpBcvXlBDQwPnz8jI+C3WeYH73qampujt27fU3NxMr169omXLls1bS0JCwkydY2Nj9PjxY3rw4IEYt9ghTtEXLlygr1+/0o4dO1hkiF1cXOwRiJeXF928eZMWL17MgkFUrCVLllBtbS2DxQaWL19OaWlp1NHRwX8DyL179+jly5czm3v//j2lpqZ6BIJnL126RN+/f6e7d++ymHv27KGBgQE+NH8Cgr39+vWL4uPjaePGjVRQUMAg56slMjKSDwTWli1bKCkpiU6dOkVDQ0MiKAsGkpOTwyLiJGIDZ8+epb1793oEEh4eTqWlpSwyThNEwSncuXMnZWdnM9DR0VEuPjQ0lH7+/EkfPnxgEWY7Cs8gPiIigoqKijjGz8+P3YGPr68vHTlyhIX8+PEj/x4XF0dZWVnsqOTk5Hkd4uxt0aJFdO3aNXr+/Dl3gflqcXerj48Pu/H69evcOSRrwUCwYVgzMTGR0tPTefNoZZ5aVmZmJm3YsIHOnDnDmwTA3t5ehhgdHc1izV5Om7h69Sq3MWfh9AKIe5twfgOQdevWMWi801mBgYHsSrwXIN0FnN2yHCD4HsDh6osXLzIQT7UgH/bvcrlo69atlJubS2VlZfT69WsJD/k/n3Hvs3gT5kh7ezvdvn3b4wxBkZgrnZ2d3JOrqqpoeHiY6urquD3FxMT8Jp6zA099GxD3799P7m1ixYoVfPoBJCQkhGJjYxmas4KCgri+c+fOUVhY2F8DKSkpYSCAOdc8c2pxPxzQBDOksbFRBAMPL9ghOOnj4+PsEnywPA31tWvXUkVFxW/FIfbw4cM8g+C2/Px8GhkZ4We2bdvGImAQQ4TW1lbq6+ubiX/z5g0PbE9DHZcBwDlx4gRh3mBhHsAxR48epZSUlL8CghrQdnABwSyarxbMDUBbtWoV76u8vJxnlnQtGIi7rZ2XAsinT5/o4cOHM3W8e/eOdu/ezS0ERWJh7gDA6dOnCeJiGOKCcP/+fUL/xamDm+7cuTPnIMU7Zs8B91tWf38/D3XcrpADMwVOxG3p/Pnz7Bx3d6Em5Fy9ejW3HcxExO7atYtvc4WFhfTly5e/rgWzcuXKlXTy5Em+HEjWfw4ErcF9oYXs27ePeylaFNvS5eJejGGJVoeYgwcPcu//9u0bPXv2jL9funTpnG0CFwPczv507UVOzC3ctrq7u+nWrVv048ePOefPo0ePeP45V3oIicOE6zdOuqf2OVctmFdojS0tLeKrrxiIhLY+K1dAgcg1MxqhQIzKK0+uQOSaGY1QIEbllSdXIHLNjEYoEKPyypMrELlmRiMUiFF55ckViFwzoxEKxKi88uQKRK6Z0QgFYlReeXIFItfMaIQCMSqvPLkCkWtmNEKBGJVXnlyByDUzGqFAjMorT65A5JoZjVAgRuWVJ1cgcs2MRigQo/LKkysQuWZGIxSIUXnlyRWIXDOjEQrEqLzy5ApErpnRCAViVF55cgUi18xohAIxKq88uQKRa2Y0QoEYlVeeXIHINTMaoUCMyitPrkDkmhmNUCBG5ZUnVyByzYxGKBCj8sqTKxC5ZkYjFIhReeXJFYhcM6MRCsSovPLkCkSumdEIBWJUXnlyBSLXzGiEAjEqrzz5P0AodsqLV8etAAAAAElFTkSuQmCC"} alt="company logo" style={{ objectFit: "cover", width: "100%", height: "100%", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                </img>
                            </div>

                            <div style={{ marginLeft: "30px", alignSelf: "center" }}>
                                <Stack>
                                    <Typography variant="h5" sx={{ fontWeight: "700" }} gutterBottom>
                                        {job.company_name}
                                    </Typography>

                                    <Typography variant="body1" color="text.secondary">
                                        {job.related_links[0]?.text}
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
            }

            {isSmallScreen && (
                <Container>
                    <Stack
                        gap={3}
                        sx={{
                            borderRadius: 2,
                            backgroundColor: theme.palette.background.paper,
                            marginTop: "-15px",
                            width: containerWidth,
                            marginX: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center", // Center vertically
                            alignItems: "center"
                        }}
                    >
                        <Avatar
                            src={job.thumbnail || "data:image/png;base64,..."}
                            alt="company logo"
                            style={{ borderRadius: 0, marginTop: "-20px" }} // Adjust the marginTop to half the avatar height
                        />

                        <div>
                            <Stack>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography variant="h5" sx={{ fontWeight: "700" }} gutterBottom>
                                        {job.company_name}
                                    </Typography>
                                </Box>

                                <Typography variant="body1" color="text.secondary">
                                    {job.related_links[0]?.text}
                                </Typography>
                            </Stack>
                        </div>

                        <div>
                            <Button
                                variant="contained"
                                sx={{
                                    marginBottom: "20px",
                                    color: "primary.btn",
                                    backgroundColor: "secondary.main",
                                    fontWeight: "550",
                                    textTransform: "capitalize",
                                    "&:hover": { backgroundColor: theme.palette.primary.hover }
                                }}
                            >
                                Company Website
                            </Button>
                        </div>
                    </Stack>
                </Container>
            )}



            <Container>
                <Stack sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                    marginTop: "20px",
                    width: containerWidth,
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
                        <Stack gap={3} direction={{ xs: 'column', md: 'row' }} sx={{ display: "flex", justifyContent: "space-between" }}>

                            <div>
                                <Typography variant="h5" sx={{ fontWeight: "650" }}>
                                    {job.title}
                                </Typography>

                                <Typography variant="body2" color="primary" sx={{ fontWeight: "700" }}>
                                    {job.location}
                                </Typography>
                            </div>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button variant="contained" sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }}>Apply Now</Button>
                            </div>
                        </Stack>

                        <div style={{ marginTop: "20px" }}>
                            <Typography variant='body1'>
                                {job.description}
                            </Typography>
                        </div>

                        {qualifications &&
                            <div style={{ marginTop: "20px" }}>
                                <Typography variant='h6' fontWeight={"600"} gutterBottom>
                                    Requirements
                                </Typography>

                                {qualifications.items.map((item, index) => <li key={index}>{item}</li>)}
                            </div>
                        }

                        {responsibilities && (
                            <div style={{ marginTop: "20px" }}>
                                <Typography variant='h6' fontWeight={"600"} gutterBottom>
                                    Responsibilities
                                </Typography>
                                {responsibilities.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </div>
                        )}

                    </div>
                </Stack>
            </Container>


            <Stack sx={{
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
                marginTop: "20px",
                width: "100vw",
                padding: "20px",
                bottom: 0
            }}>

                <Container sx={{ width: containerWidth }}>
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <Typography variant="h6" sx={{ fontWeight: "650" }}>
                                {job.title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "700" }}>
                                {job.company_name}
                            </Typography>
                        </div>

                        <div>
                            <Button variant="contained" sx={{ marginRight: "5px", '&:hover': { backgroundColor: theme.palette.primary.hover } }}>Apply Now</Button>
                        </div>
                    </Stack>
                </Container>
            </Stack>
        </>
    );
}
