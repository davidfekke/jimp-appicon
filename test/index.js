import test from "tape"
import jimpAppicon from "../src"

test("jimpAppicon", (t) => {
  t.plan(1)
  t.equal(true, jimpAppicon(), "return true")
})
