// Simple script for deploying the BeHive app to GitHub Pages
// This ensures that our SPA routing works correctly on GitHub Pages

const fs = require('fs');
const path = require('path');
const docsPath = path.resolve(__dirname, 'docs');

// Copy index.html to 404.html to handle SPA routing
fs.copyFileSync(
  path.join(docsPath, 'index.html'),
  path.join(docsPath, '404.html')
);

console.log('Successfully prepared for GitHub Pages deployment!');