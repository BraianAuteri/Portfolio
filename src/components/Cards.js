import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import img from "../img/arkcomp.jpg"
import img2 from "../img/cakemom.jpg"
import { Slide } from "react-awesome-reveal";

export function Cards() {
return (
    <Box sx={{
        bgcolor: "#1c1c1c",
        p: "2vw 6vw",
    }}>
        <Grid align="center" sx={{
            color:"#a3ffe2"
        }}>
            <Typography variant="h4" gutterBottom={true} p="20px">
                PROYECTOS
            </Typography>
            <Typography variant="body1" align="center" gutterBottom={true} paddingBottom="20px">
                Algunos de los sitios y proyectos que realicé con los conocimientos obtenidos tanto durante la carrera de Front-End estudiada, como con conocimientos adquiridos por otros medios.
            </Typography>
        </Grid>
        <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        item xs
        alignItems="center"
        rowGap={{xs:2}}
        >
            {/* Primera card */}
            <Slide direction="left" triggerOnce={true}>
            <Card sx={{
                maxWidth: 345,
                bgcolor: "#282828",
                }}>
        <CardMedia
                        component="img"
                        alt="proyecto desarrollo web"
                        height="200"
                        image={img}
        />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#a3ffe2">
                Ark Computación
            </Typography>
            <Typography variant="body1" color="#ffffff">
                Sitio ecommerse creado para el curso de ReactJs, utilizando Firebase para almacenar los datos de los productos en la nube. 
                </Typography>
                </CardContent>
        
        <CardActions>
                        <Button size="medium" variant="text">
                            <Link href="https://arkcomputacion.netlify.app/" target="_blank" rel="noreferrer">
                                VISITAR
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Slide>
            {/* Segunda card */}
            <Slide direction="right" triggerOnce={true}>
            <Card sx={{
                maxWidth: 345,
                bgcolor: "#282828"}}>
            <CardMedia
            component="img"
            alt="proyecto desarrollo web"
            height="200"
            image={img2}
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#a3ffe2">
                Cake Mom
            </Typography>
            <Typography variant="body1" color="#ffffff">
                Este fue mi primer sitio, el cual fue creado como proyecto final del curso de Desarrollo Web. Utilizando HTML5, SASS y Bootstap.
            </Typography>
        </CardContent>
        <CardActions>
                        <Button size="medium" variant="text">
                            <Link href="https://pasteleriacakemom.netlify.app/index.html" target="_blank" rel="noreferrer">
                            VISITAR
                            </Link>
                        </Button>
                    </CardActions>
            </Card>
            </Slide>
        </Grid>
    </Box>
);}
