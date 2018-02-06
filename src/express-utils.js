var Utils = require('./utils.js');

class ExpressUtils {

  static jsonRouteToFile(path, req, res) {

    var mockFileName = path;
    var mockJSON = Utils.readJSONFromFile(mockFileName, function(json, error) {

      if (error == null) { console.error("Error: " + error); }

      res.contentType = 'application/json';
      res.send(json);
    });
  }
  
}

var exports = module.exports = ExpressUtils;
