const fs = require('fs');
const archiver = require('archiver');

// Create output directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Create a write stream
const output = fs.createWriteStream('dist/ecolearn-project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

// Listen for errors
archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the output file
archive.pipe(output);

// Add files and directories
archive.directory('src/', 'src');
archive.file('index.html', { name: 'index.html' });
archive.file('package.json', { name: 'package.json' });
archive.file('tsconfig.json', { name: 'tsconfig.json' });
archive.file('tsconfig.node.json', { name: 'tsconfig.node.json' });
archive.file('vite.config.ts', { name: 'vite.config.ts' });
archive.file('postcss.config.js', { name: 'postcss.config.js' });
archive.file('tailwind.config.js', { name: 'tailwind.config.js' });
archive.file('eslint.config.js', { name: 'eslint.config.js' });

// Finalize the archive
archive.finalize();