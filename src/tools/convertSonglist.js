/* Converts webSongBook_export.csv into JSON file */

const fs = require('fs');
const csv = fs.readFileSync('./../data/webSongBook_export.csv').toString()

const result = csv
    .split('\n')
    .slice(1)
    .map(line => line.split(','))
    .map(([artist, title, version, link]) => ({artist, title, version, link}))

fs.writeFileSync('./../data/songList.json', JSON.stringify(result, null, 2))