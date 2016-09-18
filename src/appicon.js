import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';
const contents = require('../Contents.json');

/**
 * @param {Type}
 * @return {Type}
 */
export default function (source, dest) {
  const filepath = path.join(__dirname, source);
  const contentFile = path.join(__dirname, '../Contents.json');

  fs.mkdir('Appicon.iconset', () => {
    fs.createReadStream(contentFile).pipe(fs.createWriteStream('Appicon.iconset/Contents.json'));
    contents.images.forEach(i => {
      console.log('Processing: ' + i.filename);
      const width = i.size.split('x')[0];
      const scale = i.scale.charAt(0);
      const scaledSize = width * scale;
      resizeAndSaveIcon(source, 'Appicon.iconset/' + i.filename, scaledSize);
    });
  });
  return true;
}

function resizeAndSaveIcon(filename, name, size) {
    Jimp.read(filename).then(function (icon) {
    icon.resize(size, size)             // resize  
        .write(name);                   // save 
    }).catch(function (err) {
        console.error(err);
    });
}