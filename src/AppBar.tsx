import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack'
import { FaGithub } from 'react-icons/fa'
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useTranslateFullContent from './customHooks/useTranslateFullContent';
import { languages } from './i18next'
const AppBar:React.FC<{onChangeLanguage:(data:string) => void}> = ({onChangeLanguage}) => {
  const { i18n } = useTranslation();
  const githubTooltip = useTranslateFullContent('githubTooltip','header')

  const githubRepoUrl = 'https://github.com/andrebnassis/safadometer';

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ( event: React.MouseEvent<HTMLElement>, value:string) => {
    onChangeLanguage(value);
    setAnchorEl(null);
  };
  return (
    <MuiAppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
          
          <Stack direction="row" sx={{alignItems:'center', justifyContent:'center'}}>
          <Box >
            <Tooltip title={githubTooltip}>
              <IconButton onClick={() => window.open(githubRepoUrl)} sx={{color:'#fff'}}>
                  <FaGithub/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
          <Typography
            variant="h6"
          >
            <Link color="inherit" target={'_blank'} underline={'none'} href={githubRepoUrl}>
            Safadometer
            </Link>
          </Typography>
          </Box>
          </Stack>
          <Box>
          <Button variant="text" color={'secondary'}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >{i18n.language.toUpperCase()}</Button>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          role: 'listbox',
        }}
      >
        {languages.map(lang => (
          <MenuItem 
          key={lang}
          selected={i18n.language === lang}
          onClick={(event) => handleClose(event, lang)}>{lang.toUpperCase()}</MenuItem>  
          ))}
      </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;