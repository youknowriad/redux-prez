import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/react-redux.example")
import run from "../preview/step-8"

const ReactRedux = () => (
  <Preview run={run}>
    <Heading fit>{`Container/Dumb Components`}</Heading>
    <CodeSlide
      slide-index="react-redux"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [41, 42], title: "Dumb (UI) component" },
        { loc: [52, 53], title: "Container component", note: "mapStateToProps" },
        { loc: [62, 63], title: "Container component", note: "mapStateToProps" },
        { loc: [65, 71], title: "Container component", note: "mapDispatchToProps" },
        { loc: [72, 74], title: "Container component", note: "connect" },
        { loc: [135, 138], title: "App Component", note: "Utiliser les containers" },
        { loc: [134, 135], title: "App Component", note: "ajout du provider" }
      ]}
    />
  </Preview>
)

export default ReactRedux
