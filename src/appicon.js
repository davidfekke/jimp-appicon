
import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';
import cluster from 'cluster';
import getfilelist from './getfilelist';

const contents = require(path.join(__dirname, '../Contents.json'));
const filelist = getfilelist();

/**
 * @param {Type}
 * @return {Type}
 */
export default function (source) {
  const filepath = path.join(__dirname, source);
  const contentFile = path.join(__dirname, '../Contents.json');
  const workingdir = process.cwd();

  fs.mkdir('Icons', () => {
    fs.mkdir('Icons/Appicon.appiconset', () => {
      fs.createReadStream(contentFile).pipe(fs.createWriteStream('Icons/Appicon.appiconset/Contents.json'));
      if (cluster.isMaster) {
        for (var i = 0; i < filelist.length; i++) {
          const count = i + 1;
          cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
          // console.log(`worker ${worker.process.pid} died`);
        });
      } else if (cluster.isWorker) {
        // cluster.worker.id
        const width = filelist[cluster.worker.id-1].size.split('x')[0];
        const scale = filelist[cluster.worker.id-1].scale.charAt(0);
        const scaledSize = width * scale;
        const filepath = path.join(workingdir, '/' + filelist[cluster.worker.id-1].filename);
        resizeAndSaveIcon(source, filepath, scaledSize);
      }
    });
  });
  return true;
}

function resizeAndSaveIcon(filename, name, size) {
    Jimp.read(filename).then(function (icon) {
    icon.resize(size, size)             // resize  
        .write(name, (err, result) => {
            if (err) {
                console.log('Error: ' + err);
            }
            process.exit(0); 
        });                   // save 
        console.log('Writting to: ' + name);
    }).catch(function (err) {
        console.error(err);
    });
}