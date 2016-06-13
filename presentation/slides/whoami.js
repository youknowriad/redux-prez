import React from "react"

import { Heading, Link, Text } from "spectacle"

const WhoAmI = () => (
  <div>
    <Heading textAlign="left" textSize="1.5em" margin="20px 0">Riad Benguella</Heading>
    <Text textAlign="left" margin="10px 0" textColor="primary"><Link href="http://twitter.com/riadbenguella">@riadbenguella</Link></Text>
    <Text textAlign="left" margin="10px 0" textColor="primary"><Link href="http://github.com/youknowriad">github.com/youknowriad</Link></Text>
    <Text textAlign="left" margin="10px 0" textColor="primary"><Link href="http://riadbenguella.com">riadbenguella.com</Link></Text>
  </div>
)

export default WhoAmI
