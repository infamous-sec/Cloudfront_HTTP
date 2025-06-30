const fs = require('fs');
const path = require('path');

const REPLACEMENTS = {
  '__API_URL__': process.env.API_URL || 'https://default.api',
  '__VERSION__': process.env.VERSION || 'dev'
};

const walk = dir =>
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) return walk(full);
    let content = fs.readFileSync(full, 'utf8');
    Object.entries(REPLACEMENTS).forEach(([key, val]) => {
      content = content.replace(new RegExp(key, 'g'), val);
    });
    fs.writeFileSync(full, content);
  });

walk('./dist');
