import path from 'path';
import fs from 'fs';
const contents = require(path.join(__dirname, '../Contents.json')).images;
const android = require(path.join(__dirname, '../android.json'));

export default function () {
  const fileArray = contents.map(i => { 
      return { 
          "size" : i.size,
          "filename" : 'Icons/Appicon.appiconset/' + i.filename,
          "scale" : i.scale
      };
  });
  const combinedArray = [...fileArray, ...android];
  combinedArray.push({ "size": '512x512', 'filename': 'Icons/iTunesArtwork@1x.png', 'scale': '1x' });
  combinedArray.push({ "size": '512x512', 'filename': 'Icons/iTunesArtwork@2x.png', 'scale': '2x' });
  combinedArray.push({ "size": '512x512', 'filename': 'Icons/iTunesArtwork@3x.png', 'scale': '3x' });
  return combinedArray;
}

