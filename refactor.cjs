const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = {
  'bg-stone-50': 'bg-warm-bg',
  'bg-stone-100': 'bg-warm-hover',
  'border-stone-200': 'border-warm-border',
  'text-stone-900': 'text-text-primary',
  'text-stone-700': 'text-text-primary',
  'text-stone-600': 'text-text-secondary',
  'text-stone-500': 'text-text-secondary',
  'text-stone-400': 'text-text-muted',
  'bg-blue-50': 'bg-warm-hover',
  'bg-blue-100': 'bg-warm-hover',
  'bg-blue-500': 'bg-accent-primary',
  'bg-blue-600': 'bg-accent-primary',
  'text-blue-500': 'text-accent-primary',
  'text-blue-600': 'text-accent-primary',
  'text-blue-700': 'text-accent-primary',
  'border-blue-200': 'border-warm-border',
  'border-blue-500': 'border-accent-primary',
  'bg-green-100': 'bg-accent-success/10',
  'text-green-500': 'text-accent-success',
  'text-green-600': 'text-accent-success',
  'text-green-700': 'text-accent-success',
  'bg-red-100': 'bg-accent-danger/10',
  'text-red-500': 'text-accent-danger',
  'text-red-600': 'text-accent-danger',
  'text-red-700': 'text-accent-danger',
};

walkDir(directoryPath, function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    for (const [oldClass, newClass] of Object.entries(replacements)) {
      // Find the class but ensuring it's not preceded by dark: or dark:hover:, etc.
      // Negative lookbehind for dark:[a-z-]*:
      // Also ensuring it's surrounded by word boundaries (or space/quotes)
      const regex = new RegExp(`(?<!dark:)(?<!dark:[a-z]+:)(?<![-a-zA-Z0-9])(${oldClass})(?![-a-zA-Z0-9])`, 'g');
      content = content.replace(regex, newClass);
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
