import { useState } from 'react';
import { 
  Typography, 
  Box, 
  Chip,
  TextField,
  InputAdornment
} from '@mui/material';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import TermCard from '../components/TermCard';
import { securityTerms, getAllCategories } from '../data/securityTerms';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const allCategories = getAllCategories();

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category) 
        : [...prev, category]
    );
  };

  const filteredTerms = securityTerms.filter(term => {
    const matchesSearch = 
      term.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      term.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategories = 
      selectedCategories.length === 0 || 
      term.categories.some(category => selectedCategories.includes(category));
    
    return matchesSearch && matchesCategories;
  });

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Be Hive
        </Typography>
        <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
          Security Development Terminology
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
          Your comprehensive resource for secure development terminology, practices, and methodologies.
          Explore the key concepts that every developer should know to build secure applications.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search security terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {allCategories.map(category => (
            <Chip
              key={category}
              label={category}
              clickable
              color={selectedCategories.includes(category) ? "secondary" : "default"}
              onClick={() => toggleCategory(category)}
              variant={selectedCategories.includes(category) ? "filled" : "outlined"}
            />
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {filteredTerms.map(term => (
          <Grid item xs={12} sm={6} md={4} key={term.id}>
            <TermCard term={term} />
          </Grid>
        ))}
        {filteredTerms.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center" sx={{ my: 4 }}>
              No security terms found. Try adjusting your search or filters.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Home;