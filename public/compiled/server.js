'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var config = require('./config/config');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb(config.BREWERYDB_KEY);
var mongoose = require("mongoose");
app.db = mongoose.connect('mongodb://127.0.0.1/test');
app.use(express.static('public'));
app.use(cors());

var port = 8080;

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.get('/all', cors(), function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description' }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/AmericanIPAs', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 30 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/Dortmunder', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 79 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/ScotchAle', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 15 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/BelgianFrench', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 65 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/cider', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 155 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImNvcnMiLCJjb25maWciLCJCcmV3ZXJ5RGIiLCJicmV3ZGIiLCJCUkVXRVJZREJfS0VZIiwibW9uZ29vc2UiLCJkYiIsImNvbm5lY3QiLCJ1c2UiLCJzdGF0aWMiLCJwb3J0IiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImdldCIsInJlcSIsInJlcyIsImJlZXIiLCJmaW5kIiwiYWJ2Iiwid2l0aEJyZXdlcmllcyIsImZvcm1hdCIsIm9yZGVyIiwiZXJyIiwiZGF0YSIsImVycm9yIiwibGltaXRlZERhdGEiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsImxlbmd0aCIsInNlbmQiLCJzdHlsZUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsTUFBTUYsU0FBVjtBQUNBLElBQUlHLE9BQU9GLFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSUcsU0FBU0gsUUFBUSxpQkFBUixDQUFiO0FBQ0EsSUFBSUksWUFBWUosUUFBUSxnQkFBUixDQUFoQjtBQUNBLElBQUlLLFNBQVMsSUFBSUQsU0FBSixDQUFjRCxPQUFPRyxhQUFyQixDQUFiO0FBQ0EsSUFBSUMsV0FBV1AsUUFBUSxVQUFSLENBQWY7QUFDQUMsSUFBSU8sRUFBSixHQUFTRCxTQUFTRSxPQUFULENBQWlCLDBCQUFqQixDQUFUO0FBQ0FSLElBQUlTLEdBQUosQ0FBUVgsUUFBUVksTUFBUixDQUFlLFFBQWYsQ0FBUjtBQUNBVixJQUFJUyxHQUFKLENBQVFSLE1BQVI7O0FBRUEsSUFBSVUsT0FBTyxJQUFYOztBQUVBWCxJQUFJWSxNQUFKLENBQVdELElBQVgsRUFBaUIsWUFBVztBQUMxQkUsVUFBUUMsR0FBUixDQUFZLHVCQUF1QkgsSUFBbkM7QUFDRCxDQUZEOztBQUlBWCxJQUFJZSxHQUFKLENBQVEsTUFBUixFQUFnQmQsTUFBaEIsRUFBd0IsVUFBU2UsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ3pDYixTQUFPYyxJQUFQLENBQVlDLElBQVosQ0FBaUIsRUFBRUMsS0FBSyxDQUFDLENBQVIsRUFBV0MsZUFBZSxHQUExQixFQUErQkMsUUFBUSxNQUF2QyxFQUErQ0MsT0FBTyxhQUF0RCxFQUFqQixFQUF3RixVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDMUcsUUFBSUQsR0FBSixFQUFTO0FBQ1BYLGNBQVFhLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlHLGNBQWMsQ0FBQ0YsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBRCxFQUE2Q04sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBN0MsRUFBeUZOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQXpGLEVBQXFJTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUFySSxFQUFpTE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBakwsRUFBNk5OLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQTdOLEVBQXlRTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUF6USxFQUFxVE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBclQsRUFBaVdOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQWpXLEVBQTZZTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUE3WSxDQUFsQjtBQUNBZCxVQUFJZSxJQUFKLENBQVNMLFdBQVQ7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVREOztBQVdBM0IsSUFBSWUsR0FBSixDQUFRLGVBQVIsRUFBeUIsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQzFDYixTQUFPYyxJQUFQLENBQVlDLElBQVosQ0FBaUIsRUFBRUMsS0FBSyxDQUFDLENBQVIsRUFBV0MsZUFBZSxHQUExQixFQUErQkMsUUFBUSxNQUF2QyxFQUErQ0MsT0FBTyxhQUF0RCxFQUFxRVUsU0FBUyxFQUE5RSxFQUFqQixFQUFxRyxVQUFTVCxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDdkgsUUFBSUQsR0FBSixFQUFTO0FBQ1BYLGNBQVFhLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlHLGNBQWMsQ0FBQ0YsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBRCxFQUE2Q04sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBN0MsRUFBeUZOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQXpGLEVBQXFJTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUFySSxFQUFpTE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBakwsRUFBNk5OLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQTdOLEVBQXlRTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUF6USxFQUFxVE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBclQsRUFBaVdOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQWpXLEVBQTZZTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUE3WSxDQUFsQjtBQUNBZCxVQUFJZSxJQUFKLENBQVNMLFdBQVQ7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVREOztBQVdBM0IsSUFBSWUsR0FBSixDQUFRLGFBQVIsRUFBdUIsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ3hDYixTQUFPYyxJQUFQLENBQVlDLElBQVosQ0FBaUIsRUFBRUMsS0FBSyxDQUFDLENBQVIsRUFBV0MsZUFBZSxHQUExQixFQUErQkMsUUFBUSxNQUF2QyxFQUErQ0MsT0FBTyxhQUF0RCxFQUFxRVUsU0FBUyxFQUE5RSxFQUFqQixFQUFxRyxVQUFTVCxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDdkgsUUFBSUQsR0FBSixFQUFTO0FBQ1BYLGNBQVFhLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlHLGNBQWMsQ0FBQ0YsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBRCxFQUE2Q04sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBN0MsRUFBeUZOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQXpGLEVBQXFJTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUFySSxFQUFpTE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBakwsRUFBNk5OLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQTdOLEVBQXlRTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUF6USxFQUFxVE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBclQsRUFBaVdOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQWpXLEVBQTZZTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUE3WSxDQUFsQjtBQUNBZCxVQUFJZSxJQUFKLENBQVNMLFdBQVQ7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVREOztBQVdBM0IsSUFBSWUsR0FBSixDQUFRLFlBQVIsRUFBc0IsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ3ZDYixTQUFPYyxJQUFQLENBQVlDLElBQVosQ0FBaUIsRUFBRUMsS0FBSyxDQUFDLENBQVIsRUFBV0MsZUFBZSxHQUExQixFQUErQkMsUUFBUSxNQUF2QyxFQUErQ0MsT0FBTyxhQUF0RCxFQUFxRVUsU0FBUyxFQUE5RSxFQUFqQixFQUFxRyxVQUFTVCxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDdkgsUUFBSUQsR0FBSixFQUFTO0FBQ1BYLGNBQVFhLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlHLGNBQWMsQ0FBQ0YsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBRCxFQUE2Q04sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBN0MsRUFBeUZOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQXpGLEVBQXFJTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUFySSxFQUFpTE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBakwsRUFBNk5OLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQTdOLEVBQXlRTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUF6USxFQUFxVE4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBclQsRUFBaVdOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQWpXLEVBQTZZTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUE3WSxDQUFsQjtBQUNBZCxVQUFJZSxJQUFKLENBQVNMLFdBQVQ7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVREOztBQVdBM0IsSUFBSWUsR0FBSixDQUFRLGdCQUFSLEVBQTBCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUMzQ2IsU0FBT2MsSUFBUCxDQUFZQyxJQUFaLENBQWlCLEVBQUVDLEtBQUssQ0FBQyxDQUFSLEVBQVdDLGVBQWUsR0FBMUIsRUFBK0JDLFFBQVEsTUFBdkMsRUFBK0NDLE9BQU8sYUFBdEQsRUFBcUVVLFNBQVMsRUFBOUUsRUFBakIsRUFBcUcsVUFBU1QsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ3ZILFFBQUlELEdBQUosRUFBUztBQUNQWCxjQUFRYSxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJRyxjQUFjLENBQUNGLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQUQsRUFBNkNOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQTdDLEVBQXlGTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUF6RixFQUFxSU4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBckksRUFBaUxOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQWpMLEVBQTZOTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUE3TixFQUF5UU4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBelEsRUFBcVROLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQXJULEVBQWlXTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUFqVyxFQUE2WU4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBN1ksQ0FBbEI7QUFDQWQsVUFBSWUsSUFBSixDQUFTTCxXQUFUO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0FURDs7QUFXQTNCLElBQUllLEdBQUosQ0FBUSxRQUFSLEVBQWtCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNuQ2IsU0FBT2MsSUFBUCxDQUFZQyxJQUFaLENBQWlCLEVBQUVDLEtBQUssQ0FBQyxDQUFSLEVBQVdDLGVBQWUsR0FBMUIsRUFBK0JDLFFBQVEsTUFBdkMsRUFBK0NDLE9BQU8sYUFBdEQsRUFBcUVVLFNBQVMsR0FBOUUsRUFBakIsRUFBc0csVUFBU1QsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ3hILFFBQUlELEdBQUosRUFBUztBQUNQWCxjQUFRYSxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJRyxjQUFjLENBQUNGLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQUQsRUFBNkNOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQTdDLEVBQXlGTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUF6RixFQUFxSU4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBckksRUFBaUxOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQWpMLEVBQTZOTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUE3TixFQUF5UU4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBelEsRUFBcVROLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQXJULEVBQWlXTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUFqVyxFQUE2WU4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBN1ksQ0FBbEI7QUFDQWQsVUFBSWUsSUFBSixDQUFTTCxXQUFUO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0FURCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9jb25maWcnKTtcbnZhciBCcmV3ZXJ5RGIgPSByZXF1aXJlKCdicmV3ZXJ5ZGItbm9kZScpO1xudmFyIGJyZXdkYiA9IG5ldyBCcmV3ZXJ5RGIoY29uZmlnLkJSRVdFUllEQl9LRVkpO1xudmFyIG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuYXBwLmRiID0gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovLzEyNy4wLjAuMS90ZXN0Jyk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5cbnZhciBwb3J0ID0gODA4MDtcblxuYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbiBwb3J0ICcgKyBwb3J0KTtcbn0pO1xuXG5hcHAuZ2V0KCcvYWxsJywgY29ycygpLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBicmV3ZGIuYmVlci5maW5kKHsgYWJ2OiAtNSwgd2l0aEJyZXdlcmllczogJ1knLCBmb3JtYXQ6ICdqc29uJywgb3JkZXI6ICdkZXNjcmlwdGlvbicgfSwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGltaXRlZERhdGEgPSBbZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldXTtcbiAgICAgIHJlcy5zZW5kKGxpbWl0ZWREYXRhKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmFwcC5nZXQoJy9BbWVyaWNhbklQQXMnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBicmV3ZGIuYmVlci5maW5kKHsgYWJ2OiAtNSwgd2l0aEJyZXdlcmllczogJ1knLCBmb3JtYXQ6ICdqc29uJywgb3JkZXI6ICdkZXNjcmlwdGlvbicsIHN0eWxlSWQ6IDMwIH0sIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbWl0ZWREYXRhID0gW2RhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXV07XG4gICAgICByZXMuc2VuZChsaW1pdGVkRGF0YSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hcHAuZ2V0KCcvRG9ydG11bmRlcicsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGJyZXdkYi5iZWVyLmZpbmQoeyBhYnY6IC01LCB3aXRoQnJld2VyaWVzOiAnWScsIGZvcm1hdDogJ2pzb24nLCBvcmRlcjogJ2Rlc2NyaXB0aW9uJywgc3R5bGVJZDogNzkgfSwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGltaXRlZERhdGEgPSBbZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldXTtcbiAgICAgIHJlcy5zZW5kKGxpbWl0ZWREYXRhKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmFwcC5nZXQoJy9TY290Y2hBbGUnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBicmV3ZGIuYmVlci5maW5kKHsgYWJ2OiAtNSwgd2l0aEJyZXdlcmllczogJ1knLCBmb3JtYXQ6ICdqc29uJywgb3JkZXI6ICdkZXNjcmlwdGlvbicsIHN0eWxlSWQ6IDE1IH0sIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbWl0ZWREYXRhID0gW2RhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXV07XG4gICAgICByZXMuc2VuZChsaW1pdGVkRGF0YSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hcHAuZ2V0KCcvQmVsZ2lhbkZyZW5jaCcsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGJyZXdkYi5iZWVyLmZpbmQoeyBhYnY6IC01LCB3aXRoQnJld2VyaWVzOiAnWScsIGZvcm1hdDogJ2pzb24nLCBvcmRlcjogJ2Rlc2NyaXB0aW9uJywgc3R5bGVJZDogNjUgfSwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGltaXRlZERhdGEgPSBbZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldXTtcbiAgICAgIHJlcy5zZW5kKGxpbWl0ZWREYXRhKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmFwcC5nZXQoJy9jaWRlcicsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGJyZXdkYi5iZWVyLmZpbmQoeyBhYnY6IC01LCB3aXRoQnJld2VyaWVzOiAnWScsIGZvcm1hdDogJ2pzb24nLCBvcmRlcjogJ2Rlc2NyaXB0aW9uJywgc3R5bGVJZDogMTU1IH0sIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbWl0ZWREYXRhID0gW2RhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXV07XG4gICAgICByZXMuc2VuZChsaW1pdGVkRGF0YSk7XG4gICAgfVxuICB9KTtcbn0pOyJdfQ==