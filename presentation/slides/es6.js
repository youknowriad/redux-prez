import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"

const code = require("raw!../code/es6.example")

const ES6 = () => (
  <div>
    <Heading fit>{`ES6 and more`}</Heading>
    <CodeSlide
      slide-index="es6"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [0, 4], title: "Arrow functions" },
        { loc: [6, 8], title: "Deconstruction" },
        { loc: [10, 12], title: "Shorthand syntax" },
        { loc: [14, 17], title: "Array spread" },
        { loc: [19, 22], title: "Object spread" },
        { loc: [24, 27], title: "Default values" }
      ]}
    />
  </div>
)

export default ES6
