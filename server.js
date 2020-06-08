const express = require('express');
const request = require('request');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get ('/xkcd', (req, res) => {
	request('https://xkcd.com/info.0.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var comic = JSON.parse(body);
      res.send(comic);
    }
  })
});
app.get ('/boredapi', (req, res) => {
	var type = req.query.type;
	var participants = req.query.participants;
	var url = 'https://www.boredapi.com/api/activity?type=' + type + '&participants=' + participants;
	request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var activity = JSON.parse(body);
      res.send(activity);
    }
  })
});