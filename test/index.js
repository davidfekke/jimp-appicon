import test from "tape";
import jimpAppicon from "../src/appicon";
import fs from 'fs';
import path from 'path';
const filename = '../SF1Good_Marketing.png';
const filepath = path.join(__dirname, filename);
console.log(__dirname);
//process.mainModule.filename
test("jimpAppicon", (t) => {
  t.plan(1)
  t.equal(true, jimpAppicon(filepath, __dirname), "return true")
})
