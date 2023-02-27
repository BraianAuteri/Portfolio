import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slide from 'react-reveal/Slide';


export function NavBar() {
    return (
    <div className="NavBar">
        <Box sx={{
          flexGrow: 1,
        }}>
          
          <AppBar position='relative' sx={{ bgcolor: "#111111", }}>
            <Slide left>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} padding="20px" color="#a3ffe2">
            Braian Auteri
              </Typography>
          </Slide>
            </AppBar>
            
      </Box>
    </div>  
  );};
