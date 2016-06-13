import React from "react"

import { Image, Heading } from "spectacle"

const kat = require("../../assets/kat.png")

const Forget = () => (
  <div>
    <Image src={kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Oubliez tout :)
    </Heading>
  </div>
)

export default Forget
