import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/add-reducer.example")
import run from "../preview/step-2"

const AddReducer = () => (
  <Preview run={run}>
    <Heading fit>Le state évolue avec le temps</Heading>
    <CodeSlide
      slide-index="add-reducer"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [5, 12], title: "A reducer", note: "old state + action = new state" },
        { loc: [26, 32], title: "dispatch" },
        { loc: [33, 35], title: "refresh" },
        { loc: [37, 42], title: "Exemple : ajouter un todo" }
      ]}
    />
  </Preview>
)

export default AddReducer
