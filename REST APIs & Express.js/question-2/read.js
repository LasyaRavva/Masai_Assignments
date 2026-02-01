const fs = require('fs');
const path = require('path');

// Function to read Data.txt file
const readDataFile = (callback) => {
  const filePath = path.join(__dirname, 'Data.txt');
  
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// Synchronous version for immediate response
const readDataFileSync = () => {
  try {
    const filePath = path.join(__dirname, 'Data.txt');
    const data = fs.readFileSync(filePath, 'utf-8');
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  readDataFile,
  readDataFileSync
};
