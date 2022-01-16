import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';



export default function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 1, position: 'fixed', left:0, bottom:'10px', width: '100%'}}>
      <Stack direction="row" sx={{alignItems:'center', justifyContent:'space-between'}}>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{marginLeft: '10px'}}
        >
          Inspired by telegram's project:{'  '}<Link color="inherit" href="https://t.me/safadown_bot?do=open_link">Safadown</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center"   sx={{marginRight: '10px'}}>
          CLI version:{'  '}
          <Link color="inherit" href="https://www.npmjs.com/package/safadometer-cli">safadometer-cli</Link>
          </Typography>
      </Stack>
    </Box>
  );
}