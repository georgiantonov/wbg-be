const express = require('express');
const app = express();
const port = 8000;
app.set('port', port);

app.get('/', (req, res) => {
  res.send('WBG WMS Map Layers Test API');
});

app.get('/map-layers/population-density-2015', (req, res) => {
  res.json({
    layers: 'gpw-v4:gpw-v4-population-density_2015',
    format: 'image/png',
    attribution: 'SEDAC'
  });
});

app.get('/map-layers/urban-expansion-probabilities-2030', (req, res) => {
  res.json({
    layers: 'lulc:lulc-global-grid-prob-urban-expansion-2030',
    format: 'image/png',
    attribution: 'SEDAC'
  })
});

app.get('/overlays/wbg-test', (req, res) => {
  res.json({
    overlays: [
      {
        id: 'blueCircle',
        name: 'Blue Circle',
        enabled: true,
        coords: [ 42.87, 23.72 ],
        style: { radius: 25000, color: '#0000ff' }
      },
      {
        id: 'redCircle',
        name: 'Red Circle',
        enabled: true,
        coords: [ 42.47, 24.22 ],
        style: { radius: 25000, color: '#ff0000' }
      },
      {
        id: 'greenCircle',
        name: 'Green Circle',
        enabled: true,
        coords: [ 42.27, 24.72 ],
        style: { radius: 25000, color: '#00ff00' }
      }
    ]
  })
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`WBG WMS Map Layers Test API listening on port ${port}!`);
});
