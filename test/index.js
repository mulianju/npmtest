/* eslint-env es6 */

const { describe } = require("mocha")
const assert = require("assert")

const { Hello } = require("../index")

describe("hello", () => {
  it("hello", async () => {
    let hello = new Hello()
    assert("hello mulianju", hello.hello())
  })
})
