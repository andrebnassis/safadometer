import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import useTranslateFullContent from './customHooks/useTranslateFullContent';



export default function Footer() {

  const inspiredBy = useTranslateFullContent('inspiredBy','footer');
  const cliVersion = useTranslateFullContent('cliVersion','footer');
  
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 1, position: 'fixed', left:0, bottom:'10px', width: '100%'}}>
      <Stack direction="row" sx={{alignItems:'center', justifyContent:'space-between'}}>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{marginLeft: '10px'}}
        >
          {`${inspiredBy}: `}<Link color="inherit" target={'_blank'} href="https://t.me/safadown_bot">Safadown</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center"   sx={{marginRight: '10px'}}>
          {`${cliVersion}: `}
          <Link color="inherit" target={'_blank'} href="https://www.npmjs.com/package/safadometer-cli">safadometer-cli</Link>
          </Typography>
      </Stack>
    </Box>
  );
}