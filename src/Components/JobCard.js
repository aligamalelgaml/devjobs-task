import { Card, Typography, Avatar, CardHeader, CardContent } from '@mui/material'
import { useTheme } from '@mui/material/styles'; // Updated import statement


export default function JobCard({ job }) {
    const theme = useTheme();

    return (
        <>
            <Card elevation={0} style={{
                height: '100%', display: 'flex', flexDirection: 'column', marginTop: "30px", border: 'none', backgroundColor: theme.palette.background.paper, position: "relative",
                overflow: "visible",
                "& .MuiCardHeaderAvatar": {
                    position: "absolute",
                    zIndex: 1,
                },
            }}>
                <CardHeader avatar={
                    <Avatar src={job.thumbnail ? job.thumbnail : ""} sx={{ marginTop: "-33px", borderRadius: '8px' }} >
                        {job.company_name.slice(0, 2)}
                    </Avatar>
                }>
                </CardHeader>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div sx={{marginTop: "20px"}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {job.detected_extensions.posted_at && <>{job.detected_extensions.posted_at} &#x2022; </>}
                            {job.detected_extensions.schedule_type}
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            {job.title}
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {job.company_name}
                        </Typography>
                    </div>

                    <Typography variant="body2" color="primary" sx={{fontWeight:"700"}}>
                        {job.location}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )

}