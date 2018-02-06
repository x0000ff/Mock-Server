var fs = require("fs");

class Utils {

  static toJSON(string) {

    if (typeof string == "string") {
      return JSON.parse(string);
    }

    return null;
  };

  static readJSONFromFile(filepath, callback) {

    fs.readFile(filepath, function (error, data) {
      var json = Utils.toJSON(data.toString());
      callback(json, error);
    });
  }

}

var exports = module.exports = Utils;
