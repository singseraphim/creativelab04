const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


let items = [];
let id = 0;
let color = false;

app.get('/api/items', (req, res) => {
  res.send(items);
});

app.post('/api/items', (req, res) => {
  if (items.length < 5) {
  id = id + 1;
  let item = {id:id, text:req.body.text, color:color};
  items.push(item);
  res.send(item);
  }
});
app.delete('/api/items/', (req, res) => {
  items.splice(0, (items.length));
  res.sendStatus(200);
});
app.put('/api/items/', (req, res) => {
  for (var i = 0; i < items.length; i++) {
    if (items[i].color == true) {
        items[i].color = false;
        color = false;
    }
    else if (items[i].color == false) {
        items[i].color = true;
        color = true;
    }
  }
    res.send(items);
});
/*
captain's log:
array works fine. 
can output array contents.
can delete array contents. 
array limited to five. 
fixed storage.
successfully updated all items to new image file name
output images! Need to fix round cactus. Go ahead and redraw. Also redraw the weird shape cactus. 

figure out how to host on droplet


*/


app.listen(3000, () => console.log('Server listening on port 3000!'))