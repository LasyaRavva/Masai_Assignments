const http = require('http');

function testRoute(path, callback) {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: path,
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      callback(null, {
        statusCode: res.statusCode,
        data: data
      });
    });
  });

  req.on('error', (error) => {
    callback(error);
  });

  req.end();
}

// Test all routes
console.log('Testing routes...\n');

testRoute('/test', (err, result) => {
  if (err) {
    console.log('❌ /test - Error:', err.message);
  } else {
    console.log('✓ /test');
    console.log('Response:', result.data);
  }
  
  testRoute('/readfile', (err, result) => {
    if (err) {
      console.log('❌ /readfile - Error:', err.message);
    } else {
      console.log('\n✓ /readfile');
      console.log('Response:', result.data);
    }
    
    testRoute('/systemdetails', (err, result) => {
      if (err) {
        console.log('❌ /systemdetails - Error:', err.message);
      } else {
        console.log('\n✓ /systemdetails');
        console.log('Response:', result.data);
      }
      
      testRoute('/getip', (err, result) => {
        if (err) {
          console.log('❌ /getip - Error:', err.message);
        } else {
          console.log('\n✓ /getip');
          console.log('Response:', result.data);
        }
        
        process.exit(0);
      });
    });
  });
});
