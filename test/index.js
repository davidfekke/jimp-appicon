import test from "tape";
import jimpAppicon from "../src/appicon";
import getfilelist from '../src/getfilelist';
import fs from 'fs';
import path from 'path';
const filename = '../SampleAppicon.png';
const filepath = path.join(__dirname, filename);

//process.mainModule.filename
test("jimpAppicon", (t) => {
  t.plan(1)
  t.equal(true, jimpAppicon(filepath), "return true")
})

test("getFileList", (t) => {
  t.plan(1)
  t.equal(79, getfilelist().length, "Nothing returned")
})