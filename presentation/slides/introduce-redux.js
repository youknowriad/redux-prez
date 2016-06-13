import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/introduce-redux.example")
import run from "../preview/step-4"

const IntroduceRedux = () => (
  <Preview run={run}>
    <Heading fit>{`Let's introduce Redux`}</Heading>
    <CodeSlide
      slide-index="introduce-redux"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [26, 27], title: "Create Store", note: "state initial et reducer" },
        { loc: [29, 30], title: "Wrap dispatch and subscribe" },
        { loc: [38, 39], title: "Wrap dispatch and subscribe" },
        { loc: [43, 44], title: "Ajout du getState" },
        { loc: [45, 46], title: "retourner le store" },
        { loc: [48, 49], title: "Utiliser le store" },
        { loc: [58, 59], title: "Utiliser le store" }
      ]}
    />
  </Preview>
)

export default IntroduceRedux
