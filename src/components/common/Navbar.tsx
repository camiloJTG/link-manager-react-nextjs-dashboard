import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CloseIcon from '@mui/icons-material/Close';

import Styles from '@/components/common/common.module.css';
import LinkForm from '@/components/forms/registerLink';

const Navbar = () => {
   const [open, setOpen] = useState(false);
   const [showLink, setShowLink] = useState(false);
   const router = useRouter();

   const handleClose = () => setOpen(false);
   const handleOpen = () => setOpen(true);
   const handleShowLink = () => setShowLink(true);

   const handleCloseSession = () => {
      router.replace('/');
      sessionStorage.removeItem('token');
   };

   return (
      <>
         {showLink && <LinkForm open={showLink} title='Crear enlace' onClose={setShowLink} />}

         <CssBaseline />
         <AppBar position='static' enableColorOnDark color='secondary'>
            <Container maxWidth='lg'>
               <Toolbar disableGutters sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                     <Button className={Styles.navbarButton} onClick={handleShowLink}>
                        Registrar
                     </Button>
                  </Box>
                  <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                     <Button className={Styles.navbarButton} onClick={handleCloseSession}>
                        cerrar sesión
                     </Button>
                  </Box>
               </Toolbar>

               <Toolbar disableGutters sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size='large'
                     edge='start'
                     color='inherit'
                     aria-label='menu'
                     sx={{ mr: 2 }}
                     onClick={handleOpen}
                  >
                     <MenuIcon />
                  </IconButton>
               </Toolbar>
            </Container>
         </AppBar>

         <Drawer anchor='left' elevation={20} open={open} onClose={handleClose}>
            <Button
               color='inherit'
               size='large'
               startIcon={<CloseIcon fontSize='large' />}
               className={Styles.closeButton}
               onClick={handleClose}
            />
            <List>
               <ListItem disablePadding className={Styles.drawerList}>
                  <ListItemButton>
                     <ListItemIcon onClick={handleShowLink}>
                        <AddCircleIcon className={Styles.drawerIconList} />
                        Registrar enlace
                     </ListItemIcon>
                  </ListItemButton>
               </ListItem>
               <Divider />
               <ListItem disablePadding className={Styles.drawerList}>
                  <ListItemButton>
                     <ListItemIcon onClick={handleCloseSession}>
                        <MeetingRoomIcon className={Styles.drawerIconList} /> Cerrar sesión
                     </ListItemIcon>
                  </ListItemButton>
               </ListItem>
            </List>
         </Drawer>
      </>
   );
};

export default Navbar;
