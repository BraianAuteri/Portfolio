import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Slide } from 'react-awesome-reveal';
// import { Slide } from '@mui/material';


export function NavBar() {
    return (
    <div className="NavBar">
        <Box sx={{
          flexGrow: 1,
        }}>
          
          <AppBar position='relative' sx={{ bgcolor: "#111111", }}>
            {/* <Slide direction="right" in={VisualViewport} timeout={1000}> */}
            <Slide right triggerOnce={true}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} padding="20px" color="#a3ffe2">
            Braian Auteri
              </Typography></Slide>
          {/* </Slide> */}
            </AppBar>
            
      </Box>
    </div>  
  );};
