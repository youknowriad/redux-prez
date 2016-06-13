import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"

const code = require("raw!../code/side-effects.example")

const SideEffectsExamples = () => (
  <div>
    <Heading fit size={1} lineHeight={1} textColor="tertiary">
      Et les "side effects" dans tout ça ?
    </Heading>
    <CodeSlide
      slide-index="side-effects"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [0, 7], title: "Configurer les middlewares" },
        { loc: [8, 10], title: "Thunk Action Creator", note: "retoure une fonction" },
        { loc: [10, 18], title: "Thunk Action Creator", note: "multiple dispatch" },
        { loc: [21, 28], title: "Promise Action Creator", note: "retoure une promesse" }
      ]}
    />
  </div>
)

export default SideEffectsExamples
