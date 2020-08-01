var express = require('express');
var app = express();
app.get('/autohospot_internet', function (req, res) {
    const { exec } = require('child_process');
    exec('gnome-terminal -- /bin/bash -c "bash Autohotspot/autohotspot-setup.sh AHN;read"', (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
      } else {
       // the *entire* stdout and stderr (buffered)
       console.log(`stdout: ${stdout}`);
       console.log(`stderr: ${stderr}`);
      }
      res.send(`stdout: ${stdout}`)
    });
    
    
});


app.get('/autohotspot_direct', function (req, res) {
  const { exec } = require('child_process');
  exec('gnome-terminal -- /bin/bash -c "bash Autohotspot/autohotspot-setup.sh AHD;read"', (err, stdout, stderr) => {
    if (err) {autohospot_internet
      console.error(err)
    } else {
     // the *entire* stdout and stderr (buffered)
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
    }
    res.send(`stdout: ${stdout}`)
  });
  
  
});

app.get('/static_hotspot', function (req, res) {
  const { exec } = require('child_process');
  exec('gnome-terminal -- /bin/bash -c "bash Autohotspot/autohotspot-setup.sh SHS;read"', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
     // the *entire* stdout and stderr (buffered)
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
    }
    res.send(`stdout: ${stdout}`)
  });
  
});

app.get('/remove_autohotspot_or_static_hotspot', function (req, res) {
  const { exec } = require('child_process');
  exec('gnome-terminal -- /bin/bash -c "bash Autohotspot/autohotspot-setup.sh REM;read"', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
    res.send(`stdout: ${stdout}`)
  });  


});


app.get('/change_add_wifi_network', function (req, res) {
  const { exec } = require('child_process');
  exec('gnome-terminal -- /bin/bash -c "bash Autohotspot/autohotspot-setup.sh SSI;read"', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
    res.send(`stdout: ${stdout}`)
  });  


});

app.get('/force_hotspot_force_network', function (req, res) {
  const { exec } = require('child_process');
  exec('gnome-terminal -- /bin/bash -c "bash Autohotspot/autohotspot-setup.sh FOR;read"', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
    res.send(`stdout: ${stdout}`)
  });  


});


app.get('/change_hotspot_sSID_and_password', function (req, res) {
  const { exec } = require('child_process');
  exec('gnome-terminal -- /bin/bash -c "bash Autohotspot/autohotspot-setup.sh HSS;read"', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
    res.send(`stdout: ${stdout}`)
  });  


});




app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});
