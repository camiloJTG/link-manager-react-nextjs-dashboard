import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
   return (
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
         <Typography variant='h6' align='center' gutterBottom>
            Link Manager
         </Typography>
         <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
            Project for educational purposes using React, nextjsm and UI material.
         </Typography>
      </Box>
   );
};

export default Footer;
