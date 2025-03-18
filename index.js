// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get('/api/:date?', (req, res) => {
  let dateParam = req.params.date;

  // If no path parameter, check query parameter
  if (!dateParam) {
      dateParam = req.query.date;
  }

  // Case 7 & 8: Empty date parameter returns current time
  if (!dateParam) {
      const currentDate = new Date();
      return res.json({
          unix: currentDate.getTime(),
          utc: currentDate.toUTCString()
      });
  }

  // Handle both Unix timestamp and date string
  let date;
  if (!isNaN(dateParam) && !isNaN(parseInt(dateParam))) {
      // Treat as Unix timestamp in milliseconds
      date = new Date(parseInt(dateParam));
  } else {
      // Treat as date string
      date = new Date(dateParam);
  }

  // Case 6: Invalid date handling
  if (isNaN(date.getTime())) {
      return res.json({ error: "Invalid Date" });
  }

  // Cases 2, 3, 4, 5: Return unix and utc for valid dates
  res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
  });
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
