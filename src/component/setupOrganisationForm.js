// src/SetupOrganizationForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress, Link } from '@mui/material';

const SetupOrganizationForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMetaDescription = async () => {
    if (!websiteUrl) {
      setError('Please enter a valid website URL.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Fetch the website's HTML content
      const response = await fetch(websiteUrl);
      const htmlText = await response.text();

      // Parse the meta-description from the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      const metaDescriptionTag = doc.querySelector('meta[name="description"]');

      if (metaDescriptionTag) {
        setMetaDescription(metaDescriptionTag.getAttribute('content'));
      } else {
        setMetaDescription('No meta description found.');
      }
    } catch (error) {
      console.error('Error fetching meta description:', error);
      setError('Failed to fetch meta description. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ companyName, websiteUrl, metaDescription });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Setup Organization
      </Typography>

      {/* Company Name Field */}
      <TextField
        label="Company Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />

      {/* Website URL Field */}
      <TextField
        label="Website URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
        placeholder="https://example.com"
        required
      />

      {/* Fetch Meta Description Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={fetchMetaDescription}
        disabled={isLoading}
        sx={{ mt: 2 }}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Fetch Meta Description'}
      </Button>

      {/* Meta Description Field */}
      <TextField
        label="Meta Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={metaDescription}
        onChange={(e) => setMetaDescription(e.target.value)}
      />

      {/* Error Message */}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="secondary" sx={{ mt: 3 }}>
       <Link href = "webpage" color="warning">submit</Link> 
      </Button>
    </Box>
  );
};

export default SetupOrganizationForm;