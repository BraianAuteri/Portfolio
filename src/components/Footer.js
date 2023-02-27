import { Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Fade from 'react-reveal/Fade';

export function Footer() {
    return (
        <Box sx={{
            p: "2vw 8vw",
            bgcolor:"#111111",
        }}>
            <Fade>
        <Grid container direction="row" justify="space-around">
            <Grid item xs="6">
                <Typography variant="h4" align="center" gutterBottom={true} color="#a3ffe2">
                    Front-End
                </Typography>
                <Typography variant="h4" align="center" gutterBottom={true} color="#a3ffe2">
                    Developer
                </Typography>
                </Grid>
            <Grid item xs="6">
                <Grid container direction="column" justify="space-around" align="center">
                    <Grid item xs="auto">
                        <Typography variant="h5" align="center" gutterBottom={true} color="#a3ffe2">
                            Contacto
                        </Typography>
                    </Grid>
                    <Grid item xs="auto">
                        <Typography variant="body1" align="center" gutterBottom={true} color="#ffffff" >
                                <b>LinkedIn:</b>
                                <Button size="small">
                                    <Link href="https://www.linkedin.com/in/braian-auteri/" target="_blank" rel="noreferrer" textTransform="none">
                                        www.linkedin.com/in/braian-auteri
                                    </Link>
                                </Button>
                        </Typography>
                    </Grid>
                    <Grid item xs="auto">
                        <Typography variant="body1" align="center" color="#ffffff">
                                <b>Email:</b> 
                                <Button size="small">
                                    <Link href="mailto:braianauteri@gmail.com" target="_blank" rel="noreferrer" textTransform="none">
                                        braianauteri@gmail.com
                                    </Link>
                                </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
                </Grid>
                </Fade>
    </Box>
);
}
