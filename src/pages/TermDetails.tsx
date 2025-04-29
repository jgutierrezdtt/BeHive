import { useParams, useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Paper, 
  Chip, 
  Link, 
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkIcon from '@mui/icons-material/Link';
import { getTermById } from '../data/securityTerms';

const TermDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const term = id ? getTermById(id) : undefined;

  if (!term) {
    return (
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Term Not Found
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
          The security term you're looking for doesn't exist.
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate('/')}
        sx={{ mb: 3 }}
      >
        Back to all terms
      </Button>
      
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {term.name}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {term.categories.map(category => (
            <Chip 
              key={category} 
              label={category} 
              color="secondary" 
              size="small"
            />
          ))}
        </Box>
        
        <Typography variant="body1" paragraph>
          {term.fullDescription}
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom>
          References and Resources
        </Typography>
        
        <List>
          {term.references.map((reference, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <LinkIcon color="secondary" />
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Link 
                    href={reference.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    color="secondary"
                  >
                    {reference.title}
                  </Link>
                } 
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default TermDetails;