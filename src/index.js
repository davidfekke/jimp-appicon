var Jimp = require("jimp");
const contents = require('../Contents.json');
const filename = '../SF1Good_Marketing.png';

/**
 * @param {Type}
 * @return {Type}
 */
export default function () {
  contents.images.forEach(i => {
    console.log('Processing: ' + i.filename);
    const width = i.size.split('x')[0];
    const scale = i.scale.charAt(0);
    const scaledSize = width * scale;
    resizeAndSaveIcon(filename, i.filename, scaledSize);
  });
  return true
}



function resizeAndSaveIcon(filename, name, size) {
    Jimp.read(filename).then(function (icon) {
    icon.resize(size, size)             // resize  
        .write(name);                   // save 
    }).catch(function (err) {
        console.error(err);
    });
}
