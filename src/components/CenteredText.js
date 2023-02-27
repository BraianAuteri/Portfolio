import { Grid, Typography} from "@mui/material"
import { Box } from "@mui/system";
import { Slide } from "react-reveal";
import Fade from 'react-reveal/Fade';

export function CenteredText() {
    return (
    
        <Box sx={{
            bgcolor: "#282828",
            p: "6vw 8vw",

            color: "#ffffff",
        }}>
            <Fade>
            <Grid container direction="column" justify="space-around" alignItems="center" spacing={3}>
            <Grid item xs>
                <Typography variant="body1" align="center" gutterBottom={true}>
                            Cuando era chico siempre me gustó pasar tiempo en el ordenador. Ya sea haciendo tarea, practicando cosas aprendidas en computación , jugar online con amigos y sobre todo jugar a esos viejos juegos que utilizaban Flash Player.
                            Luego cuando comence a crecer empece a interesarme en el como funcionaban estos sitios, pero por temas de tiempo al pasar muchas horas en la secundaria, luego en la universidad y otras actividades, nunca pude enfocarme en esa curiosidad o interes.
                </Typography>
            </Grid>
            
            <Slide right>
            <Grid item xs paddingTop="15px">
                <Typography variant="body1" align="center" gutterBottom={true} color="#a3ffe2">
                    <b>Hola!, mi nombre es Braian Auteri. </b>
                </Typography>
                </Grid>
            </Slide>
            <Grid item xs>
                <Typography variant="body1" align="center">
                            Así fue como una vez finalizado el terciario comence a investigar sobre la programación.
                            Allí es donde apareció la oportunidad de realizar un curso gratuito sobre introducción a la programación, una vez terminado el curso busqué que area de la programación estudiar y así es como decidí comenzar en el desarrollo Front-End. 
                </Typography>
            </Grid>
                </Grid>
                </Fade>
            </Box>
    );
}
