const express = require('express');
const os = require('os');
const dns = require('dns');
const { readDataFileSync } = require('./read');

const app = express();
const PORT = 3000;

// Route 1: Basic test route
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Route 2: Read file route
app.get('/readfile', (req, res) => {
  try {
    const fileContent = readDataFileSync();
    res.send(fileContent);
  } catch (err) {
    res.status(500).send({
      error: 'Error reading file',
      message: err.message
    });
  }
});

// Route 3: System details route
app.get('/systemdetails', (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB',
    freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB',
    cpuModel: os.cpus()[0].model,
    cpuCoreCount: os.cpus().length
  };
  
  res.json(systemInfo);
});

// Route 4: Get IP address route
app.get('/getip', (req, res) => {
  const hostname = 'masaischool.com';
  
  // Resolve both IPv4 and IPv6
  dns.resolve4(hostname, (err, addresses) => {
    if (err) {
      return res.status(500).json({
        error: 'Unable to resolve hostname',
        message: err.message
      });
    }
    
    // Also try to get IPv6
    dns.resolve6(hostname, (err6, addresses6) => {
      const response = {
        hostname: hostname,
        ipv4: addresses[0] || null,
        ipv6: addresses6 ? addresses6[0] : null
      };
      
      // For backward compatibility, also include ipAddress
      response.ipAddress = addresses[0];
      
      res.json(response);
    });
  });
});

// 404 route
app.use((req, res) => {
  res.status(404).send('Route not found. Available routes: /test, /readfile, /systemdetails, /getip');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log(`  GET http://localhost:${PORT}/test`);
  console.log(`  GET http://localhost:${PORT}/readfile`);
  console.log(`  GET http://localhost:${PORT}/systemdetails`);
  console.log(`  GET http://localhost:${PORT}/getip`);
});
