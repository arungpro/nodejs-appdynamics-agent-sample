'use strict';

require("appdynamics").profile({
 controllerHostName: 'aruganga-m-l2db.local',
 controllerPort: 8090,
 accountName: 'customer1',
 accountAccessKey: '1afacb63-b7b2-4d04-be54-bf173dde4c0e',
 debug: true,
 libagent: true,
//  logging: {
//     'logfiles': [
//       {
//         'root_directory': '/tmp/appd/',
//         'level': 'trace',
//         'max_size': 5242880,
//         'max_files': 1,
//       }
//     ]
//   },
 applicationName: 'TestDoc',
 tierName: 'version_nodejs',
 nodeName: 'process10'
});

const express = require('express');

// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log('nodejs project1')
  res.send('nodejs project1\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
