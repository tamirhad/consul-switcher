const express = require('express');
const router = express.Router();
const axios = require('axios');



var http = require('http');

router.delete('/', (req,res) => {
    http.get('http://172.20.20.10:8500/v1/kv/scale', (resp) => {
        let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    let buff = new Buffer(JSON.parse(data)[0].Value, 'base64');
    let text = buff.toString('ascii');
      let newnum = parseInt(text,10);
      newnum-=1;
      axios.put('http://172.20.20.10:8500/v1/kv/scale', newnum.toString())
    .then((resp) => {
        console.log("Status: ${resp.status}");
    }).catch((err) => {
        console.error(err);
    });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

 res.redirect('/');

});

router.post('/', (req,res) => {
    http.get('http://172.20.20.10:8500/v1/kv/scale', (resp) => {
        let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    let buff = new Buffer(JSON.parse(data)[0].Value, 'base64');
    let text = buff.toString('ascii');
      let newnum = parseInt(text,10);
      newnum+=1;
      axios.put('http://172.20.20.10:8500/v1/kv/scale', newnum.toString())
    .then((resp) => {
        console.log("Status: ${resp.status}");
    }).catch((err) => {
        console.error(err);
    });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

 res.redirect('/');

});
module.exports = router;
