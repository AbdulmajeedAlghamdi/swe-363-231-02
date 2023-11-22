// Exercise-2
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

if (process.argv.length !== 4) {
  console.log('Usage: node copyFiles.js <source_directory> <target_directory>');
  process.exit(1);
}

const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

function copyFiles(sourceDir, targetDir, extensions) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(sourceDir, file);

      fs.stat(filePath, (statErr, stats) => {
        if (statErr) {
          console.error('Error reading file stats:', statErr);
          return;
        }

        if (stats.isFile()) {
          const fileExtension = path.extname(file);
          if (extensions.includes(fileExtension)) {
            const targetFilePath = path.join(targetDir, file);
            fse.copy(filePath, targetFilePath, (copyErr) => {
              if (copyErr) {
                console.error(`Error copying ${file}:`, copyErr);
              } else {
                console.log(`Copied ${file} to ${targetDir}`);
              }
            });
          }
        }
      });
    });
  });
}