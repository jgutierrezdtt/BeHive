import { Box, Typography, Container, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.primary">
            © {new Date().getFullYear()} BeHive - Secure Development Terminology
          </Typography>
          <MuiLink 
            href="https://github.com/yourusername/BeHive" 
            target="_blank" 
            rel="noopener noreferrer"
            color="text.primary"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <GitHubIcon sx={{ mr: 0.5 }} />
            GitHub
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;