import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/from-scratch.example")
import run from "../preview/step-1"

const FromScratch = () => (
  <Preview run={run}>
    <Heading fit>Comment on fait alors ?</Heading>
    <CodeSlide
      slide-index="from-scratch"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [0, 4], title: "A state" },
        { loc: [5, 7], title: "A render function" },
        { loc: [7, 10], title: "A render function", note: "On affiche les todos" },
        { loc: [11, 15], title: "A render function", note: "On affiche le formulaire" },
        { loc: [16, 17], title: "A render function", note: "Et c'est tout" },
        { loc: [19, 21], title: "Bootstrap" }
      ]}
    />
  </Preview>
)

export default FromScratch
