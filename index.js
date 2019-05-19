"use strict";

const jsonfile = require("jsonfile");

const file = "./data.json";

jsonfile
  .readFile(file)
  .then(obj => add(obj))
  .catch(error => console.error(error));

function add(object) {
  let UTCTIME = Date.now();
  let localTime = new Date();

  object.data.push({
    UTC: `${UTCTIME}`,
    localTime: `${localTime}`,
    data: ["所求皆如愿，所行化坦荡", "多喜乐，长安宁"]
  });

  jsonfile.writeFile(file, object, { spaces: 2, EOL: "\r\n" }, function(err) {
    if (err) console.error(err);
  });
}
