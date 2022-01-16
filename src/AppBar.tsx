import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const AppBar:React.FC = () => {

  return (
    <MuiAppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" color={"black"}>
          <Typography
            variant="h6"
          >
            Safadometer
          </Typography>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;