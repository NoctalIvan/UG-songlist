/* Converts webSongBook_export.csv into JSON file */

const fs = require('fs');
const songs = require('../data/songList.json')

const artists = [...new Set(songs.map(s => s.band_name))].map(a => ({artist: a, type: null}))
fs.writeFileSync('./../data/artistTypes.json', JSON.stringify(artists, null, 2))