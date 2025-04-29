import { Card, CardContent, CardActionArea, Typography, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SecurityTerm } from '../data/securityTerms';

interface TermCardProps {
  term: SecurityTerm;
}

const TermCard = ({ term }: TermCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
    >
      <CardActionArea 
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
        onClick={() => navigate(`/term/${term.id}`)}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            {term.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {term.shortDescription}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {term.categories.map((category) => (
              <Chip 
                key={category} 
                label={category} 
                size="small" 
                color="secondary" 
                variant="outlined" 
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TermCard;