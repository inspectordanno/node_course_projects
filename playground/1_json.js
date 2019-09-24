const fs = require('fs');

const json = fs.readFileSync('1_json.json').toString();
const data = JSON.parse(json);

data.name = 'Dan';
data.age = 27;

const newData = JSON.stringify(data);
fs.writeFileSync('./1_json.json', newData);
