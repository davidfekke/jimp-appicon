
import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';
const contents = require(path.join(__dirname, '../Contents.json'));

/**
 * @param {Type}
 * @return {Type}
 */
export default function (source) {
  const filepath = path.join(__dirname, source);
  const contentFile = path.join(__dirname, '../Contents.json');
  
  fs.mkdir('Icons', () => {
    resizeAndSaveIcon(source, 'Icons/iTunesArtwork@1x.png', 512);
    resizeAndSaveIcon(source, 'Icons/iTunesArtwork@2x.png', 1024);
    resizeAndSaveIcon(source, 'Icons/iTunesArtwork@3x.png', 1532);
    fs.mkdir('Icons/Appicon.appiconset', () => {
      fs.createReadStream(contentFile).pipe(fs.createWriteStream('Icons/Appicon.appiconset/Contents.json'));
      contents.images.forEach(i => {
        console.log('Processing: ' + i.filename);
        const width = i.size.split('x')[0];
        const scale = i.scale.charAt(0);
        const scaledSize = width * scale;
        resizeAndSaveIcon(source, 'Icons/Appicon.appiconset/' + i.filename, scaledSize);
      });
    });
  });
  return true;
}

function resizeAndSaveIcon(filename, name, size) {
    Jimp.read(filename).then(function (icon) {
    icon.resize(size, size)             // resize  
        .write(name);                   // save 
        console.log('Writting to: ' + name);
    }).catch(function (err) {
        console.error(err);
    });
}