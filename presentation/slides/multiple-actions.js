import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/multiple-actions.example")
import run from "../preview/step-5"

const MultipleActions = () => (
  <Preview run={run}>
    <Heading fit>{`Gérer plusieurs type d'actions`}</Heading>
    <CodeSlide
      slide-index="multiple-actions"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [6, 8], title: "Le reducer", note: "switch sur l'action" },
        { loc: [18, 20], title: "Le reducer", note: "ne rien faire par défaut" },
        { loc: [10, 18], title: "Le reducer", note: "ajout du toggle todo" },
        { loc: [26, 28], title: "Le render", note: "ajouter l'event handler" },
        { loc: [52, 59], title: "L'action", note: "ajouter le dispatch" }
      ]}
    />
  </Preview>
)

export default MultipleActions
